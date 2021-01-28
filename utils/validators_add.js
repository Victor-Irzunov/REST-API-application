const { body } = require('express-validator')

exports.add_Validators = [
	body('title')
		.isLength({ min: 3 })
		.withMessage('Минимальная длинна названия 3 символа')
		.trim(),

	body('price')
		.isNumeric()                                                  //.isNumeric()  - точно ли число
		.withMessage('Введите корректную цену'),

	body('img', 'Введите корректный URL картинки')
		.isURL()

]