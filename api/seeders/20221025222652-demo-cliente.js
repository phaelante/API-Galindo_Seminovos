'use strict';

const { DatabaseError } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('clientes',[
      {
      nome_cliente:'Lucas Phaelante',
      email_cliente:'lucasphaelante@offin.com.br',
      telefone_cliente: 81998373193,
      data_nascimento_cliente: new Date(),
      cpf_cliente: 12345672912,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      nome_cliente:'Freitas Boaventura',
      email_cliente:'phartepaudalho@gmail.com',
      telefone_cliente: 81974228574,
      data_nascimento_cliente: new Date(),
      cpf_cliente: 12345678912,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      nome_cliente:'paulo henrique',
      email_cliente:'paulolima@hotmail.com',
      telefone_cliente: 81991276585,
      data_nascimento_cliente: new Date(),
      cpf_cliente:12345678912,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      nome_cliente:'Hemily deganelo',
      email_cliente:'hemy@outlook.com',
      telefone_cliente:81998373193,
      data_nascimento_cliente: new Date(),
      cpf_cliente: 12345678923,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      
  ],{});

  
  },

  async down (queryInterface, Sequelize) {
  
  }
};
