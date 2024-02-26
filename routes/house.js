const express = require('express')
const { get, getOne, create, filter } = require('../controllers/house')

const router = express.Router()

router.post('/', create)
router.get('/', get)
router.get('/:id', getOne)
router.get('/filter', filter)

module.exports = router