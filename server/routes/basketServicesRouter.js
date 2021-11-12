const Router = require('express')
const router = new Router()
const basketServicesController = require('./../controllers/basketServicesController')

router.post('/', basketServicesController.create)
router.get('/', basketServicesController.getAll)
router.get('/:id', basketServicesController.getOne)



module.exports = router