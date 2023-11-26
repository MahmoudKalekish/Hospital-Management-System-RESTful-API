const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware.authorizeUser, patientController.getAllPatients);
router.get('/all-with-doctors', authMiddleware.authorizeUser, authMiddleware.checkAdmin, patientController.getAllPatientsWithDoctors);
router.get('/:id', authMiddleware.authorizeUser, patientController.getPatientById);
router.post('/', authMiddleware.authorizeUser, patientController.createPatient);
router.put('/:patientId/assign-doctor/:doctorId', authMiddleware.authorizeUser, patientController.assignDoctor);
router.put('/:patientId/unassign-doctor/:doctorId', authMiddleware.authorizeUser, patientController.unassignDoctor);

module.exports = router;
