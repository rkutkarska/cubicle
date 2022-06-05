const fs = require('fs/promises');
const path = require('path');

const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

exports.getAll = async (search, rawFrom, rawTo) => {
    let cubes = await Cube.find().lean();
    return cubes;
};

exports.create = (cube) => Cube.create(cube);

exports.getOne = (cubeId) => Cube.findById(cubeId);

exports.attachAccessory = async (cubeId, accessoryId) => {
    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);
    accessory.cubes.push(cube);

    await cube.save();
    await accessory.save();

    return cube;
};