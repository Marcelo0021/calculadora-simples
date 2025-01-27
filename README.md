# Calculadora com API

![GitHub License](https://img.shields.io/github/license/MarceloMendes021/calculadora-api)

## Descrição

Este projeto é uma API REST de uma calculadora que permite realizar operações matemáticas básicas (soma, subtração, multiplicação e divisão). Foi desenvolvida utilizando Node.js e Express, com foco em simplicidade e funcionalidade.

## Linguagem Utilizada

-**JavaScript:** Usado para o desenvolvimento da lógica da calculadora e na configuração da API.

## Estrutura do Projeto

- **app.js**: Configura o middleware e as rotas principais.
- **server.js**: Inicializa o servidor na porta especificada.
- **calculatorAddController.js**: Contém a lógica da adição.
- **calculatorDivideController.js**: Contém a lógica da divisão.
- **calculatorMultiplyController.js**: Contém a lógica da multiplicação.
- **calculatorSubtractController.js**: Contém a lógica da subtração.
- **calculatorRoutes.js**: Define as rotas e conecta ao controller.

## Funcionalidades

A API oferece as seguintes operações matemáticas:

- **Adição**: `POST /add`
- **Subtração**: `POST /subtract`
- **Multiplicação**: `POST /multiply`
- **Divisão**: `POST /divide

## Tecnologias Utilizadas

- Node.js
- Express
- Body-parser

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/MarceloMendes021/calculadora-api
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd calculadora-api
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## U

1. Inicie o servidor:

   ```bash
   npm start
   ```

   O servidor estará disponível em: `http://localhost:3000`.

2. Faça requisições para a API nos endpoint abaixo:

## Rotas e Exemplos

### 1. Adição

- **Endpoint**: `POST /add`
- **Descrição**: Soma dois números fornecidos.
- **Body**:
  ```json
  {
    "number1": 10,
    "number2": 5
  }
  ```
- **Resposta**:
  ```json
  {
    "resultado": 15
  }
  ```

---

### 2. Subtração

- **Endpoint**: `POST /subtract`
- **Descrição**: Subtrai o segundo número do primeiro.
- **Body**:
  ```json
  {
    "number1": 10,
    "number2": 5
  }
  ```
- **Resposta**:
  ```json
  {
    "resultado": 5
  }
  ```

---

### 3. Multiplicação

- **Endpoint**: `POST /multiply`
- **Descrição**: Multiplica dois números fornecidos.
- **Body**:
  ```json
  {
    "number1": 10,
    "number2": 5
  }
  ```
- **Resposta**:
  ```json
  {
    "resultado": 50
  }
  ```

---

### 4. Divisão

- **Endpoint**: `POST /divide`
- **Descrição**: Divide o primeiro número pelo segundo.
- **Body**:
  ```json
  {
    "number1": 10,
    "number2": 5
  }
  ```
- **Resposta**:
  ```json
  {
    "resultado": 2
  }
  ```
- **Erro para divisão por zero**:
  ```json
  {
    "error": "Não é possivel realizar divisão por 0"
  }
  ```

---

## Testes

Você pode testar a API utilizando ferramentas como [Postman](https://www.postman.com/) ou via terminal com cURL:

### Exemplo com cURL

```bash
curl -X POST http://localhost:3000/add -H "Content-Type: application/json" -d '{"number1": 4, "number2": 5}'
```

## Contribuição

Contribuições são bem-vindas!
