const Router = require('express')
const router = new Router()
const orderController = require('./../controllers/orderController')

router.get('/:id', orderController.getOne)


module.exports = router