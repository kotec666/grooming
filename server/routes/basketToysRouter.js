const Router = require('express')
const router = new Router()
const basketToysController = require('./../controllers/basketToysController')

router.post('/', basketToysController.create)
router.get('/', basketToysController.getAll)
router.get('/:id', basketToysController.getOne)



module.exports = router