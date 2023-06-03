'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id : {
          type : Sequelize.DataTypes.BIGINT,
          autoIncrement : true,
          primaryKey : true
      },
      name: Sequelize.DataTypes.TEXT,
      address : Sequelize.DataTypes.TEXT,
      description: {
          type : Sequelize.DataTypes.TEXT,
          defaultValue: "Default"
      }
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
