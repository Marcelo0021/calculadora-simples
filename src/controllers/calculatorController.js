exports.calculate = (req, res) => {
  const { operation, number1, number2 } = req.body;

  if (!number1 || !number2 || !operation) {
    return res
      .status(400)
      .json({ error: "Todos os parametros são obrigatórios" });
  }

  let result;

  switch (operation) {
    case "add":
      result = number1 + number2;
      break;
    case "subtract":
      result = number1 - number2;
      break;
    case "multiply":
      result = number1 * number2;
      break;
    case "divide":
      if (number2 === 0) {
        return res
          .status(400)
          .json({ error: "Erro: Não é possivel dividir por 0" });
      }
      result = number1 / number2;
      break;

    default:
      return res.status(400).json({ error: "Erro: Operação invalida" });
  }

  res.json({ result });
};
