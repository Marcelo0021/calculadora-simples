# Calculadora com API

![GitHub License](https://img.shields.io/github/license/MarceloMendes021/calculadora-simples)




## Descrição

Este projeto é uma API REST de uma calculadora que permite realizar operações matemáticas básicas (soma, subtração, multiplicação e divisão). Foi desenvolvida utilizando Node.js e Express, com foco em simplicidade e funcionalidade.

## Estrutura do Projeto

- **app.js**: Configura o middleware e as rotas principais.
- **server.js**: Inicializa o servidor na porta especificada.
- **calculatorController.js**: Contém a lógica das operações matemáticas.
- **calculatorRoutes.js**: Define as rotas e conecta ao controller.

## Funcionalidades

- Realizar operações de:
  - **Adição**: `add`
  - **Subtração**: `subtract`
  - **Multiplicação**: `multiply`
  - **Divisão**: `divide`

## Tecnologias Utilizadas

- Node.js
- Express
- Body-parser

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd nome-do-repositorio
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## Uso

1. Inicie o servidor:
   ```bash
   node server.js
   ```
   O servidor estará disponível em: `http://localhost:3000`.

2. Faça requisições para a API no endpoint `/calculate`:

### Exemplo de Body para Requisições

Envie uma requisição POST para `/calculate` com o seguinte formato no corpo da requisição:

```json
{
  "operation": "add",
  "number1": 5,
  "number2": 3
}
```

### Respostas

- **Operação bem-sucedida**:
  ```json
  {
    "result": 8
  }
  ```
- **Erro de validação** (ex.: operação inválida ou divisão por 0):
  ```json
  {
    "error": "Erro: Operação invalida"
  }
  ```

## Rotas

- **POST /calculate**  
  Realiza operações matemáticas. Os parâmetros são passados no corpo da requisição:
  - `operation`: Tipo da operação (`add`, `subtract`, `multiply`, `divide`).
  - `number1`: Primeiro número (obrigatório).
  - `number2`: Segundo número (obrigatório).

## Testes

Você pode testar a API utilizando ferramentas como [Postman](https://www.postman.com/) ou via terminal com cURL:

```bash
curl -X POST http://localhost:3000/calculate -H "Content-Type: application/json" -d '{"operation": "multiply", "number1": 4, "number2": 5}'
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
