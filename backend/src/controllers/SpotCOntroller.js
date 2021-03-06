const User = require('../models/User')
const Spot = require('../models/Spot')

module.exports = {

    async index(req, res) {
        const { tech } = req.query

        const spots = await Spot.find({ techs: tech })

        return res.json(spots)
    },

    async store(req, res) {

        const { filename } = req.file
        const { company, techs, price } = req.body
        const { user_id } = req.headers

        const user = await User.findById(user_id)
        if (!user) {
            return res.status(400).json({
                error: 'User does not exists'
            })
        }
        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company: company,
            techs: techs.split(',').map(tech => tech.trim()), //chamando esse map passando o trim para tirar o espaço no começo e final do array
            price: price

        })



        return res.json(spot)
    }
}