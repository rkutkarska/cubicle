const fs = require('fs/promises');
const path = require('path');

const cubes = require('../db.json');

exports.save = (cube) => {
    cubes.push(cube);
    let textData = JSON.stringify(cubes, '', 4);

    return fs.writeFile(path.resolve('src', 'db.json'), textData, { encoding: 'utf-8' });
}

exports.getOne = (cubeId) => {
    console.log(cubes.filter(x => x.id == cubeId));
    return cubes.filter(x => x.id == cubeId)[0];
};