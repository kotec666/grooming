const {Service} = require('./../models/models')
const ApiError = require('./../error/ApiError')


class ServiceController {

    async create(req, res) {
        const {name, description, price, typeId} = req.body
        const service = await Service.create({name, description, price, typeId})
        return res.json(service)
    }

    async getAll(req, res, next) {
        try {
            const services = await Service.findAll()
            return res.json(services)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res) {
        const {id} = req.params
        const service = await Service.findOne({where: {id}})
        return res.json(service)
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