const express = require('express') //inisiasi variable yang berisi express
const router = express.Router() // inisiasi variable yang berisi fungsi router express
const carRouter = require('./car') //inisiasi router car
const userRouter = require('./user') //inisiasi router user

router.get('/', (req, res) => res.send("Welcome to Challenge 6"))
router.use('/car', carRouter) // implementasi route car dengan /car
router.use('/user', userRouter) // implementasi route user dengan /user

module.exports = router // export fungsi router agar module lain bisa membaca file ini