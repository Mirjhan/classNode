const userRouter = require('./routes/user.routes')

const setUserModule = (app) => {
    app.use('/user', userRouter)
}

module.exports = setUserModule