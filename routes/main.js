const { Router } = require('express')
const Product = require('../models/products')
const chalk = require('chalk')
const keys = require('../keys')
const router = Router()

router.get('/', async (req, res) => {
	console.log(chalk.blueBright('get: +++++ main +++++ get'))

	try {
		const products = await Product.find().populate('userId', 'email name').select('price title img')
		let a = products.find(e => e)

		if (products.length < 1 && req.session.isAdmin) {
			a = keys.ADMIN_SYSTEM
			return res.render('index', {
				title: "Admin",
				isHome: true,
				userId: req.user ? req.user._id.toString() : null,  //!
				products,
				a,
				user: req.user.toObject()
			})
		}
		if (products.length >= 1 && req.session.isAdmin) {
			res.render('index', {
				title: "Admin",
				isHome: true,
				userId: req.user ? req.user._id.toString() : null,  //!
				products,
				a: a.userId._id,
				user: req.user.toObject()
			})
		}
		else {
			res.render('index', {
				title: "Главная",
				isHome: true,
				userId: req.user ? req.user._id.toString() : null,
				products,
				user: req.user.toObject()
			})
		}
	}
	catch (err) {
		console.log(chalk.cyan('Витя это ошибка err:'), err, '-----------------main rout')
	}
})




module.exports = router