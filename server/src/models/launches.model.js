
const launches = new Map();

let latestFlightNumber = 100;
const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration x',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'kepler-442 b',
    customers: ['ZMT', 'NASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return launches;
}

function exitsLaunchWithId(launchId) {
    return launches.has(launchId);
}

function abortLaunchById(launchId) {
    //launches.delete(launchId);
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

function addNewLaunche(launch) {
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch, {
        flightNumber: latestFlightNumber,
        customers: ['ZMT', 'NASA'],
        upcoming: true,
        success: true,
    }));
}

module.exports = {
    getAllLaunches,
    exitsLaunchWithId,
    abortLaunchById,
    addNewLaunche,
    launches,
    mylaunch: launch, 
}