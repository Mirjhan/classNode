const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan')
const setCustomerModule = require('./customer')
const setUserModule = require('./user')
const setLoginModule = require('./login')
const { connection } = require('./utils/db/connection')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(morgan('tiny'))

setCustomerModule(app)
setUserModule(app)
setLoginModule(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    connection()
})