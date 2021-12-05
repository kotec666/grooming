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




// async getAll(req, res, next) {
//     try {
//         let {typeId, limit, page} = req.query
//         page = page || 1
//         limit = limit || 9
//         let offset = page * limit - limit
//         let services
//         if (!typeId) {
//             services = await Service.findAll({offset: +offset, limit: +limit})
//         }
//         if (typeId) {
//             services = await Service.findAll({where: {typeId}, offset: +offset, limit: +limit})
//         }
//         return res.json(services)
//     } catch (e) {
//         next(ApiError.badRequest(e.message))
//     }
// }


// async getAll(req, res, next) {
//     try {
//         const services = await Service.findAll()
//         return res.json(services)
//     } catch (e) {
//         next(ApiError.badRequest(e.message))
//     }
// }
//
// async getOne(req, res) {
//     const {id} = req.params
//     const service = await Service.findOne({where: {id}})
//     return res.json(service)
// }