const express = require("express");
const uploadMiddleware = require("../utils/handleStorage");
const { createStorage, getStorages } = require("../controllers/storage");
const router = express.Router();

router.get("/", getStorages);

router.post("/", uploadMiddleware.single("file"), createStorage);

module.exports = router;