const {Order} = require('./../models/models')
const {OrderToy} = require('./../models/models')
const {Toy} = require('./../models/models')
const {Service} = require('./../models/models')
const {OrderService} = require('./../models/models')
const ApiError = require('./../error/ApiError')



class OrderController {

    async getOne(req, res, next) {
        try {
            const {id} = req.params

            const order = await Order.findOne(
                {
                    where: {userId: id},
                    include: [
                        {model: Service, through: OrderService},
                        {model: Toy, through: OrderToy},
                    ]
                },
            )

            return res.json(order)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new OrderController()