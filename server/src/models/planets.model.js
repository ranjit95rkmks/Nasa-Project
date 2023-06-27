const parse = require('csv-parse');
//import {parse} from 'csv-parse';
//import fs from 'node:fs';
const fs = require('fs');
const csv = require('csv');

const habitablePlanets = [];

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED' && planet["koi_insol"] > 0.36 && planet["koi_insol"] < 1.11 && planet['koi_prad'] < 1.6;
}

/*
const promise = new Promise((resolve, reject) => {
    resolve(42);
});
promise.then((result) => {

});

const result = await promise;
console.log(result);

*/


function laodPlanetsData() {
    return new Promise((resolve, reject) => {

        fs.createReadStream('./data/kepler_data.csv')
            .pipe(csv.parse({
                comment: '#',
                columns: true,
            }))
            .on('data', (data) => {
                if (isHabitablePlanet(data)) {
                    habitablePlanets.push(data);
                }

            })
            .on('error', (err) => {
                console.log(err);
                reject(err);
            })
            .on('end', () => {
                //console.log(habitablePlanets);
                resolve();
            });
    });
}

function getAllPlanets(){
    return habitablePlanets;
}


module.exports = {
    laodPlanetsData,
    getAllPlanets,
}
