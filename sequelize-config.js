const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('node_db', 'postgres', 'data-safety', {
    host: 'localhost',
    dialect : 'postgres'
});
module.exports = sequelize;