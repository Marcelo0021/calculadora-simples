const express = require("express");
const bodyParser = require("body-parser");

const calculatorRoutes = require("./routes/calculatorRoutes"); // Importação do arquivo de rotas criado

const app = express();

// Middlewares
app.use(bodyParser.json());

app.use("/calculate", calculatorRoutes); // Uso da rotas

module.exports = app;
