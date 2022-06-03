const router = require('express').Router();

const cubeService = require('../services/cubeService')

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    const cube = req.body;

    if (cube.length < 2) {
        res.status(400).send('Invalid request!');
        return;
    }

    cubeService.save(cube)
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

router.get('/details/:id', (req, res) => {
    res.render('details');
})

module.exports = router;