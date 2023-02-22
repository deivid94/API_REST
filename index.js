const express = require("express");

const server = express();
//query params : parametros passando na frente da rota
//router params :  parammetros passados na rota 
//resquest body: quando mandandos um objeto no corpo da requisicao

const cursos = ['Nodejs', 'Javascript ','TypeScript', 'Python', 'Go','c++' ]

server.get('/API_REST/:index', (req, res) => {

    const { index } = req.params

    return res.json (cursos[index])


})

server.listen(3000)