const {Service} = require('./../models/models')
const ApiError = require('./../error/ApiError')


class ServiceController {

    async create(req, res) {
        const {name, description, price, typeId} = req.body
        const service = await Service.create({name, description, price, typeId})
        return res.json(service)
    }

    async deleteOne(req, res, next) {
        try {
            const services = await Service.findAll({
                where: {
                    id: +req.params.id
                }
            })
            const service = services[0]
            await service.destroy()
            res.status(204).json({})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeInfo(req, res, next) {
        try {
            const service = await Service.findByPk(+req.params.id)
            service.name = req.body.name
            service.description = req.body.description
            service.price = req.body.price
            await service.save()
            return res.json(service)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }


}

module.exports = new ServiceController()