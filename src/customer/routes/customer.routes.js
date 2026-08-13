const { getCustomerController } = require('../controllers/customer.controller') 
const express = require('express')
const customerRouter = express.Router()

customerRouter.get('/', getCustomerController)

module.exports = customerRouter;

