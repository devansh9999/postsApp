const sequelize = require('../util/db/sequelize');
const Sequelize = require('sequelize');


const Post=sequelize.define('Posts',{

    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    }
    ,
    Description:{
        type:Sequelize.STRING,
        allowNull:false
    }

})

module.exports=Post;