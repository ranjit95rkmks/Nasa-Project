const express = require('express');

const planetRouter = express.Router();
// const planetController = require('./planet.controller');
const { httpGetAllPlanets } = require('./planet.controller');


// planetRouter.get('/planets', planetController.getAllPlanets);
planetRouter.get('/planets', httpGetAllPlanets)

module.exports = planetRouter;