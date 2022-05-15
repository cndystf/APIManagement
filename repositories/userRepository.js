const model = require('../models')

module.exports = {
    register : (data) => model.user.create(data),
    findById : (id) => model.user.findOne({ where: { id: id } })
}