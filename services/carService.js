const repository = require('../repositories/carRepository')

module.exports = {
    getAll : () => repository.getAll(),
    findById : (id) => repository.findById(id),
    create : (data) => repository.create(data),
    update : (data) => repository.update(data),
    destroy : (id) => repository.destroy(id)
}