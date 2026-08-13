
const {
    username_db,
    password_db,
    database_db,
    host_db,
    dialect_db,
    port_db,
} = process.env

const config = {
    username: username_db,
    password: password_db,
    database: database_db,
    host: host_db,
    port: port_db,
    dialect: dialect_db,
}

module.exports = {
    development: config,
    test: config,
    production: config,
}