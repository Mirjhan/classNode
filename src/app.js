const express = require('express')
const morgan = require('morgan')
const setCustomerModule = require('./customer')
const setUserModule = require('./user')
const { connection } = require('./utils/db/connection')
const app = express()
const port = 3000

app.use(morgan('tiny'))

setCustomerModule(app)
setUserModule(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    connection()
})