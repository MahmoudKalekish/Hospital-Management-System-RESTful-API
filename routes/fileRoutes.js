const express = require('express');
const router = express.Router();
const multer = require('multer');
const fileController = require('../controllers/fileController');
const authMiddleware = require('../middleware/authMiddleware');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/upload', authMiddleware.authorizeUser, upload.single('file'), fileController.uploadFile);

module.exports = router;
