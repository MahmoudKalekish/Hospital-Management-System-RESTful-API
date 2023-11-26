const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware.authorizeUser, doctorController.getAllDoctors);
router.get('/all-with-schedules', authMiddleware.authorizeUser, authMiddleware.checkAdmin, doctorController.getAllDoctorsWithSchedules);
router.get('/:id', authMiddleware.authorizeUser, doctorController.getDoctorById);
router.post('/', authMiddleware.authorizeUser, authMiddleware.checkAdmin, doctorController.createDoctor);
router.put('/:doctorId/assign-patient/:patientId', authMiddleware.authorizeUser, doctorController.assignPatient);
router.put('/:doctorId/unassign-patient/:patientId', authMiddleware.authorizeUser, doctorController.unassignPatient);

module.exports = router;
