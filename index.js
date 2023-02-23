const express = require("express");

const server = express();
server.use(express.json());
//query params : parametros passando na frente da rota
//router params :  parammetros passados na rota 
//resquest body: quando mandandos um objeto no corpo da requisicao

const cursos = ['Nodejs', 'Javascript ','TypeScript', 'Python', 'Go','c++' ]

// retornando todos cursos
server.get ('/cursos/',(req, res)=>{
    return res.json(cursos)
})

// retornando um curso especifico
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params
    return res.json (cursos[index])

})
// Criando um curso
server.post('/cursos',(req, res)=> {
    const { name } = req.body
    cursos.push(name)

    return res.json(cursos)

})

//Atualizando cursos

server.put('/cursos/:index', (req, res) => {
    const { index } = req.params
    const { name } = req.body
    cursos[index] = name

    return res.json(cursos)
})

server.delete('/cursos/:index', (req, res) => {
  const { index } = req.params
  cursos.splice(index, 1)

  return res.json("Curso deletado com sucesso")
 
})

server.listen(3000)