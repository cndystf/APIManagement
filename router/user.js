const express = require('express') //inisiasi variable yang berisi express
const router = express.Router() // inisiasi variable yang berisi fungsi router express
const { register, login, getProfile, regAdmin } = require('../controllers/userController.js') // inisiasi object controller
const checkToken = require('../middleware/checkToken.js')
const validate = require('../middleware/validate')
const { registerRules } = require('../validators/rule')


router.post('/register', validate(registerRules), register) //defaultnya register itu buat member
router.post('/login', login)
router.get('/profile', checkToken, getProfile)
router.post('/reg-admin', checkToken, regAdmin)

module.exports = router // export fungsi router agar module lain bisa membaca file ini

//superadmin, email : superadmin@gmail.com, password : nyenyenye