const fs = require('fs/promises');
const path = require('path');

const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

exports.getAll = async (search = '', rawFrom, rawTo) => {
    const from = Number(rawFrom) || 1;
    const to = Number(rawTo) || 6;
    
    let cubes = await Cube.find({ name: new RegExp(search, 'i') })
        .where('difficultyLevel').lte(to).gte(from)
        .lean();

    return cubes;
};

exports.create = (cube) => Cube.create(cube);

exports.getOne = (cubeId) => Cube.findById(cubeId).populate('accessories');

exports.attachAccessory = async (cubeId, accessoryId) => {
    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);
    accessory.cubes.push(cube);

    await cube.save();
    await accessory.save();

    return cube;
};