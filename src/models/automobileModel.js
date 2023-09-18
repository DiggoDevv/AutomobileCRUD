const { query } = require("express");
const conexao = require("../infra/conexao");
class AutomobileModel {
    listar(){
        const sql = "SELECT * FROM automobile"
        return new Promise((resolve, reject) =>{
            conexao.query(sql, {}, (error, resposta) => {
                if(error){
                    console.log("Deu no select")
                    reject(error);
                }
                console.log("deu certo o select")
                resolve(resposta);
            });
        });
    }
    create(newCreate){
        const sql = "INSERT INTO automobile SET ?";
        return new Promiseresolve, reject(() => {
            conexao.query(sql, automobile, (error, resposta) => {
                if(error){
                    console.log("Deu no select")
                    reject(error);
                }  
                console.log("deu certo o insert");
                resolve(resposta)
            })
        })
    }
}
module.exports = new AutomobileModel();