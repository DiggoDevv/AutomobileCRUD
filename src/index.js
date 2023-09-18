//requisição das bibliotecas
const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/index")
 const conexao = require("./infra/conexao")
const tabela = require("./infra/tabela")

//colocar instancia no ar(porta)
app.listen(3000, (error) => {
    if (error) {
        console.log("deu erro");
        return;
    }
    console.log("subiu")
});
