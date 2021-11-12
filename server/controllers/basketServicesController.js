const {BasketService} = require('./../models/models')
const ApiError = require('./../error/ApiError')


class BasketServicesController {

    async create(req, res, next) {
        try {
        const {serviceId, basketId} = req.body
        const basketServices = await BasketService.create({serviceId, basketId})
        return res.json(basketServices)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const basketServices = await BasketService.findAll()
            return res.json(basketServices)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res) {
        const {id} = req.params
        const basketServices = await BasketService.findOne({where: {id}})
        return res.json(basketServices)
    }
}

module.exports = new BasketServicesController()