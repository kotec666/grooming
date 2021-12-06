const {OrderService} = require('./../models/models')
const ApiError = require('./../error/ApiError')


class OrderServicesController {

    async create(req, res, next) {
        try {
        const {serviceId, orderId} = req.body
        const orderServices = await OrderService.create({serviceId, orderId})
        return res.json(orderServices)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteOne(req, res, next) {
        try {

            const {orderId, serviceId} = req.body
            const orderServices = await OrderService.findAll({
                where: {
                    orderId,
                    serviceId
                }
            })
             const service = orderServices[0]
             await service.destroy()
            res.json()
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new OrderServicesController()