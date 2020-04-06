# Desafio 02: Conceitos do Node.js

Aplicação para armazenar repositórios do seu portfólio, que irá permitir a criação, listagem, atualização e remoção dos repositórios

### Tecnologias Utilizadas

+ [Express](https://expressjs.com/pt-br/) 
+ [uuidv4](https://www.npmjs.com/package/uuidv4)
+ [Nodemon](https://www.npmjs.com/package/nodemon)

### Conceitos aprendidos durante o Modulo

+ Conceitos do NodeJS
+ Conceitos API REST
+ Métodos HTTP
+ Status HTTP
+ Tipos de parâmetros
+ Middlewares

### Forma de utilizar

```sh
  git clone https://github.com/GiovaniHMilani/desafio-nivel1-node.git
  cd desafio-nivel1-node && yarn
```

##### Rodar o Projeto
```sh
  yarn dev
```

##### Rodar os testes

```sh
  yarn test
```

### Rotas disponiveis

##### GET - /repositories
##### POST - /repositories
```js
{
  "body": {
    "title": "Desafio NodeJS",
    "techs": ["Node.js"],
    "url": "https://teste.teste.com" 
  }
}
```
##### PUT - /repositories/:id

```js
{
  ":id": "Repository ID",
  "body": {
    "title": "Desafio NodeJS",
    "techs": ["Node.js"],
    "url": "https://teste.teste.com" 
  }
}
```
##### DELETE - /repositories/:id
```js
{
  ":id": "Repository ID",
}
```
##### POST - /repositories/:id/like
```js
{
  ":id": "Repository ID",
}
```
