const path = require('path');

const model = require(path.join(__dirname, '..', 'models', 'model'));

exports.home = (request, response) => {
    response.render('index/home');
};

exports.error = (request, response) => {
    response.render('index/error');
};

exports.mainView = (request, response) => {
    response.render('main/mainView'); 
}; 