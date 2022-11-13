const path = require('path');

const express = require('express');
const session = require('express-session');

const app = express();
const { key } = require(path.join(__dirname, '..', 'config'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
    secret: key,
    secure: true,
    resave: false,
    saveUninitialized: false,
    cookie: { sameSite: 'strict' },
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'www')));

app.use('/', require(path.join(__dirname, 'routers', 'indexRouter')));

module.exports = app;