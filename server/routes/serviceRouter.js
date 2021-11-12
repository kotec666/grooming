const Router = require('express')
const router = new Router()
const serviceController = require('./../controllers/serviceController')

router.post('/', serviceController.create)
router.get('/', serviceController.getAll)
router.get('/:id', serviceController.getOne)



module.exports = router