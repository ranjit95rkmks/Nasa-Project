const express = require('express');
const path = require('path');
//const path2= require('../public')
const morgan = require('morgan');
const planetsRouter = require('./routes/planets/planets.route');
const launchesRouter = require('./routes/launches/launches.route');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',

}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(planetsRouter);
app.use('/launches', launchesRouter);
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;