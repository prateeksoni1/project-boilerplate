const express = require('express');
const { notFound, errorHandler } = require('../middlewares');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('*', notFound);
app.use(errorHandler);

module.exports = app;
