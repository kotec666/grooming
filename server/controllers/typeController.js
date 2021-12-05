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
            let {_limit, page} = req.query
            page = page || 1
            _limit = _limit || 9
            let offset = page * _limit - _limit
            const types = await Type.findAndCountAll({include: [{model: Service, as: 'servicesData'}], offset: +offset, limit: +_limit}) //{include: [{model: Service, as: 'servicesData'}], {offset: +offset, limit: +limit}},
            return res.json(types)
         } catch (e) {
                next(ApiError.badRequest(e.message))
        }
    }



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


    async deleteOne(req, res, next) {
        try {
            const types = await Type.findAll({
                where: {
                    id: +req.params.id
                }
            })
            const type = types[0]
            await type.destroy()
            res.status(204).json({})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }



    async changeInfo(req, res, next) {
        try {
            const type = await Type.findByPk(+req.params.id)
            type.name = req.body.name
            await type.save()
            return res.json(type)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new TypeController()