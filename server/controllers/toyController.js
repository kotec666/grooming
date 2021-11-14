const {Toy} = require('./../models/models')
const ApiError = require('./../error/ApiError')
const uuid = require('uuid')
const path = require('path')


class ToyController {

    async create(req, res, next) {
        try {
            const {name, price} = req.body
            const {img} = req.files

            let fileName = uuid.v4() + '.jpg'
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const toy = await Toy.create({name, price, img: fileName})
            return res.json(toy)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        const toys = await Toy.findAndCountAll({offset: +offset, limit: +limit})
        return res.json(toys)
    }

    async getOne(req, res) {
        const {id} = req.params
        const toy = await Toy.findOne({where: {id}})
        return res.json(toy)
    }


    async deleteOne(req, res, next) {
        try {
            const toys = await Toy.findAll({
                where: {
                    id: +req.params.id
                }
            })
            const toy = toys[0]
            await toy.destroy()
            res.status(204).json({})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new ToyController()