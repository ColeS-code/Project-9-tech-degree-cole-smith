
const express = require('express');
const data = require('./data');
const app = express();

app.use(express.json());

app.set('view engine', 'pug');
app.use('/static', express.static("public"));

// Routes

app.get( '/', (req, res) => {
    res.render('index', {data: data.projects});
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/projects/:id', (req, res, next) => {
    const projectId = req.params.id;
    if (data.projects[projectId]) {
        res.render('project', {data: data.projects[projectId]});
    } else {
        const err = new Error();
        err.status = 404;
        err.message = 'oh shoot, the project you are requestiong does not seem to exist!'
        console.log(err.status, err.message);
        next(err);
    }
});

// Error Handlers 

function FOFHandler (req, res, next) {
    const err = new error();
    err.status = 404;
    err.message = 'Oh no! the route you requested does not seem to exist.';
    console.log(err.status, err.message);
    next(err);
}

function generalHandler (err, req, res, next) {
    if (!err.status || !err.message) {
        err.status = 500;
        err.message = 'Aw, a problem has occured on the server-side.'
        console.log(err.message, err.status);
    }
    res.status(err.status).send(err.message);
}
app.use(FOFHandler);
app.use(generalHandler);


app.listen(3000, () => {
    console.log('app is running on local port 3000')
});
