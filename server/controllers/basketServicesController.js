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

    async deleteOne(req, res, next) {
        try {

            const {basketId, serviceId} = req.body

            const basketServices = await BasketService.findAll({
                where: {
                    basketId,
                    serviceId
                }
            })
             const service = basketServices[0]
             await service.destroy()
            res.json()
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new BasketServicesController()