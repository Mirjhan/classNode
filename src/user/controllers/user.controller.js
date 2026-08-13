const { getPromise } = require('../../utils/core/helpers')

const getUserController = (req, res) => {
    const [err, data] = getPromise()
    if(err) return res.status(500).json(err)
        res.status(200).json(data)
}

module.exports = {
    getUserController
}