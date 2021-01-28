const keys = require('../keys')

module.exports = function (user_email, token) {

	return {
		from: `"Магазин" ${keys.MY_EMAIL}`,
		to: user_email,
		subject: "Востановление доступа",
		text: "Добро пожаловать в наш магазин",

		html: `<h1>Вы забыли пароль?</h1> 
		<p>Если нет, то проигнорируйте данное письмо</p>
		<p>Если забыли, то нажмите на ссылку ниже:</p>
		<p><a href="${keys.BASE_URL}/auth/password/${token}">Востановить пароль</a></p>
		<hr>
		<br>
		<a href= ${keys.BASE_URL}>Перейти в магазин</a>`
	}
}