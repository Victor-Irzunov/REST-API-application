const { Router } = require('express')
const Product = require('../models/products')
const auth = require('../middleware/auth')
const chalk = require('chalk')
const keys = require('../keys')
const { validationResult } = require('express-validator')
const { add_Validators } = require('../utils/validators_add')
const router = Router()

router.get('/', auth, async (req, res) => {                        // auth,  express поймет нас
	try {
		const products = await Product.find().populate('userId', 'email name').select('price title img') //!
		let a = products.find(e => e)
      console.log("🚀  _ file: add.js _ line 14 _ router.get _ a", a)

		if (products.length < 1 && req.session.isAdmin) {
			a = keys.ADMIN_SYSTEM
			res.render('add', {
				title: "Admin",
				isAdd: true,
				userId: req.user ? req.user._id.toString() : null,  //!
				a: a,
				user: req.user.toObject()
			})
		}

		if (products.length >= 1 && req.session.isAdmin) {
			if (a.userId._id.toString() !== req.user._id.toString()) {
				return res.redirect('/')
			}
			res.render('add', {
				title: "Admin",
				isAdd: true,
				userId: req.user ? req.user._id.toString() : null,  //!
				a: a.userId._id,
				user: req.user.toObject()
			})
		}
	}
	catch (e) {
		console.log('Витя ошибка e: ', e, '----------------add rou')
	}
})


router.post('/', auth, add_Validators, async (req, res) => {

	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(422).render('add', {
			title: 'Admin',
			isAdd: true,
			error: errors.array()[0].msg,
			data: {
				title: req.body.title,
				price: req.body.price,
				img: req.body.img
			}
		})
	}
	const productt = new Product({
		title: req.body.title,
		price: req.body.price,
		img: req.body.img,
		userId: req.user
	})
	try {
		await productt.save()
		res.redirect('/')
	}
	catch (err) {
		console.log('err: ', err, '-------------------add.js')
	}
})
module.exports = router