const express = require("express");
const router = express.Router();
const colaboradorController = require("../controllers/colaborador.controller");

router.post("/", colaboradorController.create);
router.get("/", colaboradorController.list);

module.exports = router;
