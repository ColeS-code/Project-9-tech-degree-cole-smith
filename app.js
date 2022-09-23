
const express = require('express');
const data = require('./data');
const app = express();
app.use(data);

app.set('view engine', 'pug');

app.use('/static', express.static("public"))

app.get('/'(req, res) => {
    res.render()
});