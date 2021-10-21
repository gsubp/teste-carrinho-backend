const acimaJSON = require("../data/acima-10-reais.json");
const database = [];
database.push(acimaJSON.items);


module.exports = database[0];