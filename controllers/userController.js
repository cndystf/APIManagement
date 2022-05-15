const model = require('../models'),
    { genSalt, hash, compareSync } = require('bcrypt'),
    jwt = require('jsonwebtoken')


const cryptPassword = async (password) => {
    const salt = await genSalt(12)
    
    return hash(password, salt)
}

module.exports = {
    register: async (req, res) => {
        try {
            
            const data = await model.user.create({
                ...req.body,
                password: await cryptPassword(req.body.password)
            })

            return res.status(200).json({
                "success" : true,
                "error" : 0,
                "message" : "User successfully registered",
                "data" : data
            })

        } catch (error) {
            return res.status(500).json({
                "success" : false,
                "error" : error.code,
                "message" : error,
                "data" : null
            })
        }
    },
    
    regAdmin: async (req, res) => {
        try {
            const user = await model.user.findOne({ where : {
                id: res.locals.user.id
            } })
            
            if(user.role!=='superadmin'){
                return res.status(404).json({
                    "success" : false,
                    "error" : 404,
                    "message" : 'Failed to add new admin',
                    "data" : null
                })
            }

            const data = await model.user.create({
                ...req.body,
                password: await cryptPassword(req.body.password)
            })

            return res.status(200).json({
                "success" : true,
                "error" : 0,
                "message" : "Admin successfully registered",
                "data" : data
            })

        } catch (error) {
            return res.status(500).json({
                "success" : false,
                "error" : error.code,
                "message" : error,
                "data" : null
            })
        }
    },

    login: async (req, res) => {
        try {
            const userExists = await model.user.findOne({
                where: {
                    username : req.body.username
                }
            })

            if(!userExists)
                return res.status(404).json({
                    "success" : false,
                    "error" : 404,
                    "message" : 'User not found',
                    "data" : null
                })
            
            if (compareSync(req.body.password, userExists.password)) {
                const token = jwt.sign(
                    { id: userExists.id, username: userExists.username, email: userExists.email },
                    'password!23',
                    { expiresIn: '12h' }
                )
            
                return res.status(200).json({
                    "success" : true,
                    "error" : 0,
                    "message" : "User successfully login",
                    "data" : {
                        "token" : token
                    }
                })
            }
        
            return res.status(409).json({
                "success" : false,
                "error" : 409,
                "message" : "Invalid credentials",
                "data" : null
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                "success" : false,
                "error" : error.code,
                "message" : error,
                "data" : null
            })
        }
    },

    getProfile: async (req, res) => {
        try {
            const user = await model.user.findOne({ where : {
                id: res.locals.user.id
            } })
            if (!user) { 
                return res.status(500).json({
                    "success" : false,
                    "error" : 404,
                    "message" : 'User data not found',
                    "data" : null
                })
            }

            return res.status(200).json({
                "success" : true,
                "error" : 0,
                "message" : "User successfully get",
                "data" : user
            })
    
        } catch (error) {
            return res.status(500).json({
                "success" : false,
                "error" : error.code,
                "message" : error,
                "data" : null
            })
        }
      }
}