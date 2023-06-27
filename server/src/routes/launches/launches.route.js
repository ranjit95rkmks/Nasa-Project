const express = require('express');

const launchesRouter = express.Router();
const { httpGetAllLaunches, httpSetLaunches, httpAbortLaunches } = require('./launches.controller');


launchesRouter.post('/', httpSetLaunches);

launchesRouter.get('/', httpGetAllLaunches);

launchesRouter.delete('/:id', httpAbortLaunches);

module.exports = launchesRouter;
