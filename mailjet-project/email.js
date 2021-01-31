// const regEmail = require('../emails/registration')
// const keys = require('../keys')
// const nodemailer = require('nodemailer')
// const smtp = require('nodemailer-smtp-transport'); //!

// const Mailjet = require('node-mailjet')
// 	.connect('75e1a27294eca25b7b6c3ee22b3b3a50', 'ad43377fdeb23350553200410d80e196')


// var sendEmail = Mailjet.post('send');

// var emailData = {
// 	'FromEmail': `${keys.MY_EMAIL}`,
// 	'FromName': 'Витя',
// 	'Subject': 'Ура получилось',
// 	'Text-part': 'Класс!',
// 	'HTML-part': `<h1>Добро пожаловать в наш магазин</h1> 
// 	<hr>
// 	<br>
// 	<h2>Вы успешно создали аккаунт с email</h2>
// 	<a href= ${keys.BASE_URL}>Перейти в магазин</a>`,
// 	'Recipients': [{ 'Email': 'abs-avto@tut.by' }]
// }
// sendEmail
// 	.request(emailData)
// 	.then(console.log('-------'))
// 	.catch(e => console.log(e));


// //----------------------------
// module.exports = async function mailjet(a) {
// 	const transporter = nodemailer.createTransport(
// 		smtp({
// 			host: 'in.mailjet.com',
// 			port: 2525,
// 			auth: {
// 				user: '75e1a27294eca25b7b6c3ee22b3b3a50',
// 				pass: 'ad43377fdeb23350553200410d80e196',
// 			},
// 		})
// 	);


// 	const json = await transporter.sendMail(regEmail(a));
// 	console.log(json);
// }
// mailjet();