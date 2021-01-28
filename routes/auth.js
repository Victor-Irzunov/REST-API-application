const { Router } = require('express')
const router = Router()
const User = require('../models/user')                   //№53 - Сохранение сессии
const bcrypt = require('bcryptjs')                       //№59 - Шифрование пароля
const crypto = require('crypto')                             //№66 - Восстановление пароля                           встроена в node.js
const { validationResult } = require('express-validator')               //№71. Базовая валидация
const keys = require('../keys')
const nodemailer = require('nodemailer')                  //https://webdraftt.com/tutorial/nodejs/email
const regEmail = require('../emails/registration')
const chalk = require('chalk')
const resEmail = require('../emails/reset')
const { registerValidators } = require('../utils/validators_registr')
const { loginValidators } = require('../utils/validators_login')

//++почта
let transporter = nodemailer.createTransport({
	service: keys.SERVICE,
	auth: {
		user: keys.MY_EMAIL,
		pass: keys.MY_PASSWORD,
	}
});


//++ Вход 
router.get('/login', async (req, res) => {
	res.render('auth/login', {                                      //'auth/login' -папка и файл 	
		title: 'Авторизация',
		isLogin: true,
		loginError: req.flash('loginError'),                  //№61 - Сообщения об ошибке
		registerError: req.flash('registerError')             //№61 - Сообщения об ошибке
	})
})
router.post('/login', loginValidators, async (req, res) => {
	try {                                          //№58 - Логин пользователя
		const { email, password } = req.body

		const errors = validationResult(req)                                             //№74. Улучшение данных
		if (!errors.isEmpty()) {
			req.flash('loginError', errors.array()[0].msg)
			return res.status(422).redirect('/auth/login#login')                                      //422 - ошибки валидации
		}
		const candidate = await User.findOne({ email })

		const areSame = await bcrypt.compare(password, candidate.password)              //№59 - Шифрование пароля   //.compare - сравнвает

		if (areSame) {
			req.session.user = candidate                       //№58 - Логин пользователя
			req.session.isAuthenticated = true           //своя перем isAuthenticated
			req.session.save(err => {                    //в пакете express-session есть функионал (чтобы  редирект не раньше сесии)
				if (err) {
					throw err
				}
				else if (candidate.id === keys.ADMIN_SYSTEM) {
					req.session.isAdmin = true
					res.redirect('/')
				}
				else {
					res.redirect('/')
				}
			})
		}
		else {
			req.flash('loginError', 'Неверный пароль, пожалуйста попробуйте ещё')                   //№61 - Сообщения об ошибке
			res.redirect('/auth/login#login')
		}
	}
	catch (e) {
		console.log('Витя это ошибка e: ', e, '^^^^^^^^^^^^auth.js router^^^^^^^^^^люблю ошибки^^^^')
	}
})


//+++ Выход 
//№52 - Добавление сессии           
router.get('/logout', async (req, res) => {
	console.log(chalk.red('выход'))
	//очистить сесию 2 варианта
	// req.session.isAuthenticated = false
	//и более элегант метод
	req.session.destroy(() => {                       //.destroy(    очищать данные из БД //callback буде вызван когда будут уничтож все сессии
		res.redirect('/auth/login#login')
	})
})


// ++Регистрация               №57 
router.post('/register', registerValidators, async (req, res) => {
	try {
		const { email, password, name } = req.body


		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			req.flash('registerError', errors.array()[0].msg)
			return res.status(422).redirect('/auth/login#register')
		}



		const hashPassword = await bcrypt.hash(password, 10)                  //№59 - Шифрование пароля  //.hash( возвращает промис он асинхроный  // 10) сильнее шифрование
		const user = new User({															//новый класс 
			email, name, password: hashPassword, cart: { items: [] }                //тк клч и значение совподают то оставл так   //№57 - Регистрация пользователя  //: hashPassword  №59 - Шифрование пароля
		})
		await user.save()                                               //ждем когда пользователь сохраниться   //№57 - Регистрация пользователя
		res.redirect('/auth/login#login')                               //когда польз уже создан   //№57 - Регистрация пользователя

		//**email */
		let result = await transporter.sendMail(regEmail(email));
		console.log(result);

	}
	catch (e) {
		console.log('Витя это ошибка e: ', e, '````````````auth.js router`````люблю ошибки``````')
	}
})

//++ сброс пароля
router.get('/reset', (req, res) => {
	res.render('auth/reset', {
		title: 'Сброс пароля',
		error: req.flash('error')
	})
})
router.post('/reset', loginValidators, (req, res) => {
	try {
		//чтобы сгенерировать рандомный(случайный) ключ
		crypto.randomBytes(32, async (err, buffer) => {
			if (err) {
				req.flash('error', 'Что-то пошло не так, повторите попытку позже')     //req.flash вевести сообщение пользователю
				return res.redirect('/auth/reset')
			}

			const token = buffer.toString('hex')
			const candidate = await User.findOne({ email: req.body.email })        //проверяем сущ ли вообще в БД такой email  //№66 - Восстановление пароля

			if (candidate) {
				candidate.resetToken = token                                            //resetToken в модели            //№66 - Восстановление пароля
				candidate.resetTokenExp = Date.now() + 60 * 60 * 1000                       //60 * 60 * 1000 - задаем времяжизни токена 1 час      //№66 - Восстановление пароля
				await candidate.save()
				await transporter.sendMail(resEmail(candidate.email, token))
				res.redirect('/auth/login')
			} else {
				req.flash('error', 'Такого email нет, попробуйте пожалуйста еще раз')
				res.redirect('/auth/reset')
			}
		})
	} catch (e) {
		console.log('Витя это ошибка е:', e, '----супер-----------auth rou')
	}
})

//++изменение пароля
router.get('/password/:token', async (req, res) => {
	if (!req.params.token) {
		return res.redirect('/auth/login')
	}

	try {
		const user = await User.findOne({
			resetToken: req.params.token,
			resetTokenExp: { $gt: Date.now() }            //не прошел ли час на сброс
		})
		if (!user) {
			return res.redirect('/auth/login')
		}
		else {
			res.render('auth/password', {
				title: 'Востановить доступ',
				error: req.flash('error'),
				userId: user._id.toString(),
				token: req.params.token
			})
		}
	}
	catch (err) {
		console.log('Витя это ошибка err', err, '-------------auth rou')
	}

})

//++ задаем новый пароль
router.post('/password', async (req, res) => {
	try {
		const user = await User.findOne({
			_id: req.body.userId,
			resetToken: req.body.token,
			resetTokenExp: { $gt: Date.now() }
		})
		if (user) {
			user.password = await bcrypt.hash(req.body.password, 10)
			user.resetToken = undefined
			user.resetTokenExp = undefined
			await user.save()
			res.redirect('/auth/login')
		}
		else {
			req.flash('loginError', 'Сеанс на востановление пароля истёк')
			res.redirect('/auth/login')
		}
	}
	catch (e) {
		console.log('Витя это ошибка e:', e, '----------------------auth rou')
	}
})

module.exports = router