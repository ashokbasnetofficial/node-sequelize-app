'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('tests', {
      id: {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
        unique: true
      },
      description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
        defaultValue : "Default"
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tests');
  }
};
