const automobileModel = require("../models/automobileModel")
class AutomobileController {
    buscar(){
    return automobileModel.listar();
    }
    create(newAutomobile){
        return automobileModel.create(newCreate);
    }
    put(id){
        return `alterando carro numero ${id}`;
    }
    delete(id){
        return `deletando carro ${id}`
    }
}
module.exports = new AutomobileController();