const express = require('express');
const { getTrack, getTracks, createTrack } = require("../controllers/tracks");

const router = express.Router();

router.get('/', getTracks);

router.get('/:id', getTrack);

router.post('/', createTrack);

module.exports = router;