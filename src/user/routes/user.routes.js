const { getUserController } = require('../../user/controllers/user.controller')
const express = require('express')
const userRouter = express.Router()

userRouter.get('/', getUserController)

module.exports = userRouter
