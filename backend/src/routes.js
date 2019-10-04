const express = require('express')
const multer = require('multer')

const uploadCongig = require('./config/upload')
const SesseionController = require('./controllers/SessionController')
const SpotController = require('.//controllers/SpotCOntroller')



const routes = express.Router()
const upload = multer(uploadCongig)


routes.post('/sessions', SesseionController.store)
routes.get('/spots', SpotController.index)
routes.post('/spots', upload.single('thumbnail'), SpotController.store)
//Dentro da rota eu vou chamar o meu controller e o store que foi o método que fiz

module.exports = routes