'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     
    
    }
  }
  Clientes.init({
    nome_cliente: DataTypes.STRING,
    email_cliente: DataTypes.STRING,
    telefone_cliente: DataTypes.STRING,
    data_nascimento_cliente: DataTypes.DATEONLY,
    cpf_cliente: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'clientes',
  });
  return Clientes;
};