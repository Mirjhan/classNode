const { getPromise } = require('../../utils/core/helpers')
const getLoginUseCase = require('../use_cases/login.use_case')

const getLoginController = async (req, res) => {
    const { email, password } = req.body

    const [err, data] = await getPromise(getLoginUseCase({ email, password }))
    if (err) return res.status(500).json(err)
    return res.status(200).json(data)
}

module.exports = getLoginController;