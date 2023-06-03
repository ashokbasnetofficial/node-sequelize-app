'use strict';

const { Model, DataTypes } = require('sequelize');
const sequelize = require('@root/sequelize-config');
const Test = require('./TestModel');

class User extends Model {
    
  }
  
  User.init(
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
      username : {
        type: DataTypes.TEXT,
        allowNull : false
      },
      password : {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      timestamps: false,
    }
  );
module.exports = User;
