const { validationResult } = require('express-validator') // inisiasi object validationResult dari express valdiator

const validate = (validations) => {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)))
    
        const errors = validationResult(req)
        if (errors.isEmpty()) {
            return next()
        }
        return res.status(400).json({
            "success" : false,
            "error" : 400,
            "messages" : errors.array()
        })
    }
}

module.exports = validate

