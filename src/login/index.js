const loginRouter = require('./routes/login.routes')

const setLoginModule = (app) => {
    app.use('/login', loginRouter)
}

module.exports = setLoginModule;