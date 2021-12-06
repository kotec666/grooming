const Router = require('express')
const router = new Router()
const orderToysController = require('./../controllers/orderToysController')

router.post('/', orderToysController.create)
router.delete('/', orderToysController.deleteOne)




module.exports = router