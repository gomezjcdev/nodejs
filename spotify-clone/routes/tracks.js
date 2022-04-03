const express = require('express');
const { getTrack, getTracks, createTrack, updateTrack, deleteTrack } = require("../controllers/tracks");
const { validatorCreateTrack, validatorTrackId } = require("../validators/tracks");
const authMiddleware = require("../middleware/session");

const router = express.Router();

/**
 * Get all Tracks
 */
router.get('/', authMiddleware, getTracks);

/**
 * Get Track by id
 */
router.get('/:id', validatorTrackId, getTrack);

/**
 * Create a track
 */
router.post('/', validatorCreateTrack, createTrack);

/**
 * Update a track
 */
router.put('/:id', validatorTrackId, validatorCreateTrack,  updateTrack);

/**
 * Delete a track
 */
router.delete('/:id', validatorTrackId,  deleteTrack);

module.exports = router;