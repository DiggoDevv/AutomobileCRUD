const express = require("e")
//requisição de uma biblioteca
const app = express();

//colocar instancia no ar(porta)
app.listen(3000, (error) => {
    if (error) {
        console.log("deu erro");
        return;
    }
    console.log("subiu")
});