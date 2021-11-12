const {Type} = require('./../models/models')
const {Service} = require('./../models/models')
const ApiError = require('./../error/ApiError')

class TypeController {

    async create(req, res, next) {
        try {
            let {name, servicesData} = req.body
            const type = await Type.create({name})


            if (servicesData) {
                servicesData = JSON.parse(servicesData)
                servicesData.forEach(i =>
                    Service.create({
                        name: i.name,
                        description: i.description,
                        price: i.price,
                        typeId: type.id
                    })
                )
            }

            return res.json(type)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            let {limit, page} = req.query
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            const types = await Type.findAndCountAll({include: [{model: Service, as: 'servicesData'}], offset: +offset, limit: +limit})
            return res.json(types)
         } catch (e) {
                next(ApiError.badRequest(e.message))
        }
    }

//{include: [{model: Service, as: 'servicesData'}], {offset: +offset, limit: +limit}},

    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const type = await Type.findOne(
                {
                    where: {id},
                    include: [{model: Service, as: 'servicesData'}]
                },
            )
            return res.json(type)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

}

module.exports = new TypeController()