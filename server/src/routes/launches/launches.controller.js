const { abortLaunchById, getAllLaunches, addNewLaunche, exitsLaunchWithId } = require('../../models/launches.model');


/* function getAllLaunches(req, res){
    return res.status(200).json(Array.from(launches.values()));
} */

//Good pactics

function httpGetAllLaunches(req, res) {
    return res.status(200).json(Array.from(getAllLaunches().values()));
}

function httpSetLaunches(req, res) {
    const launch = req.body;

    if (launch.mission === "" || launch.rocket === "" || launch.launchDate === "" || launch.target === "") {
        res.status(400).json({
            error: "The launch property "
        });
    }
    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)) {
        res.status(400).json({
            error: "Date is not correct "
        });
    }

    addNewLaunche(launch);
    return res.status(201).json(launch);
}

function httpAbortLaunches(req, res) {
    const launchId = Number(req.params.id);
    //console.log(launchId);
    if(!exitsLaunchWithId(launchId)){
       // console.log(exitsLaunchWithId(launchId));
        
        return res.status(404).json({
            error: "Launches not found",
        });
    }
    const aborted = abortLaunchById(launchId);
    return res.status(200).json(aborted); 
    
}

module.exports = {
    httpGetAllLaunches,
    httpSetLaunches,
    httpAbortLaunches,
}