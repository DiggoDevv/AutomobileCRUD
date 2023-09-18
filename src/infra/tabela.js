class Tabela {
    init(conexao){
        this.conexao = conexao;
        this.createTableService();
    }
    createTableService(){
        const sql =`
        CREATE TABLE IF NOT EXISTS automobile (
            id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
            marca VARCHAR(75) NOT NULL,
            ano YEAR(4) NOT NULL,
            placa VARCHAR(7) NOT NULL
            );
        `;
        this.conexao.query(sql, (error)=>{
            if(error){
                console.log("deu erro ao criar a tabela");
                console.log(error.message);
                 return;
            }
            console.log("tabela criada com sucesso")
        });
    }
}
module.exports = new Tabela();