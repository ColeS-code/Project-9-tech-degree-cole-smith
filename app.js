
const express = require('express');
const data = require('./data');
const app = express();
app.use(data);

app.use(express.static("public"))

app.get('/index'(req, res) => {
    
})