const express = require('express')
const routes = express.Router()
const SesseionController = require('./controllers/SesseionController')

routes.post('/sesseions', SesseionController.store)
//Dentro da rota eu vou chamar o meu controller e o store que foi o método que fiz

module.exports = routes