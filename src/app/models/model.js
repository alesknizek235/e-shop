const path = require('path');

const jsondb = require('simple-json-db');

const ovjednavky = new jsondb(path.join(__dirname, '..', '..', '..', 'data', 'objednavky.json'));
const polozkydb = new jsondb(path.join(__dirname, '..', '..', '..', 'data', 'polozky.json'));

exports.zobrazit = (request, response) => {
    let polozky = polozkydb.JSON();
    delete polozky['next_id'];
    return polozky;
};
