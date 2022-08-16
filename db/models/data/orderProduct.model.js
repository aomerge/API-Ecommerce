"use strict"

const { Model, DataTypes, Sequelize }= require('sequelize');
const {CONSUMERS_TABLE }= require('./consumers.model');
const {ORDERS_TABLE }= require('./orders.model');
const {PRODUCT_TABLE }= require('./product.model');

const ORDERS_PRODUCT_TABLE = 'ordersProduct';

module.exports = {
  // TABLE
  ORDERS_PRODUCT_TABLE,
  // SCHAME
  OrdersProductcheme : {
    id:{
      allowNull     : false,
      autoIncrement : true,
      primaryKey    : true,
      type          : DataTypes.INTEGER
    },
    consumerId: {
      field: 'consumer_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      References: {
        model: CONSUMERS_TABLE,
        key: 'id',
      },
      onUpdate : 'CASCADA',
      onDelete : 'SET NULL'
    },
    orderId:{
      field: 'order_Id',
      allowNull: false,
      type: DataTypes.INTEGER,
      References: {
        model: ORDERS_TABLE,
        key: 'id',
      },
      onUpdate : 'CASCADA',
      onDelete : 'SET NULL'
    },
    ProductId:{
      field: 'product_Id',
      allowNull: false,
      type: DataTypes.INTEGER,
      References: {
        model: PRODUCT_TABLE,
        key: 'id',
      },
      onUpdate : 'CASCADA',
      onDelete : 'SET NULL'
    },
    createdAt : {
      allowNull     : false ,
      type          : DataTypes.DATE,
      field         : 'create_at',
      defaultValue  : Sequelize.NOW
    },
    amount: {
      allowNull : false,
      type      : DataTypes.INTEGER
    },
    updatedAt : {
      allowNull     : true ,
      type          : DataTypes.DATE,
      field         : 'update_at',
      defaultValue  : Sequelize.NOW
    }
  },
  // CLASS
  OrdersProduct: class OrdersProduct extends Model{
    static associate(models){
      this.belongsTo(models.Consumers, { as: 'Consumers' });
    }
    static config(sequelize){
      return {
        sequelize,
        tableName  : ORDERS_PRODUCT_TABLE,
        modelName  : 'OrdersProduct',
        TimeRanges : false
      }
    }
  }
}
