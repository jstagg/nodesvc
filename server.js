'use strict';

// https://www.enterprisedb.com/postgres-tutorials/how-quickly-build-api-using-nodejs-postgresql

const config = require('./config.js');
const express = require('express');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:behind-should-THOUGHT-cloth@localhost:5432/todos')

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`Hello World. I am running on http://${config.HOST}:${config.PORT} in ENV ${config.NODE_ENV}`);
});

app.listen(config.PORT, config.HOST);
console.log(`Running on http://${config.HOST}:${config.PORT} in ENV ${config.NODE_ENV}`);

sequelize
.authenticate()
.then(() => {
console.log('Connection has been established successfully.');
})
.catch(err => {
console.error('Unable to connect to the database:', err);
});
