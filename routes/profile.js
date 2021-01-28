const { Router } = require('express')
const auth = require('../middleware/auth')
const chalk = require('chalk')
const User = require('../models/user')
const router = Router()

router.get('/', auth, async (req, res) => {               //auth что бы не авториз польз не могли
	res.render('profile', {
		title: 'Профиль администратора',
		isProfile: true,
		user: req.user.toObject()
	})
})

router.post('/', auth, async (req, res) => {                        // upload.single('avatar'),
	try {
		const user = await User.findById(req.user._id)

		const toChange = {
			name: req.body.name
		}

		if (req.file) {
			toChange.avatarUrl = req.file.path
		}

		Object.assign(user, toChange)
		await user.save()
		res.redirect('/profile')
	}
	catch (error) {
		console.log('Витя ошибка error: ', error, '----------------------------profile  rou')
	}
})


module.exports = router