const Router = require('express')
const router = new Router()

const toyRouter = require('./toyRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')
const basketRouter = require('./basketRouter')
const serviceRouter = require('./serviceRouter')
const basketServicesRouter = require('./basketServicesRouter')
const basketToysRouter = require('./basketToysRouter')
const orderRouter = require('./orderRouter')
const orderServicesRouter = require('./orderServicesRouter')
const orderToysRouter = require('./orderToysRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/toy', toyRouter)
router.use('/basket', basketRouter)
router.use('/service', serviceRouter)
router.use('/order', orderRouter)

//создание и удаление корзинных элементов
router.use('/basketServices', basketServicesRouter)
router.use('/basketToys', basketToysRouter)


//создание и удаление элементов заказа
router.use('/orderServices', orderServicesRouter)
router.use('/orderToys', orderToysRouter)


module.exports = router