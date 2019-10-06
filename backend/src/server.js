const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')
const path = require('path')

const app = express()

mongoose.connect('mongodb+srv://omnistackfilipem:omnistackfilipem@omnistackfilipe-uspxy.mongodb.net/semanaomnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//GET, POST, PUT, DELETE

// req.query == Acessar o query params (para filtros)
//req.params == Acessar route params (para edição e delete)
//req.body == Acessar corpo da requisição (criação e edição de registros)
app.use(cors())
app.use(express.json())
// O app.use routes só funciona se vier depois do express json
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)



app.listen(3333)