const model = require('../models')

module.exports = {
    getAll : () => model.car.findAll(),
    findById : (id) => model.car.findOne({ where: { id: id } }),
    create : (data) => model.car.create(data),
    update: (data) => model.car.update(data, { where: { id : id }}),
    destroy: (id) => model.car.destroy({
        where: {
            id: req.body.id
        }
    })
}