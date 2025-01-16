const express = require("express");

const router = express.Router();

const calculatorController = require("../controllers/calculatorController");

// Rota para calcular
router.post("/", calculatorController.calculate);

module.exports = router;
