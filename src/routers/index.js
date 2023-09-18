//esse index é só para subir a aplicação, nada mais
const routerAtendimento = require("./atendimentoRoute")
module.exports = (app) => {
app.use(routerAtendimento);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
tabela.init(conexao);

router(app);
}