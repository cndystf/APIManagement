const repository = require('../repositories/userRepository')

module.exports = {
    register : (data) => repository.create(data),
    findById : (id) => repository.findById(id)
}