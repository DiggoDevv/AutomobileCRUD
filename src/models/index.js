import { Sequelize } from "sequelize";
import db from "../config/dbconfig.js";

const Automobile = db.define("Automobile", {

id:{

    type: Sequelize.INTEGER.UNSIGNED,

        primaryKey: true, // NOT NULL E UNIQUE

        autoIncrement: true,

},

 

marca:{

    type: Sequelize.STRING(200),

    allowNull: false

},

 

ano:{

    type: Sequelize.INTEGER.UNSIGNED,

    allowNull: false

},

 

placa: {

    type: Sequelize.STRING(7),

    allowNull: false

}

 

})