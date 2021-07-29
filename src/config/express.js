const express = require('express');
const cors    = require('cors');
const routes  = require('../routes');

const app = express();

app.use(cors({
    origin: '*',
    maxAge: 3600
}))

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(routes);

module.exports = app;
