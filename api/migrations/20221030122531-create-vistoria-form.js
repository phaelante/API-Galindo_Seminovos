'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vistoria_forms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Solicitante: {
        type: Sequelize.TEXT
      },
      Data_de_realização: {
        type: Sequelize.TEXT
      },
      Marca_Modelo: {
        type: Sequelize.TEXT
      },
      Ano_fabricação: {
        type: Sequelize.TEXT
      },
      Cor: {
        type: Sequelize.TEXT
      },
      Combustível: {
        type: Sequelize.TEXT
      },
      Placa: {
        type: Sequelize.TEXT
      },
      Renavam: {
        type: Sequelize.TEXT
      },
      Chassi: {
        type: Sequelize.TEXT
      },
      N_Motor: {
        type: Sequelize.TEXT
      },
      KM_Hôdometro: {
        type: Sequelize.TEXT
      },
      Restrições: {
        type: Sequelize.TEXT
      },
      Visão_Geral: {
        type: Sequelize.TEXT
      },
      Placas_dianteira_e_traseira: {
        type: Sequelize.TEXT
      },
      Etiqueta_ETA_cofre_do_motor: {
        type: Sequelize.TEXT
      },
      Etiqueta_batente_de_porta: {
        type: Sequelize.TEXT
      },
      Etiqueta_ETA_piso_assoalho_: {
        type: Sequelize.TEXT
      },
      Numeração_chassi: {
        type: Sequelize.TEXT
      },
      Numeração_motor: {
        type: Sequelize.TEXT
      },
      Cintos_de_segurança_dianteiros_LE_LD: {
        type: Sequelize.TEXT
      },
      Cintos_de_segurança_traseiros_LE_CENTR_LD: {
        type: Sequelize.TEXT
      },
      Vidro_dianteiro_para_brisa: {
        type: Sequelize.TEXT
      },
      Vidro_dianteiro_porta_esq_motorista: {
        type: Sequelize.TEXT
      },
      Vidro_dianteiro_porta_dir_passageiro: {
        type: Sequelize.TEXT
      },
      Vidro_traseiro_porta_esq: {
        type: Sequelize.TEXT
      },
      Vidro_traseiro_porta_dir: {
        type: Sequelize.TEXT
      },
      Vidros_elétricos_funcionamento: {
        type: Sequelize.TEXT
      },
      Vidros_auxiliares_lado_esq: {
        type: Sequelize.TEXT
      },
      Vidros_auxiliares_lado_dir: {
        type: Sequelize.TEXT
      },
      Vidro_traseiro: {
        type: Sequelize.TEXT
      },
      Desembaçador_linhas: {
        type: Sequelize.TEXT
      },
      Espelhos_retrovisores_LD_LE: {
        type: Sequelize.TEXT
      },
      Espelhos_retrovisores_funcionamento: {
        type: Sequelize.TEXT
      },
      Farois_estado_geral_LD_LE: {
        type: Sequelize.TEXT
      },
      Farois_originalidade_LD_LE: {
        type: Sequelize.TEXT
      },
      Lanternas_originalidade_LD_LE: {
        type: Sequelize.TEXT
      },
      Lanternas_estado_geral_LD_LE: {
        type: Sequelize.TEXT
      },
      Iluminação_farol_LD_LE: {
        type: Sequelize.TEXT
      },
      Iluminação_lanternas_LD_LE: {
        type: Sequelize.TEXT
      },
      Iluminação_teto_cabine_parte_anterior: {
        type: Sequelize.TEXT
      },
      Iluminação_teto_cabine_parte_posterior: {
        type: Sequelize.TEXT
      },
      Iluminação_individual_para_sol_LD_LE: {
        type: Sequelize.TEXT
      },
      Possui_avaria_dano_estrutural_PARTE_FRONTAL: {
        type: Sequelize.TEXT
      },
      Possui_avaria_dano_estrutural_PARTE_TRASEIRA: {
        type: Sequelize.TEXT
      },
      Possui_avaria_dano_estrutural_LATERAL_ESQ: {
        type: Sequelize.TEXT
      },
      Possui_avaria_dano_estrutural_LATERAL_DIR: {
        type: Sequelize.TEXT
      },
      Possui_avaria_dano_estrutural_TETO: {
        type: Sequelize.TEXT
      },
      Possui_avaria_dano_estrutural_PAINEL_FRONTAL: {
        type: Sequelize.TEXT
      },
      Possui_avaria_dano_estrutural_COFRE_MOTOR_e_PAREDE_CORTA_FOGO: {
        type: Sequelize.TEXT
      },
      Possui_avaria_dano_estrutural_PAINEL_TRASEIRO: {
        type: Sequelize.TEXT
      },
      Possui_avaria_dano_estrutural_ASSOALHO_MALA_e_CAIXA_DE_ESTEPE: {
        type: Sequelize.TEXT
      },
      Possui_avarias_dano_ESTRUTURA_INFERIOR: {
        type: Sequelize.TEXT
      },
      Possui_avaria_dano_CAIXA_DE_AR_ESQ: {
        type: Sequelize.TEXT
      },
      Possui_avaria_dano_CAIXA_DE_AR_DIR: {
        type: Sequelize.TEXT
      },
      Possui_avaria_dano_PARACHOQUE_DIANTEIRO: {
        type: Sequelize.TEXT
      },
      Possui_avaria_dano_PARACHOQUE_TRASEIRO: {
        type: Sequelize.TEXT
      },
      Grades: {
        type: Sequelize.TEXT
      },
      Coluna_dianteira_LADO_ESQ: {
        type: Sequelize.TEXT
      },
      Coluna_dianteira_LADO_DIR: {
        type: Sequelize.TEXT
      },
      Coluna_central_LADO_ESQ: {
        type: Sequelize.TEXT
      },
      Coluna_central_LADO_DIR: {
        type: Sequelize.TEXT
      },
      Coluna_traseira_LADO_ESQ: {
        type: Sequelize.TEXT
      },
      Coluna_traseira_LADO_DIR: {
        type: Sequelize.TEXT
      },
      Longarina_dianteira_LADO_ESQ: {
        type: Sequelize.TEXT
      },
      Longarina_dianteira_LADO_DIR: {
        type: Sequelize.TEXT
      },
      Longarina_Traseira_LADO_ESQ: {
        type: Sequelize.TEXT
      },
      Longarina_Traseira_LADO_DIR: {
        type: Sequelize.TEXT
      },
      Caixas_de_rodas_dianteira: {
        type: Sequelize.TEXT
      },
      Caixas_de_rodas_traseira: {
        type: Sequelize.TEXT
      },
      Para_choque_dianteiro: {
        type: Sequelize.TEXT
      },
      Capô: {
        type: Sequelize.TEXT
      },
      Para_lamas_lado_esq: {
        type: Sequelize.TEXT
      },
      Para_lamas_lado_dir: {
        type: Sequelize.TEXT
      },
      Porta_motorista_lado_esq: {
        type: Sequelize.TEXT
      },
      Porta_passageiro_lado_dir: {
        type: Sequelize.TEXT
      },
      Porta_traseira_lado_esq: {
        type: Sequelize.TEXT
      },
      Porta_traseira_lado_dir: {
        type: Sequelize.TEXT
      },
      Lateral_lado_esq: {
        type: Sequelize.TEXT
      },
      Lateral_lado_dir: {
        type: Sequelize.TEXT
      },
      Teto: {
        type: Sequelize.TEXT
      },
      Porta_malas: {
        type: Sequelize.TEXT
      },
      Para_choques_traseiro: {
        type: Sequelize.TEXT
      },
      Sinais_de_vazamento_por_juntas: {
        type: Sequelize.TEXT
      },
      Som_do_motor_funcionando: {
        type: Sequelize.TEXT
      },
      Partida_do_motor: {
        type: Sequelize.TEXT
      },
      Nível_óleo_do_motor: {
        type: Sequelize.TEXT
      },
      Escapamento: {
        type: Sequelize.TEXT
      },
      Bateria: {
        type: Sequelize.TEXT
      },
      Trocas_de_marcha_com_veículo_parado: {
        type: Sequelize.TEXT
      },
      Trocas_de_marcha_com_veículo_em_movimento: {
        type: Sequelize.TEXT
      },
      Homocinética: {
        type: Sequelize.TEXT
      },
      Funcionamento: {
        type: Sequelize.TEXT
      },
      Folgas_e_estalos: {
        type: Sequelize.TEXT
      },
      Nível_do_óleo: {
        type: Sequelize.TEXT
      },
      Compresor_e_núcleo_funcionamento: {
        type: Sequelize.TEXT
      },
      Resfriamento: {
        type: Sequelize.TEXT
      },
      Ar_quente: {
        type: Sequelize.TEXT
      },
      Difusores_de_ar: {
        type: Sequelize.TEXT
      },
      Teto_solar_vidro: {
        type: Sequelize.TEXT
      },
      Teto_solar_funcionamento: {
        type: Sequelize.TEXT
      },
      Trava_elétrica_funcionamento: {
        type: Sequelize.TEXT
      },
      Buzina: {
        type: Sequelize.TEXT
      },
      Tomada_12v: {
        type: Sequelize.TEXT
      },
      Volante_tabeliê: {
        type: Sequelize.TEXT
      },
      Console_central_e_porta_objetos: {
        type: Sequelize.TEXT
      },
      Luzes_internas: {
        type: Sequelize.TEXT
      },
      Luzes_no_painel: {
        type: Sequelize.TEXT
      },
      Bancos_tecido_couro: {
        type: Sequelize.TEXT
      },
      Bancos_trilhos: {
        type: Sequelize.TEXT
      },
      Bancos_regulagem_ajuste_de_posição: {
        type: Sequelize.TEXT
      },
      Forros_de_portas: {
        type: Sequelize.TEXT
      },
      Borrachas_de_vedação_das_portas: {
        type: Sequelize.TEXT
      },
      Forros_de_teto: {
        type: Sequelize.TEXT
      },
      Tapetes: {
        type: Sequelize.TEXT
      },
      Carpete: {
        type: Sequelize.TEXT
      },
      Medida: {
        type: Sequelize.TEXT
      },
      Data_dos_pneus_DOT: {
        type: Sequelize.TEXT
      },
      Condição_estado_atual: {
        type: Sequelize.TEXT
      },
      Manuais_de_fábrica: {
        type: Sequelize.TEXT
      },
      Chave_reserva: {
        type: Sequelize.TEXT
      },
      NF_de_compra: {
        type: Sequelize.TEXT
      },
      Macaco_chave_de_roda_triângulo: {
        type: Sequelize.TEXT
      },
      Revisões_em_concessionária: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('vistoria_forms');
  }
};