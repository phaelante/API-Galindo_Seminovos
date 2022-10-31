const { Router } = require('express')
const ClienteController = require('../controllers/ClienteController')


const router= Router()

//Funções de Requisição
router.get('/vistoria_forms', ClienteController.pegaTodosvistoria_forms)
router.get('/vistoria_forms/:id', ClienteController.pegaUmCliente)



//Funções de Postagem
router.post('/vistoria_forms', ClienteController.criaCliente)

//Função Update
router.put('/vistoria_forms/:id', ClienteController.atualizaCliente)

//Função deletar cliente
router.delete('/vistoria_forms/:id', ClienteController.apagaCliente)

module.exports = router