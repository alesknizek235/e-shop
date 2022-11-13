const path = require('path');

const model = require(path.join(__dirname, '..', 'models', 'model'));

exports.error = (request, response) => {
    response.render('index/error');
};

exports.mainView = (request, response) => {
    response.render('main/mainView'); 
}; 

exports.eshop = (request, response) => {
    let polozky = model.zobrazit();

    response.render('main/e-shop',{
        titulek: 'položky',
        klienta: polozky,
        polozky,
    });
};