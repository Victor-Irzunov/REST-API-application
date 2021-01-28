const keys = require('../keys')
module.exports = function (user_email) {
	return {
		from: `"Магазин" ${keys.MY_EMAIL}`,
		to: user_email,
		subject: "Успех",
		text: "Добро пожаловать в наш магазин",

		html:`<h1>Добро пожаловать в наш магазин</h1> 
		<hr>
		<br>
		<h2>Вы успешно создали аккаунт с email - ${user_email}</h2>
		<a href= ${keys.BASE_URL}>Перейти в магазин</a>`
	}
}