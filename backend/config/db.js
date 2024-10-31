const {Sequelize} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.PG_DATABASE,process.env.PG_USER,process.env.PG_PASSWORD,{
    host: process.env.PG_HOST,
    dialect: 'postgres',
    port: process.env.PG_PORT
});

sequelize.authenticate()
    .then(()=> console.log('Database connected..'))
    .catch(err=>console.log("Error: "+ err));

module.exports = sequelize;