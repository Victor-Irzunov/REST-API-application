const { Router } = require('express')
const auth = require('../middleware/auth')
const chalk = require('chalk')
const User = require('../models/user')
const router = Router()
//-----------------

// var express = require('express');
// var app = express();
// var server = require('http').createServer(app);
// var io = require('socket.io').listen(server);

// // Отслеживание порта
// server.listen(3000);



router.get('/', auth, async (req, res) => {
	console.log(chalk.blueBright('----get chat start---'))

	res.render('chat', {
		title: 'Чат',
		isChat: true,
		user: req.user.toObject(),
	})

})

let connections = []

io.on('conections', function (socket) {
	console.log(chalk.red('успешное соединение'))
	connections.push(socket)
	socket.on('disconnect', (data) => {
		connections.splice(connections.indexOf(socket), 1)
		console.log(chalk.red('отключение'))
	})
})













module.exports = router