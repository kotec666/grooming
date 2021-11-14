const ApiError = require('./../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('./../models/models')

const generateJwt = (id, login, email, phone, role) => {
    return jwt.sign(
        {id, login, email, phone, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        try {

            const {login, password, email, phone, role} = req.body

            if (!login || !password || !email || !phone) {
                return next(ApiError.badRequest('Не все поля заполнены'))
            }

            const candidate = await User.findOne({where: {email}})

            if (candidate) {
                return next(ApiError.badRequest('Пользователь с таким email уже существует'))
            }

            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({login, password: hashPassword, email, phone, role})
            const basket = await Basket.create({userId: user.id})
            const token = await generateJwt(user.id, user.login, user.email, user.phone, user.role)
            return res.json({token})

        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async login(req, res, next) {
        try {
            const {login, password} = req.body
            const user = await User.findOne({where: {login}})

            if (!user) {
                return next(ApiError.badRequest('Пользователь с таким логином не найден'))
            }

            let comparePassword = bcrypt.compareSync(password, user.password)

            if (!comparePassword) {
                return next(ApiError.badRequest('Неверный пароль'))
            }

            const token = generateJwt(user.id, user.login, user.email, user.phone, user.role)
            return res.json({token})

        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async check(req, res, next) {
        try {
            const token = generateJwt(req.user.id, req.user.login, req.user.email, req.user.phone, req.user.role)
            return res.json({token})
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new UserController()