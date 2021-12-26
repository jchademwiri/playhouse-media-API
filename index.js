// Imports
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
require('dotenv/config');
// require('dotenv').config();

app.use(cors());

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
// coment

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));

// static files
app.use(express.static('public'));
app.use(`./css`, express.static(`${__dirname}public/css`));
app.use(`./img`, express.static(`${__dirname}public/img`));
app.use(`./js`, express.static(`${__dirname}public/js`));
app.use(`./blog`, express.static(`${__dirname}public/blog`));

// Middleware
// app.use('/api/post',()=>{
// 	console.log('middleware runing')
// })

// Import Routes
const postRoute = require('./api/routes/blog/posts');
// const postRoute = require('./routes/posts');

app.use('/api/blog/posts', postRoute);
// app.use('/posts', postRoute);

// API Routes

// app.get('/api', (req, res) => {
// 	res.send('we are on API');
// });

// Connect to DB

// heroku_url = process.env.MONGODB_URI;

// mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
// 	console.log('Connected to Database');
// });

mongoose
	.connect(process.env.DB_CONNECTION, {
		dbName: 'playhouse',
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('Connected to Database!'))
	.catch((err) =>
		console.log(
			`Could not Connected to Database ${process.env.DB_CONNECTION} `,
			err
		)
	);

// MongoClient.connect(process.env.DB_CONNECTION, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// })
// 	.then(() => console.log('Connected to Database!'))
// 	.catch((err) =>
// 		console.log(
// 			`Could not Connected to Database ${process.env.DB_CONNECTION} `,
// 			err
// 		)
// 	);

// ==========================================

// views
// app.set(`views`, `./views`);
// app.set('view engine', 'ejs');

// app.get(``, (_req, res) => {
// 	res.render(`index`, { text: `Home!` });
// });

app.get(``, (_req, res) => {
	res.send(`home page`);
});

// app.get(`/api`, (_req, res) => {
// 	res.render(`api`, { text: `WE ARE here on API now!` });
// });

app.get(`/api`, (_req, res) => {
	res.render(`api`, { text: `Our API.` });
});
// app.get(`/projects`, (_req, res) => {
// 	res.render(`projects`, { text: `WE ARE COMING now!` });
// });

// app.get(`/contact`, (_req, res) => {
// 	res.render(`contact`, { text: `WE ARE COMING now!` });
// });
