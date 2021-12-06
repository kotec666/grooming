const {Basket} = require('./../models/models')
const {BasketToy} = require('./../models/models')
const {Toy} = require('./../models/models')
const {Service} = require('./../models/models')
const {BasketService} = require('./../models/models')
const ApiError = require('./../error/ApiError')



class BasketController {

    async getOne(req, res, next) {
        try {
            const {id} = req.params

            const basket = await Basket.findOne(
                {
                    where: {userId: id},
                    include: [
                        {model: Service, through: BasketService},
                        {model: Toy, through: BasketToy},
                    ]
                },
            )

            return res.json(basket)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new BasketController()