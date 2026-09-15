
const getLoginRepository = require('../repositories/login.repository')
const createJwt = require('../../utils/jwt/use_case/create.jwt')

const getLoginUseCase = async ({ email, password }) => {
    const user = await getLoginRepository({ email, password })

    const token = createJwt({ id: user.id })

    return {
        user,
        token
    }
}

module.exports = getLoginUseCase;

