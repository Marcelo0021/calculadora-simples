const express = require("express");

const router = express.Router();

const calculatorAddController = require("../controllers/calculatorAddController");
const calculatorDivideController = require("../controllers/calculatorDivideController");
const calculatorMultiplyController = require("../controllers/calculatorMultiplyController");
const calculatorSubtractController = require("../controllers/calculatorSubtractController");

router.post("/add", calculatorAddController.add);
router.post("/divide", calculatorDivideController.divide);
router.post("/multiply", calculatorMultiplyController.multiply);
router.post("/subtract", calculatorSubtractController.subtract);

module.exports = router;
