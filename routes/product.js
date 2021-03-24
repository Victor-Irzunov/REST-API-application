const { Router } = require('express')
const Product = require('../models/products')
const chalk = require('chalk')
const { validationResult } = require('express-validator')
const { edit_validators } = require('../utils/validator_edit')
const auth = require('../middleware/auth')
const router = Router()

function isOwner(prod, req) {
	console.log(chalk.red('isOwner'))

	return prod.userId.toString() === req.user._id.toString()
}

router.get('/', async (req, res) => {
	console.log(chalk.blue('get: ++++++ product-1 +++++ get'))

	try {
		const products = await Product.find()
		res.render('productsss', {
			title: "#2",
			isXxx: true,
			products
		})
	}
	catch (err) {
		console.log("Витя ошибка err: ", err, '-----------produ rout')
	}
})

//++переход на страницу редактировать-edit
router.get('/:id/edit', auth, async (req, res) => {

	console.log(chalk.red('get: ++++++ product-2 (перход на стр редакт) +++++ get'))


	if (!req.query.allow) {
		return res.redirect('/')
	}
	try {
		const prod = await Product.findById(req.params.id)
		if (!isOwner(prod, req)) {
			return res.redirect('/')
		}
		res.render('product-edit', {
			title: `Редактировать=> ${prod.title}`,
			prod
		})
	}
	catch (error) {
		console.log('Витя ошибка переход на стр редакт:', error, '---------product rout')
	}
})

//++форма  редактировать
router.post('/edit', auth, edit_validators, async (req, res) => {
	console.log(chalk.cyan('post: +++++ product-3 (редактируем) ++ форма ++++ post'))

	const errors = validationResult(req)                         //№75 - Валидация курсов
	const obj_prod = await Product.findById(req.body.id)
	if (!errors.isEmpty()) {                                                  //№75 - Валидация курсов
		return res.status(422)
			.render('product-edit', {
				title: `Редактировать **: ${obj_prod.title}`,
				prod: obj_prod,
				error: errors.array()[0].msg
			})
	}
	try {
		const { id } = req.body
		delete req.body.id
		const prod = await Product.findById(id)                        //№69 - Рефакторинг по правам доступа
		if (!isOwner(prod, req)) {                                         //№69 - Рефакторинг по правам доступа
			return res.redirect('/')
		}
		Object.assign(prod, req.body)                  //заменяем опред поля с помощью этой конструкции /№69 - Рефакторинг по правам доступа
		await prod.save()
		res.redirect('/')
	}
	catch (e) {
		console.log('Витя ошибка форма редактирование: ', e, '----------product rout')
	}
})


//++ удаление-removal
router.post('/remove', auth, async (req, res) => {

	console.log(chalk.black('post: ++++++ product-4 +++++ post'))
	try {
		await Product.deleteOne({
			_id: req.body.id,
			userId: req.user._id
		})
		res.redirect('/')
	}
	catch (error) {
		console.log(chalk.red('Витя это ошибка в удалении: ', error, '----product.js--post--removal--'))
	}
})


//++ просмотр
router.get('/:id', async (req, res) => {
	console.log(chalk.red('get: ++++++ product-5 +++++ get'))

	try {
		const product = await Product.findById(req.params.id)
		//// console.log('Витя это const product: ', product, '-------------product.js --------"просмотреть"')
		res.render('productsss', {
			title: `Вы открыли: ${product.title}`,
			layouts: "empty",
			product
		})
	}
	catch (err) {
		console.log('Витя это ошибка просмотр: ', err, '----------product.js-----------')
	}
})



module.exports = router