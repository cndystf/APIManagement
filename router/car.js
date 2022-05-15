const express = require('express') //inisiasi variable yang berisi express
const router = express.Router() // inisiasi variable yang berisi fungsi router express
const { list, create, update, destroy, findById } = require('../controllers/carController') // inisiasi object controller
const validate = require('../middleware/validate')
const { createCarRules } = require('../validators/rule')
const checkToken = require('../middleware/checkToken')

router.get('/list', checkToken, list) // route untuk endpoint list
router.post('/find-by-id', checkToken, findById) // route untuk endpoint list
router.post('/create', checkToken, validate(createCarRules), create) // route untuk endpoint create
router.put('/update', checkToken, update) // route untuk endpoint update
router.delete('/delete', checkToken, destroy) // route untuk endpoint destroy

module.exports = router // export fungsi router agar module lain bisa membaca file ini