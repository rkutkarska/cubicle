const router = require('express').Router();

const cubeService = require('../services/cubeService');
const acessoryService = require('../services/accessoryService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    const cube = req.body;

    if (cube.length < 2) {
        res.status(400).send('Invalid request!');
        return;
    }

    cubeService.create(cube)
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
            res.status(400).send(err);
        })
});

router.get('/details/:id', async (req, res) => {
    const cube = await cubeService.getOne(req.params.id).lean();
    console.log(cube);
    res.render('details', { cube });
});

router.get('/:cubeId/attach-accessory', async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();
    const accessories = await acessoryService.getAll();
    console.log(cube);
    res.render('accessory/attach', {cube, accessories});
});

module.exports = router;