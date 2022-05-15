// const { user } = require('pg/lib/defaults')
const model = require('../models'), // inisiasi variable model yang berisi model dari folder models
    service = require('../services/carService')

module.exports = {
    list: async (req, res) => {
        try {
            const datas = await service.getAll()

            return res.status(200).json({
                "success" : true,
                "error" : 0,
                "message" : "data successfully listed",
                "data" : datas
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
    
    findById: async (req, res) => {
        try {
            const datas = await service.findById(req.body.id)

            return res.status(200).json({
                "success" : true,
                "error" : 0,
                "message" : "data successfully listed",
                "data" : datas
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

    create: async(req, res) => {
        try {
            const user = await model.user.findOne({ where : {
                id: res.locals.user.id
            } })

            if (user.role === 'member') {
                return res.status(404).json({
                    "success" : false,
                    "error" : 404,
                    "message": "You can't access this stuff",
                    "data" : null
                })
            }
            
            const data = await model.car.create(req.body)

            return res.status(200).json({
                "success" : true,
                "error" : 0,
                "message" : "data successfully created",
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

    update: async(req, res) => {
        try {
            const user = await model.user.findOne({ where : {
                id: res.locals.user.id
            } })

            if (user.role === 'member') {
                return res.status(404).json({
                    "success" : false,
                    "error" : 404,
                    "message": "You can't access this stuff",
                    "data" : null
                })
            }

            const data = await model.car.update({
                name: req.body.name,
                type: req.body.type,
                price: req.body.price
            }, {
                where: {
                    id: req.body.id
                }
            })

            return res.status(200).json({
                "success" : true,
                "error" : 0,
                "message" : "data successfully updated",
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

    destroy: async(req, res) => {
        try {
            const user = await model.user.findOne({ where : {
                id: res.locals.user.id
            } })

            if (user.role === 'member') {
                return res.status(404).json({
                    "success" : false,
                    "error" : 404,
                    "message": "You can't access this stuff",
                    "data" : null
                })
            }

            const data = await model.car.destroy({
                where: {
                    id: req.body.id
                }
            })

            return res.status(200).json({
                "success" : true,
                "error" : 0,
                "message" : "data successfully deleted",
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
    }
}