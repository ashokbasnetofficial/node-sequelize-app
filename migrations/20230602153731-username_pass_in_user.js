'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.sequelize.query("truncate table users cascade");
    return Promise.all([
      queryInterface.addColumn("users", 'username', {
        type : Sequelize.DataTypes.TEXT,
        allowNull : false
      }),
  
      queryInterface.addColumn("users", 'password', {
        type : Sequelize.DataTypes.TEXT,
        allowNull : false
      })
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn("users", 'username'),
      queryInterface.removeColumn("users", 'password')
    ]);
  }
};
