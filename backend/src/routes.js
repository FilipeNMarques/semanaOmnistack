const express = require('express')
const multer = require('multer')

const uploadCongig = require('./config/upload')
const SesseionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const Dashboardcontroller = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingsController')



const routes = express.Router()
const upload = multer(uploadCongig)


routes.post('/sessions', SesseionController.store)
routes.get('/spots', SpotController.index)
routes.post('/spots', upload.single('thumbnail'), SpotController.store)

routes.get('/dashboard', Dashboardcontroller.show)
//Dentro da rota eu vou chamar o meu controller e o store que foi o método que fiz

routes.post('/spots/:spot_id/bookings', BookingController.store)

module.exports = routes