//destruction= destruição de um array, ficando visualmente melhor
const { Router } = require("express");
const router = Router();
const automobileController = require("../controllers/automobileController")

//métodos http get post put delete:
                            //req = oq o usuario manda para gente
                                //res = responda nossa para o usuario
router.get("/automobile", (req,res) => {
    const resposta = automobileController.buscar();
    const listaAutomobile = automobileController.buscar();
    listaAutomobile.then((automobile) => res.status(200).json(automobile))
    .catch((error) => res.status(400).json(error.message));
});

router.post("/automobile", (req,res) =>{
    const newAutomobile = req.body;
    const automobile = automobileController.create(newAutomobile);
    automobile.then(automobileCreated => res.status(201).json(automobileCreated))
    .catch(error => res.status(400).json(error.message));
});
 //usando o parametro id para identificar qual id vou alterar
router.put("/automobile/:id", (req,res) => {
    const { id } = req.params;
    const resposta = automobileController.put(id);
    res.send(resposta);
});

router.delete("/automobile/:id", (req,res) =>{
    const { id } = req.params;
    const resposta = automobileController.delete(id)
    res.send(resposta);
});

//exportando a função para outras.
module.exports = router;