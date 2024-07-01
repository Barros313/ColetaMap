const express = require('express');

const PontosColeta = require('../models/PontosColeta');

const router = express.Router();

router.get('/data', async (req, res) => {
    try {
        const pontosColeta = await PontosColeta.find();

        res.json(pontosColeta);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;