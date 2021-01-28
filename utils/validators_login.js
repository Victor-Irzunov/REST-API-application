const { body } = require('express-validator')
const User = require('../models/user')

exports.loginValidators = [                                                     //№72. Валидация регистрации
	body('email')
		.isEmail()
		.withMessage('Введите пожалуйста корректный email')
		.normalizeEmail()
		.custom(async (value, { req }) => {                                                                                //.withMessage('Введите корректный email')  I-й способ сообщения
			try {
				//проверяем есть ли такой польз
				const user = await User.findOne({ email: value })
				// console.log('user:' , user)
				if (!user) {
					return Promise.reject('Извините, но пользователя с таким email не существует, пожалуйста попробуйте другой email')
				}
			}
			catch (err) {
				console.log('Витя ошибка err:', err, '----------validators_login')
			}
		}),                                                                                                    //если "кривые" буквы(маленькие и большие и тд)

	body('password', 'Извините, но пароль должен быть минимум 3 символа')                                                    // II-й 'Пароль должен быть минимум 6 символов'
		.isLength({ min: 3, max: 56 })
		.isAlphanumeric()
		.trim()                                                                                                           //убирает лишние пробелы

]