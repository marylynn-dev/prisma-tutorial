const express = require('express')
const { get, getOne, create, edit, del } = require('../controllers/user')

const router = express.Router()

router.post('/', create)
router.get('/', get)
router.get('/:id', getOne)
router.put('/:id', edit)
router.delete('/:id', del)

module.exports = router