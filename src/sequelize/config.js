// import accessEnv from "../helpers/accessEnv"
require("dotenv").config()

module.exports = {
  development: {
    username: process.env["DB_USER"],
    password: process.env["DB_PASSWORD"],
    database: process.env["DB_DATABASE"],
    host: process.env["DB_HOST"],
    dialect: "postgres",
    dialectOptions: {
      useUTC: true // for reading from database
    },
    timezone: "utc" // for writing to database
  }
}
