# 💳 Payment Service - Integração com AbacatePay

Este projeto implementa um serviço de pagamentos utilizando a API da
AbacatePay, com foco em simplicidade e organização usando Node.js +
TypeScript.

------------------------------------------------------------------------

## 🚀 Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- Axios

------------------------------------------------------------------------

## ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto com o conteúdo abaixo:

```env
ABACATEPAY_BASE_URL=https://api.abacatepay.com/v1
ABACATEPAY_API_KEY=sua_api_key_aqui
PORT=3333
```

------------------------------------------------------------------------

## ⚠️ Regras importantes

- `document` vira `taxId` (seu cpf)
- CPF precisa ser válido
- `cellphone` é obrigatório
- `methods` deve ser array de strings
- URLs são obrigatórias

------------------------------------------------------------------------

## 📌 Endpoint

- `POST /payment/create`

------------------------------------------------------------------------

## 📦 Body da requisição

```js
const payload = {
  amount: this.amount,
  description: this.description,
  methods: ["PIX"],
  frequency: "ONE_TIME",
  returnUrl: "https://seusite.com/retorno",
  completionUrl: "https://seusite.com/retorno",
  products: [
    {
      externalId: "prod-1",
      name: this.description,
      quantity: 1,
      price: this.amount,
    },
  ],
  customer: {
    name: this.name,
    email: this.email,
    taxId: this.document,
    cellphone: "27988888273",
  },
};
```
------------------------------------------------------------------------

## ❤ Retorno da requisição de criação de pagamento (sucesso)
```js
{
	"success": true,
	"data": {
		"products": [
			{
				"id": "xxxxxxxxxx",
				"externalId": "xxxxxxxxxxxx",
				"quantity": 1
			}
		],
		"amount": 1000,
		"paidAmount": 0,
		"status": "PENDING",
		"devMode": true,
		"methods": [
			"PIX"
		],
		"frequency": "xxxxxx", 
		"allowCoupons": false,
		"coupons": [],
		"couponsUsed": [],
		"metadata": {
			"fee": 80,
			"returnUrl": "https://seusite.com/retorno",
			"completionUrl": "https://seusite.com/retorno"
		},
		"createdAt": "xxxxxxxxxxxxxxxxxxxxxxxx",
		"updatedAt": "xxxxxxxxxxxxxxxxxxxxxxxx",
		"id": "bill_baeAxxxxxxxxxxxxxxxxx",
		"url": "https://app.abacatepay.com/pay/xxxxxxxxxxxxxxxx",
		"customer": {
			"id": "cust_umxxxxxxxxxxxxxxxxxxxxx",
			"metadata": {
				"name": "João Silva",
				"cellphone": "27988888273",
				"taxId": "11144477735",
				"email": "joao@email.com",
				"zipCode": ""
			}
		}
	},
	"error": null
}
```

------------------------------------------------------------------------

## 🛠️ Debug

```js
catch (err) {
  console.log(err.response?.data);
}
```

------------------------------------------------------------------------

## 👨‍💻 Autor

Feito na força do ódio 😅🔥
