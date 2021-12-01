const {BasketToy} = require('./../models/models')
const ApiError = require('./../error/ApiError')


class BasketToysController {

    async create(req, res) {
        const {toyId, basketId} = req.body
        const basketToys = await BasketToy.create({toyId, basketId})
        return res.json(basketToys)
    }


    async deleteOne(req, res, next) {
        try {
            const {basketId, toyId} = req.body

            const basketToys = await BasketToy.findAll({
                where: {
                    basketId,
                    toyId
                }
            })
            const toy = basketToys[0]
            await toy.destroy()
            res.json()
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new BasketToysController()