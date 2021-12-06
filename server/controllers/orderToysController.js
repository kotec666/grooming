const {OrderToy} = require('./../models/models')
const ApiError = require('./../error/ApiError')


class OrderToysController {

    async create(req, res) {
        const {toyId, orderId} = req.body
        const orderToys = await OrderToy.create({toyId, orderId})
        return res.json(orderToys)
    }

    async deleteOne(req, res, next) {
        try {
            const {orderId, toyId} = req.body

            const orderToys = await OrderToy.findAll({
                where: {
                    orderId,
                    toyId
                }
            })
            const toy = orderToys[0]
            await toy.destroy()
            res.json()
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new OrderToysController()