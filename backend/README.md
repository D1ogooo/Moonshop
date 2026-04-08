# 💳 Payment Service - Integração com AbacatePay

Este projeto implementa um serviço de pagamentos utilizando a API da
AbacatePay, com foco em simplicidade e organização usando Node.js +
TypeScript.

------------------------------------------------------------------------

## 🚀 Tecnologias utilizadas

-   Node.js
-   TypeScript
-   Express
-   Axios

------------------------------------------------------------------------

## ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto:

ABACATEPAY_BASE_URL=https://api.abacatepay.com/v1
ABACATEPAY_API_KEY=sua_api_key_aqui PORT=3333

------------------------------------------------------------------------

## 📌 Endpoint

POST /payments

------------------------------------------------------------------------

## 📦 Body da requisição

{ "amount": 1000, "description": "Compra de produto X", "methods":
\["PIX"\], "frequency": "ONE_TIME", "customer": { "name": "João Silva",
"email": "joao@email.com", "document": "11144477735" } }

------------------------------------------------------------------------

## ⚠️ Regras importantes

-   document vira taxId
-   CPF precisa ser válido
-   cellphone é obrigatório
-   methods deve ser array de string
-   URLs são obrigatórias

------------------------------------------------------------------------

## ✅ Payload final

const payload = { 
 amount: this.amount, 
 description: this.description,
 methods: \["PIX"\], 
 frequency: "ONE_TIME", 
 returnUrl:"https://seusite.com/retorno", 
 completionUrl:"https://seusite.com/retorno",
 products: \[ { 
  externalId: "prod-1",
  name: this.description,
  quantity: 1,
  price: this.amount,
 }, \],
 customer: { 
  name: this.name, 
  email: this.email, 
  taxId: this.document, /* tem que ser valido*/
  cellphone: "27988888273", 
 },
};

------------------------------------------------------------------------

## 🛠️ Debug

catch (err) { console.log(err.response?.data); }

------------------------------------------------------------------------

## 👨‍💻 Autor

Feito na força do ódio 😅🔥
