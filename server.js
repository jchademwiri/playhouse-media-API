// Imports
const express = require('express');
const app = express();
const port = process.env.port || 8080;

app.listen(port, () => console.info(`Listening on port ${port}`));

// static files
app.use(express.static('public'));
app.use(`./css`, express.static(`${__dirname}public/css`));
app.use(`./img`, express.static(`${__dirname}public/img`));
app.use(`./js`, express.static(`${__dirname}public/js`));

// views
app.set(`views`, `./views`);
app.set('view engine', 'ejs');

app.get(``, (_req, res) => {
	res.render(`index`, { text: `WE ARE COMING SOON!` });
});

app.get(`/about`, (_req, res) => {
	res.render(`about`, { text: `WE ARE COMING SOON!` });
});
app.get(`/projects`, (_req, res) => {
	res.render(`projects`, { text: `WE ARE COMING SOON!` });
});

app.get(`/contact`, (_req, res) => {
	res.render(`contact`, { text: `WE ARE COMING SOON!` });
});
