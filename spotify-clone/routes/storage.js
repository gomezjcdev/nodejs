const express = require("express");
const uploadMiddleware = require("../utils/handleStorage");
const { createStorage, getStorages, deleteStorage, updateStorage, getStorage } = require("../controllers/storage");
const { validatorStorageId } = require("../validators/storage");
const router = express.Router();

router.get("/", getStorages);


/**
 * Get all storages
 */
router.get('/', getStorages);

/**
 * Get storage by id
 */
router.get('/:id', validatorStorageId, getStorage);

/**
 * Create a storage
 */
router.post("/", uploadMiddleware.single("file"), createStorage);

/**
 * Update a storage
 */
//router.put('/:id', validatorStorageId, uploadMiddleware.single("file"), updateStorage);

/**
 * Delete a storage
 */
router.delete('/:id', validatorStorageId, deleteStorage);

module.exports = router;