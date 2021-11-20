const Router = require('express')
const router = new Router()
const basketServicesController = require('./../controllers/basketServicesController')

router.post('/', basketServicesController.create)
router.delete('/', basketServicesController.deleteOne)


module.exports = router