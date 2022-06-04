const fs = require('fs/promises');
const path = require('path');

const cubes = require('../db.json');

exports.save = (cube) => {
    // MongoDB like ids
    const ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) =>
    s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h));
    
    cubes.push({id: ObjectId(), ...cube});
    let textData = JSON.stringify(cubes, '', 4);    

    return fs.writeFile(path.resolve('src', 'db.json'), textData, { encoding: 'utf-8' });
}

exports.getOne = (cubeId) => {
    return cubes.filter(x => x.id == cubeId)[0];
};