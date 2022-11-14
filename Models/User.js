const sequelize = require('../util/db/sequelize');
const Sequelize = require('sequelize');


const User=sequelize.define('Users',{

    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    }
    ,
    email:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.BLOB,
        allowNull:false
    },
    salt:{
        type:Sequelize.BLOB,
        allowNull:false
    }

})
// User.sync();
module.exports=User;