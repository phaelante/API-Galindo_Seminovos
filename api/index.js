const express = require('express')
const routes = require('./routes')

const app = express()

const port = 3030;
routes(app)



//fica escutando o servidor
app.listen(port, () => console.log(`servidor está rodando na porta http://localhost/${port}`))

module.exports = app