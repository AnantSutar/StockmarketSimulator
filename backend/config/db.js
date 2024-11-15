const {Sequelize} = require('sequelize');
require('dotenv').config();
console.log()
const sequelize = new Sequelize(process.env.PG_DATABASE,process.env.PG_USER,process.env.PG_PASSWORD,{
    host: process.env.PG_HOST,
    dialect: 'postgres',
    port: process.env.PG_PORT,
    logging:false
});


module.exports = sequelize;