const Router = require('express')
const router = new Router()

const toyRouter = require('./toyRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')
const basketRouter = require('./basketRouter')
const serviceRouter = require('./serviceRouter')
const basketServicesRouter = require('./basketServicesRouter')
const basketToysRouter = require('./basketToysRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/toy', toyRouter)
router.use('/basket', basketRouter)
router.use('/service', serviceRouter)

//создание и удаление корзинных элементов
router.use('/basketServices', basketServicesRouter)
router.use('/basketToys', basketToysRouter)


module.exports = router