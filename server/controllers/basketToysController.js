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
            const basketToys = await BasketToy.findAll({
                where: {
                    id: +req.params.id
                }
            })
            const toy = basketToys[0]
            await toy.destroy()
            res.status(204).json({})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    // async getAll(req, res, next) {
    //     try {
    //         const basketToys = await BasketToy.findAll()
    //         return res.json(basketToys)
    //     } catch (e) {
    //         next(ApiError.badRequest(e.message))
    //     }
    // }

    // async getOne(req, res) {
    //     const {id} = req.params
    //     const basketToys = await BasketToy.findOne({where: {id}})
    //     return res.json(basketToys)
    // }


}

module.exports = new BasketToysController()