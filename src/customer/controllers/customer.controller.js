
const { getPromise } = require('../../utils/core/helpers')
const getCustomerUseCase = require('../use_cases/get_customer.use_case')

const getCustomerController = async (req, res) => {
    const [err, data] = await getPromise(getCustomerUseCase())
    if (err) return res.status(500).json(err)
    res.status(200).json(data)
}
module.exports = {
    getCustomerController
}