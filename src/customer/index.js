const customerRouter = require('./routes/customer.routes')

const setCustomerModule = (app) => {
    app.use('/customer', customerRouter)
}

module.exports = setCustomerModule
