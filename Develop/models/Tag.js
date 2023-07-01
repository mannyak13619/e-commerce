const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  
  id: {
    type:DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    // define columns
  },
  tag_name:{
  type: DataTypes.STRING,
  },
  productTag.init(
    id:{
      type:DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },
    product_id:{
      type:DataTypes.INTEGER,
    },
    tag_id:{
      type:DataTypes.INTEGER,
    }
  )
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
