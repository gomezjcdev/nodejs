require('dotenv').config()
const express = require('express');
const cors = require('cors');
const dbConnectNoSql = require("./config/mongo");
const { dbConnectPsql } = require("./config/psql");
const app = express();

const ENGINE_DB = process.env.ENGINE_DB;

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

const port = process.env.PORT || 3000;

app.use('/api', require('./routes'));

app.listen(port, () => {
  console.log('app running on http//localhost:' + port);
});

ENGINE_DB === 'nosql' ? dbConnectNoSql() : dbConnectPsql();