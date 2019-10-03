//Dentro do controller temos os seguintes métodos
// index, show, store, update, e destroy
// index == Usando para retornar uma listagem, nesse caso seria uma lista de sessionStorage
// show == usado para listar uma única sesseion
// StorageEvent, update e distroy, usados para criar, atualizar e destruir, respectivamente

const User = require('../models/User')
module.exports = {
    async store(req, res) {
        //Essas chaves entre o body quer dizer que está buscando o email dentro de body
        //É um recurso do js chamado "desestruturação"
        const { email } = req.body
        //Dentro de create eu vou passar as informacoes que quero para criar meu user
        const user = await User.create({
            email
        })
        //Lembrar sempre de chamar o async/await, pois essa função será realizada de forma assincrona
        return res.json(user)

    }
}