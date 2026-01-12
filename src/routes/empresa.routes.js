const express = require("express");
const router = express.Router();
const empresaController = require("../controllers/empresa.controller");

// Rota para cadastrar (POST) e para listar (GET)
router.post("/", empresaController.create);
router.get("/", empresaController.list);

module.exports = router;
