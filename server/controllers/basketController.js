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


//убрать create метод, создание будет из разных контроллеров
    // async create(req, res, next) {
    //     try {
    //         const {id} = req.params
    //         let {basketToys, basketServices} = req.body

    //         const basket = await Basket.create({id})

    //         if (basketToys) {
    //             basketToys = JSON.parse(basketToys)
    //             basketServices = JSON.parse(basketServices)

    //             basketToys.forEach(i =>
    //                 BasketToy.create({
    //                     toyId: i.toyId,
    //                     basketId: basket.id
    //                 })
    //             )
    //         }
    //             if (basketServices) {
    //                 basketServices.forEach(i =>
    //                     BasketService.create({
    //                         serviceId: i.serviceId,
    //                         basketId: basket.id
    //                     })
    //                 )
    //             }

    //         return res.json(basket)

    //     } catch (e) {
    //         next(ApiError.badRequest(e.message))
    //     }
    // }

    // async getAll(req, res, next) {
    //     try {
    //         const basket = await Basket.findAll({include: [{model: BasketService, as: 'basketServices'}, {model: BasketToy, as: 'basketToys'}]})
    //         return res.json(basket)
    //     } catch (e) {
    //         next(ApiError.badRequest(e.message))
    //     }
    // }


}

module.exports = new BasketController()