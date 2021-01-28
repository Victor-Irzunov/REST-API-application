const { body } = require('express-validator')
const User = require('../models/user')

exports.registerValidators = [                                                     //№72. Валидация регистрации
	body('email')
		.isEmail()
		.withMessage('Введите пожалуйста корректный email')
		.normalizeEmail()
		.custom(async (value, { req }) => {                                                                                //.withMessage('Введите корректный email')  I-й способ сообщения
			try {
				//проверяем есть ли такой польз
				const user = await User.findOne({ email: value })
				if (user) {
					return Promise.reject('Извините, но такой email уже занят, пожалуйста попробуйте ещё раз')
				}
			}
			catch (err) {
				console.log('Витя ошибка err:', err, '----------validators')
			}
		}),                                                                                                    //если "кривые" буквы(маленькие и большие и тд)

	body('password', 'Извините, но пароль должен быть минимум 3 символа')                                                    // II-й 'Пароль должен быть минимум 6 символов'
		.isLength({ min: 3, max: 56 })
		.isAlphanumeric()
		.trim(),                                                                                                            //убирает лишние пробелы

	body('confirm')
		.custom((value, { req }) => {                                                                                       //value - знаение input
			if (value !== req.body.password) {
				throw new Error('Извините, но пароли должны совподать')
			}
			return true
		})
		.trim(),

	body('name')
		.isLength({ min: 3 })
		.withMessage('Извините, но имя должно быть минимум 3 символа, пожалуйста попробуйте ещё раз')
		.trim(),
]