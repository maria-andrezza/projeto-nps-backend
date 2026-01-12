const express = require("express");
const router = express.Router();
const pesquisaController = require("../controllers/pesquisa.controller");

router.post("/", pesquisaController.create);
router.get("/", pesquisaController.list);
router.get("/dashboard", pesquisaController.getDashboard);

module.exports = router;
