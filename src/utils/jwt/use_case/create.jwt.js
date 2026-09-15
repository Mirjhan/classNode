const jwt = require('jwt-simple')
const { secret_token } = process.env

const createJwt = ({ id }) => {
    const currentTime = timeInUnix
    const lastTime = timeInUnix(addDays(new Date(), 7))

    const payload = {
        sub: id,
        iat: currentTime,
        exp: lastTime,
    }
    return jwt.encode(payload, secret_token)
}

const timeInUnix = (date = new Date()) => Math.floor(date.getTime() / 1000)

const addDays = (date, numberDays) => {
    const resultado = new Date(date);
    resultado.setDate(resultado.getDate() + numberDays);
    return resultado;
}

module.exports = createJwt;