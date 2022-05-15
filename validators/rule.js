const { body } = require('express-validator')

const createCarRules = [
    body('name').notEmpty().withMessage('name is required'),
    body('type').notEmpty().withMessage('type is required'),
    body('price').notEmpty().withMessage('price is required')
]

const registerRules = [
    body('email').isEmail().withMessage('email invalid').notEmpty().withMessage('email is required'),
    body('username').notEmpty().withMessage('username is required'),
    body('password').notEmpty().withMessage('password is required')
]

module.exports = {
    createCarRules,
    registerRules
}