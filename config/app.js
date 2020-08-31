const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const routes = require('../routes/routesIndex');

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api', routes);
app.get('/', (req, res) => {
  res.json({
    'products': '/api/products',
    'categories': '/api/categories'
  })
})

module.exports = app;