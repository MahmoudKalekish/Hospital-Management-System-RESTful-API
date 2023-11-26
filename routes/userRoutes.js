const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const patientController = require('../controllers/patientController');
const doctorController = require('../controllers/doctorController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/create-doctor', authMiddleware.authorizeUser, doctorController.createDoctor);
router.get('/patients', authMiddleware.authorizeUser, patientController.getAllPatients);
router.get('/doctors', authMiddleware.authorizeUser, doctorController.getAllDoctors);

module.exports = router;
