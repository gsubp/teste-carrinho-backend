const database = require("../data/database");

module.exports = {
    async list(request, response) {
        return response.json(database)
    }
}