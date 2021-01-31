const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)  //(session) передаем пакет который будем испл для синхрониз с БД  №54 - Сессия в базе данных
const path = require('path')
const csrf = require('csurf')
const flash = require('connect-flash')
const mongoose = require('mongoose')
const helmet = require('helmet')
const compression = require('compression')
const Handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const mainRoutes = require('./routes/main')
const addRoutes = require('./routes/add')
const basketRoutes = require('./routes/basket')
const ordersRoutes = require('./routes/orders')
const productRoutes = require('./routes/product')
const chatRoutes = require('./routes/chat')
const authRoutes = require('./routes/auth')
const profileRoutes = require('./routes/profile')
const userMiddleware = require('./middleware/user')
const varMiddleware = require('./middleware/variables')
const fileMiddleware = require('./middleware/file')
const error404 = require('./middleware/err_404')
const keys = require('./keys')

const app = express()


const store = new MongoStore({
	collection: 'sessions_s',
	uri: keys.MONGODB_URI
})

const PORT = process.env.PORT || 3000

app.engine('hbs', exphbs({
	defaultLayout: 'main',
	extname: 'hbs',
	handlebars: allowInsecurePrototypeAccess(Handlebars),
	helpers: require('./utils/hbs-helpers')
}))
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use(express.urlencoded({ extended: true }))
app.use(session({
	secret: 'some secret value',
	resave: false,
	saveUninitialized: false,
	store: store
}))
app.use(fileMiddleware.single('avatar'))
app.use(csrf())
app.use(flash())
app.use(
	helmet({
		contentSecurityPolicy: false,
	})
);
app.use(compression())
app.use(userMiddleware)
app.use(varMiddleware)

app.use('/', mainRoutes)
app.use('/add', addRoutes)
app.use('/basket', basketRoutes)
app.use('/orders', ordersRoutes)
app.use('/product', productRoutes)
app.use('/chat', chatRoutes)
app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)
app.use(error404)


async function start() {
	try {
		await mongoose.connect(
			keys.MONGODB_URI,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false
			})

		app.listen(PORT, () => console.log(`--- Сервер запущен на порту: ${PORT} ---`))
	
	}
	catch (e) {
		console.log('Витя это ошибка e: ', e, '---------------index.js-----------')
	}
}
start()










// const user = 'Victor-school:uG73dLnsUETlKVzf'
