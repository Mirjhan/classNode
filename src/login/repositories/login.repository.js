const db = require("../../utils/db/models")

const getLoginRepository = ({ email, password }) => {
    return db.User.findOne({
        where: { email: email, password: password }
    })
}
module.exports = getLoginRepository;