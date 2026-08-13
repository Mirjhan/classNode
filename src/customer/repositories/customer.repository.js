const db = require("../../utils/db/models")

const getCustomerRepository = async () => {
    return await db.Customer.findAll({
        include: [{all: true}]
    })

}

module.exports = {
    getCustomerRepository,
}