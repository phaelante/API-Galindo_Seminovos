

const { NUMBER } = require('sequelize')
const { response } = require('..')
const database = require('../models') 

class ClienteController{

    //LISTA TODAS AS PESSOAS
    static async pegaTodosvistoria_forms(req,res){
    try {
        const todosvistoria_forms = await database.vistoria_forms.findAll()
            return res.status(200).json(todosvistoria_forms)
        
    } catch(error){
        return res.status(500).json(error.message)
    }
    }   

    //EXIBE SÓ UMA PESSOA DIANTE AO ID INSERIDO NO HTTP
    static async pegaUmCliente(req,res){
        const {id} = req.params
        try{
            const umCliente= await database.vistoria_forms.findOne( {
                where: { id: Number(id) }})
                return res.status(200).json(umCliente)

        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    //Preenche Coluna Cliente
    static async criaCliente(req,res){
        const novoCliente = req.body
        try{
            const novoClienteCriado = await database.vistoria_forms.create(novoCliente)
            return res.status(200).json(novoClienteCriado)

        }catch(erro){
            return res.status(500).json(error.message)
        }
    }


    //Atualiza um Registro
    static async  atualizaCliente(req,res){
        const { id } = req.params
        const novasInfosCliente = req.body

        try{
            await database.vistoria_forms.update(novasInfosCliente, { where: {id:Number(id)}} )
            const clienteAtualizado = await database.vistoria_forms.findOne( {where: { id: Number(id) }})
                return res.status(200).json(clienteAtualizado)
        } catch(erro){
            return res.status(500).json(error.message)
        }
    }

    //Deleta um Registro
    static async apagaCliente(req,res){
        const { id } = req.params
        try{
            await database.vistoria_forms.destroy( { where: {id:Number(id)}} )
            return res.status(200).json({ mensagem:`id ${id} deletado com sucesso` })

        }catch(error){
            return res.status(500).json(error.message)
        }

    }
    






}

module.exports = ClienteController