const express = require('express');
const routes = require('./routes');
const cors = require('cors');


const app = express()


app.use((req, res, next) => {
    console.log("MIDDLEWARE ACESSADO"),
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    
    next();
});
	app.use(cors());

const port = 8081;
routes(app)



//fica escutando o servidor
app.listen(port, () => console.log(`servidor está rodando na porta http://localhost/${port}`))

module.exports = app