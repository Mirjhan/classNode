const getLoginController = require('../controllers/login.controller')
const express = require('express')
const loginRouter = express.Router()

loginRouter.post('/', getLoginController)

module.exports = loginRouter;