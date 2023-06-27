const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const { laodPlanetsData } = require('./models/planets.model');


async function startServer() {
    await laodPlanetsData();
    server.listen(PORT, () => {
        console.log(`Listen port ${PORT}`);
    });
}

startServer();