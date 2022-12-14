'use strict';

const { DatabaseError } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('vistoria_forms',[
      
      {
        Solicitante: 'TESTANDO 1',
        Data_de_realização: 'TESTANDO 1',
        Marca_Modelo: 'TESTANDO 1',
        Ano_fabricação: 'TESTANDO 1',
        Cor: 'TESTANDO 1',
        Combustível: 'TESTANDO 1',
        Placa: 'TESTANDO 1',
        Renavam: 'TESTANDO 1',
        Chassi: 'TESTANDO 1',
        N_Motor: 'TESTANDO 1',
        KM_Hôdometro: 'TESTANDO 1',
        Restrições: 'TESTANDO 1',
        Visão_Geral: 'TESTANDO 1',
        Placas_dianteira_e_traseira: 'TESTANDO 1',
        Etiqueta_ETA_cofre_do_motor: 'TESTANDO 1',
        Etiqueta_batente_de_porta: 'TESTANDO 1',
        Etiqueta_ETA_piso_assoalho_: 'TESTANDO 1',
        Numeração_chassi: 'TESTANDO 1',
        Numeração_motor: 'TESTANDO 1',
        Cintos_de_segurança_dianteiros_LE_LD: 'TESTANDO 1',
        Cintos_de_segurança_traseiros_LE_CENTR_LD: 'TESTANDO 1',
        Vidro_dianteiro_para_brisa: 'TESTANDO 1',
        Vidro_dianteiro_porta_esq_motorista: 'TESTANDO 1',
        Vidro_dianteiro_porta_dir_passageiro: 'TESTANDO 1',
        Vidro_traseiro_porta_esq: 'TESTANDO 1',
        Vidro_traseiro_porta_dir: 'TESTANDO 1',
        Vidros_elétricos_funcionamento: 'TESTANDO 1',
        Vidros_auxiliares_lado_esq: 'TESTANDO 1',
        Vidros_auxiliares_lado_dir: 'TESTANDO 1',
        Vidro_traseiro: 'TESTANDO 1',
        Desembaçador_linhas: 'TESTANDO 1',
        Espelhos_retrovisores_LD_LE: 'TESTANDO 1',
        Espelhos_retrovisores_funcionamento: 'TESTANDO 1',
        Farois_estado_geral_LD_LE: 'TESTANDO 1',
        Farois_originalidade_LD_LE: 'TESTANDO 1',
        Lanternas_originalidade_LD_LE: 'TESTANDO 1',
        Lanternas_estado_geral_LD_LE: 'TESTANDO 1',
        Iluminação_farol_LD_LE: 'TESTANDO 1',
        Iluminação_lanternas_LD_LE: 'TESTANDO 1',
        Iluminação_teto_cabine_parte_anterior: 'TESTANDO 1',
        Iluminação_teto_cabine_parte_posterior: 'TESTANDO 1',
        Iluminação_individual_para_sol_LD_LE: 'TESTANDO 1',
        Possui_avaria_dano_estrutural_PARTE_FRONTAL: 'TESTANDO 1',
        Possui_avaria_dano_estrutural_PARTE_TRASEIRA: 'TESTANDO 1',
        Possui_avaria_dano_estrutural_LATERAL_ESQ: 'TESTANDO 1',
        Possui_avaria_dano_estrutural_LATERAL_DIR: 'TESTANDO 1',
        Possui_avaria_dano_estrutural_TETO: 'TESTANDO 1',
        Possui_avaria_dano_estrutural_PAINEL_FRONTAL: 'TESTANDO 1',
        Possui_avaria_dano_estrutural_COFRE_MOTOR_e_PAREDE_CORTA_FOGO: 'TESTANDO 1',
        Possui_avaria_dano_estrutural_PAINEL_TRASEIRO: 'TESTANDO 1',
        Possui_avaria_dano_estrutural_ASSOALHO_MALA_e_CAIXA_DE_ESTEPE: 'TESTANDO 1',
        Possui_avarias_dano_ESTRUTURA_INFERIOR: 'TESTANDO 1',
        Possui_avaria_dano_CAIXA_DE_AR_ESQ: 'TESTANDO 1',
        Possui_avaria_dano_CAIXA_DE_AR_DIR: 'TESTANDO 1',
        Possui_avaria_dano_PARACHOQUE_DIANTEIRO: 'TESTANDO 1',
        Possui_avaria_dano_PARACHOQUE_TRASEIRO: 'TESTANDO 1',
        Grades: 'TESTANDO 1',
        Coluna_dianteira_LADO_ESQ: 'TESTANDO 1',
        Coluna_dianteira_LADO_DIR: 'TESTANDO 1',
        Coluna_central_LADO_ESQ: 'TESTANDO 1',
        Coluna_central_LADO_DIR: 'TESTANDO 1',
        Coluna_traseira_LADO_ESQ: 'TESTANDO 1',
        Coluna_traseira_LADO_DIR: 'TESTANDO 1',
        Longarina_dianteira_LADO_ESQ: 'TESTANDO 1',
        Longarina_dianteira_LADO_DIR: 'TESTANDO 1',
        Longarina_Traseira_LADO_ESQ: 'TESTANDO 1',
        Longarina_Traseira_LADO_DIR: 'TESTANDO 1',
        Caixas_de_rodas_dianteira: 'TESTANDO 1',
        Caixas_de_rodas_traseira: 'TESTANDO 1',
        Para_choque_dianteiro: 'TESTANDO 1',
        Capô: 'TESTANDO 1',
        Para_lamas_lado_esq: 'TESTANDO 1',
        Para_lamas_lado_dir: 'TESTANDO 1',
        Porta_motorista_lado_esq: 'TESTANDO 1',
        Porta_passageiro_lado_dir: 'TESTANDO 1',
        Porta_traseira_lado_esq: 'TESTANDO 1',
        Porta_traseira_lado_dir: 'TESTANDO 1',
        Lateral_lado_esq: 'TESTANDO 1',
        Lateral_lado_dir: 'TESTANDO 1',
        Teto: 'TESTANDO 1',
        Porta_malas: 'TESTANDO 1',
        Para_choques_traseiro: 'TESTANDO 1',
        Sinais_de_vazamento_por_juntas: 'TESTANDO 1',
        Som_do_motor_funcionando: 'TESTANDO 1',
        Partida_do_motor: 'TESTANDO 1',
        Nível_óleo_do_motor: 'TESTANDO 1',
        Escapamento: 'TESTANDO 1',
        Bateria: 'TESTANDO 1',
        Trocas_de_marcha_com_veículo_parado: 'TESTANDO 1',
        Trocas_de_marcha_com_veículo_em_movimento: 'TESTANDO 1',
        Homocinética: 'TESTANDO 1',
        Funcionamento: 'TESTANDO 1',
        Folgas_e_estalos: 'TESTANDO 1',
        Nível_do_óleo: 'TESTANDO 1',
        Compresor_e_núcleo_funcionamento: 'TESTANDO 1',
        Resfriamento: 'TESTANDO 1',
        Ar_quente: 'TESTANDO 1',
        Difusores_de_ar: 'TESTANDO 1',
        Teto_solar_vidro: 'TESTANDO 1',
        Teto_solar_funcionamento: 'TESTANDO 1',
        Trava_elétrica_funcionamento: 'TESTANDO 1',
        Buzina: 'TESTANDO 1',
        Tomada_12v: 'TESTANDO 1',
        Volante_tabeliê: 'TESTANDO 1',
        Console_central_e_porta_objetos: 'TESTANDO 1',
        Luzes_internas: 'TESTANDO 1',
        Luzes_no_painel: 'TESTANDO 1',
        Bancos_tecido_couro: 'TESTANDO 1',
        Bancos_trilhos: 'TESTANDO 1',
        Bancos_regulagem_ajuste_de_posição: 'TESTANDO 1',
        Forros_de_portas: 'TESTANDO 1',
        Borrachas_de_vedação_das_portas: 'TESTANDO 1',
        Forros_de_teto: 'TESTANDO 1',
        Tapetes: 'TESTANDO 1',
        Carpete: 'TESTANDO 1',
        Medida: 'TESTANDO 1',
        Data_dos_pneus_DOT: 'TESTANDO 1',
        Condição_estado_atual: 'TESTANDO 1',
        Manuais_de_fábrica: 'TESTANDO 1',
        Chave_reserva: 'TESTANDO 1',
        NF_de_compra: 'TESTANDO 1',
        Macaco_chave_de_roda_triângulo: 'TESTANDO 1',
        Revisões_em_concessionária: 'TESTANDO 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Solicitante: 'TESTANDO2 1',
        Data_de_realização: 'TESTANDO2 1',
        Marca_Modelo: 'TESTANDO2 1',
        Ano_fabricação: 'TESTANDO2 1',
        Cor: 'TESTANDO2 1',
        Combustível: 'TESTANDO2 1',
        Placa: 'TESTANDO2 1',
        Renavam: 'TESTANDO2 1',
        Chassi: 'TESTANDO2 1',
        N_Motor: 'TESTANDO2 1',
        KM_Hôdometro: 'TESTANDO2 1',
        Restrições: 'TESTANDO2 1',
        Visão_Geral: 'TESTANDO2 1',
        Placas_dianteira_e_traseira: 'TESTANDO2 1',
        Etiqueta_ETA_cofre_do_motor: 'TESTANDO2 1',
        Etiqueta_batente_de_porta: 'TESTANDO2 1',
        Etiqueta_ETA_piso_assoalho_: 'TESTANDO2 1',
        Numeração_chassi: 'TESTANDO2 1',
        Numeração_motor: 'TESTANDO2 1',
        Cintos_de_segurança_dianteiros_LE_LD: 'TESTANDO2 1',
        Cintos_de_segurança_traseiros_LE_CENTR_LD: 'TESTANDO2 1',
        Vidro_dianteiro_para_brisa: 'TESTANDO2 1',
        Vidro_dianteiro_porta_esq_motorista: 'TESTANDO2 1',
        Vidro_dianteiro_porta_dir_passageiro: 'TESTANDO2 1',
        Vidro_traseiro_porta_esq: 'TESTANDO2 1',
        Vidro_traseiro_porta_dir: 'TESTANDO2 1',
        Vidros_elétricos_funcionamento: 'TESTANDO2 1',
        Vidros_auxiliares_lado_esq: 'TESTANDO2 1',
        Vidros_auxiliares_lado_dir: 'TESTANDO2 1',
        Vidro_traseiro: 'TESTANDO2 1',
        Desembaçador_linhas: 'TESTANDO2 1',
        Espelhos_retrovisores_LD_LE: 'TESTANDO2 1',
        Espelhos_retrovisores_funcionamento: 'TESTANDO2 1',
        Farois_estado_geral_LD_LE: 'TESTANDO2 1',
        Farois_originalidade_LD_LE: 'TESTANDO2 1',
        Lanternas_originalidade_LD_LE: 'TESTANDO2 1',
        Lanternas_estado_geral_LD_LE: 'TESTANDO2 1',
        Iluminação_farol_LD_LE: 'TESTANDO2 1',
        Iluminação_lanternas_LD_LE: 'TESTANDO2 1',
        Iluminação_teto_cabine_parte_anterior: 'TESTANDO2 1',
        Iluminação_teto_cabine_parte_posterior: 'TESTANDO2 1',
        Iluminação_individual_para_sol_LD_LE: 'TESTANDO2 1',
        Possui_avaria_dano_estrutural_PARTE_FRONTAL: 'TESTANDO2 1',
        Possui_avaria_dano_estrutural_PARTE_TRASEIRA: 'TESTANDO2 1',
        Possui_avaria_dano_estrutural_LATERAL_ESQ: 'TESTANDO2 1',
        Possui_avaria_dano_estrutural_LATERAL_DIR: 'TESTANDO2 1',
        Possui_avaria_dano_estrutural_TETO: 'TESTANDO2 1',
        Possui_avaria_dano_estrutural_PAINEL_FRONTAL: 'TESTANDO2 1',
        Possui_avaria_dano_estrutural_COFRE_MOTOR_e_PAREDE_CORTA_FOGO: 'TESTANDO2 1',
        Possui_avaria_dano_estrutural_PAINEL_TRASEIRO: 'TESTANDO2 1',
        Possui_avaria_dano_estrutural_ASSOALHO_MALA_e_CAIXA_DE_ESTEPE: 'TESTANDO2 1',
        Possui_avarias_dano_ESTRUTURA_INFERIOR: 'TESTANDO2 1',
        Possui_avaria_dano_CAIXA_DE_AR_ESQ: 'TESTANDO2 1',
        Possui_avaria_dano_CAIXA_DE_AR_DIR: 'TESTANDO2 1',
        Possui_avaria_dano_PARACHOQUE_DIANTEIRO: 'TESTANDO2 1',
        Possui_avaria_dano_PARACHOQUE_TRASEIRO: 'TESTANDO2 1',
        Grades: 'TESTANDO2 1',
        Coluna_dianteira_LADO_ESQ: 'TESTANDO2 1',
        Coluna_dianteira_LADO_DIR: 'TESTANDO2 1',
        Coluna_central_LADO_ESQ: 'TESTANDO2 1',
        Coluna_central_LADO_DIR: 'TESTANDO2 1',
        Coluna_traseira_LADO_ESQ: 'TESTANDO2 1',
        Coluna_traseira_LADO_DIR: 'TESTANDO2 1',
        Longarina_dianteira_LADO_ESQ: 'TESTANDO2 1',
        Longarina_dianteira_LADO_DIR: 'TESTANDO2 1',
        Longarina_Traseira_LADO_ESQ: 'TESTANDO2 1',
        Longarina_Traseira_LADO_DIR: 'TESTANDO2 1',
        Caixas_de_rodas_dianteira: 'TESTANDO2 1',
        Caixas_de_rodas_traseira: 'TESTANDO2 1',
        Para_choque_dianteiro: 'TESTANDO2 1',
        Capô: 'TESTANDO2 1',
        Para_lamas_lado_esq: 'TESTANDO2 1',
        Para_lamas_lado_dir: 'TESTANDO2 1',
        Porta_motorista_lado_esq: 'TESTANDO2 1',
        Porta_passageiro_lado_dir: 'TESTANDO2 1',
        Porta_traseira_lado_esq: 'TESTANDO2 1',
        Porta_traseira_lado_dir: 'TESTANDO2 1',
        Lateral_lado_esq: 'TESTANDO2 1',
        Lateral_lado_dir: 'TESTANDO2 1',
        Teto: 'TESTANDO2 1',
        Porta_malas: 'TESTANDO2 1',
        Para_choques_traseiro: 'TESTANDO2 1',
        Sinais_de_vazamento_por_juntas: 'TESTANDO2 1',
        Som_do_motor_funcionando: 'TESTANDO2 1',
        Partida_do_motor: 'TESTANDO2 1',
        Nível_óleo_do_motor: 'TESTANDO2 1',
        Escapamento: 'TESTANDO2 1',
        Bateria: 'TESTANDO2 1',
        Trocas_de_marcha_com_veículo_parado: 'TESTANDO2 1',
        Trocas_de_marcha_com_veículo_em_movimento: 'TESTANDO2 1',
        Homocinética: 'TESTANDO2 1',
        Funcionamento: 'TESTANDO2 1',
        Folgas_e_estalos: 'TESTANDO2 1',
        Nível_do_óleo: 'TESTANDO2 1',
        Compresor_e_núcleo_funcionamento: 'TESTANDO2 1',
        Resfriamento: 'TESTANDO2 1',
        Ar_quente: 'TESTANDO2 1',
        Difusores_de_ar: 'TESTANDO2 1',
        Teto_solar_vidro: 'TESTANDO2 1',
        Teto_solar_funcionamento: 'TESTANDO2 1',
        Trava_elétrica_funcionamento: 'TESTANDO2 1',
        Buzina: 'TESTANDO2 1',
        Tomada_12v: 'TESTANDO2 1',
        Volante_tabeliê: 'TESTANDO2 1',
        Console_central_e_porta_objetos: 'TESTANDO2 1',
        Luzes_internas: 'TESTANDO2 1',
        Luzes_no_painel: 'TESTANDO2 1',
        Bancos_tecido_couro: 'TESTANDO2 1',
        Bancos_trilhos: 'TESTANDO2 1',
        Bancos_regulagem_ajuste_de_posição: 'TESTANDO2 1',
        Forros_de_portas: 'TESTANDO2 1',
        Borrachas_de_vedação_das_portas: 'TESTANDO2 1',
        Forros_de_teto: 'TESTANDO2 1',
        Tapetes: 'TESTANDO2 1',
        Carpete: 'TESTANDO2 1',
        Medida: 'TESTANDO2 1',
        Data_dos_pneus_DOT: 'TESTANDO2 1',
        Condição_estado_atual: 'TESTANDO2 1',
        Manuais_de_fábrica: 'TESTANDO2 1',
        Chave_reserva: 'TESTANDO2 1',
        NF_de_compra: 'TESTANDO2 1',
        Macaco_chave_de_roda_triângulo: 'TESTANDO2 1',
        Revisões_em_concessionária: 'TESTANDO2 1',
        createdAt: new Date(),
        updatedAt: new Date()
      }





  ],{});

  
  },

  async down (queryInterface, Sequelize) {
  
  }
};
