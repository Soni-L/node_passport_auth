require('dotenv').config()

dbPassword = process.env.DB_CONNECTION_STRING;

module.exports = {
    mongoURI: dbPassword
};
