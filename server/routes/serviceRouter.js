const Router = require('express')
const router = new Router()
const serviceController = require('./../controllers/serviceController')
const checkRole = require('./../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), serviceController.create)
router.delete('/:id', checkRole('ADMIN'), serviceController.deleteOne)
// router.get('/', serviceController.getAll)
// router.get('/:id', serviceController.getOne)



module.exports = router