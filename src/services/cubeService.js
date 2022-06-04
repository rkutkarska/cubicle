const fs = require('fs/promises');
const path = require('path');

const Cube = require('../models/Cube');

exports.getAll = async (search, rawFrom, rawTo) => {
    let cubes = await Cube.find().lean();
    return cubes;
};

exports.create = (cube) => Cube.create(cube);

exports.getOne = (cubeId) => Cube.findById(cubeId);