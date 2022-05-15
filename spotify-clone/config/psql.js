const { Sequelize } = require("sequelize");

const database = process.env.PSQL_DATABASE
const username = process.env.PSQL_USER
const password = process.env.PSQL_PASSWORD
const host = process.env.PSQL_HOST

const sequelize = new Sequelize(
  database,
  username,
  password,
  {
    host,
    dialect: "postgres"
  }
);

const dbConnectPsql = async () => {
  try {
    await sequelize.authenticate();
    console.log("****PSQL CONNECTED****")
  } catch (e) {
    console.log("error de conexion", e);
  }
}

module.exports = {
  sequelize,
  dbConnectPsql
}