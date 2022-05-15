'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  car.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    type: {
      type:DataTypes.STRING,
      allowNull:true
    },
    image: {
      type:DataTypes.STRING,
      allowNull:true
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:true
    },
  }, {
    sequelize,
    modelName: 'car',
  });
  return car;
};