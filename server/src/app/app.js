const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const { notFound, errorHandler } = require('../middlewares');

const app = express();

app.use(cors());

app.use(helmet());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('*', notFound);
app.use(errorHandler);

module.exports = app;
