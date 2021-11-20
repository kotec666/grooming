const Router = require('express')
const router = new Router()
const basketToysController = require('./../controllers/basketToysController')

router.post('/', basketToysController.create)
router.delete('/', basketToysController.deleteOne)




module.exports = router