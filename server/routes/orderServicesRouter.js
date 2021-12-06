const Router = require('express')
const router = new Router()
const orderServicesController = require('./../controllers/orderServicesController')

router.post('/', orderServicesController.create)
router.delete('/', orderServicesController.deleteOne)


module.exports = router