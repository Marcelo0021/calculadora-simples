const express = require("express");
const bodyParser = require("body-parser");

const calculatorRoutes = require("./routes/calculatorRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/", calculatorRoutes);

module.exports = app;
