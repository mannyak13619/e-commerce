const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }

    // define columns
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

class Product extends Model { }

Product.init(

  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      isDecimal: true,
    },
    stock: (
      {
        type: DataTypes.INTEGER,
        allowNull: false,
        isNumeric: true,
        min: (1),
        max: (10),
        isNumeric: true,

        //need to add category refrence id reference

      }

    ),

    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'category',
    },
),


    class Tag extends Model { }

      Tag.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        tag_name: {
          type: DataTypes.STRING,

        },
        price: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
          isDecimal: true
        },
        Tag.init(
          {
            id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            tag_name: {
              type: DataTypes.STRING,

            },
            price: {
              type: DataTypes.DECIMAL(10, 2),
              allowNull: false,
              isDecimal: true
            },
          },
        );

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
      },
      class Product_tag extends Model { }

    Product_tag.init(
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true

        }
     product_id.init(
          {
            type: DataTypes.INTEGER,
            //reffrence product and id
          }
        ),

        tag_id.init(
          {
            type: DataTypes.INTEGER,
            //refrence tag reffrence id

          }
        );

// define columns




{
  sequelize,
    timestamps: false,
      freezeTableName: true,
        underscored: true,
          modelName: 'Product',
}
);

module.exports = Product;

