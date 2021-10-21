const express = require("express");
const ProdutoController = require("./controller/ProdutoController");
const routes = express.Router();

routes.get("/produtos", ProdutoController.list);

module.exports = routes;

