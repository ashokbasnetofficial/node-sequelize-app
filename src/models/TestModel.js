'use strict';

const { Model, DataTypes } = require('sequelize');
const sequelize = require('@root/sequelize-config');
const User = require('./UserModel');

class Test extends Model {
}
Test.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue : "Default"
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true // Set to false if a user must have a testId
      }
    },
    {
      sequelize,
      modelName: 'tests',
      tableName: 'tests',
      timestamps: false,
    }
  );
  Test.belongsTo(User, {
    foreignKey: 'userId'
  });
  User.hasOne(Test, {foreignKey: 'userId'});
module.exports = Test;