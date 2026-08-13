const { getCustomerRepository } = require("../repositories/customer.repository")

const getCustomerUseCase = () => getCustomerRepository()

module.exports = getCustomerUseCase