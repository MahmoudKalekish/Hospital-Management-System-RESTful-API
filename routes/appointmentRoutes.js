const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware.authorizeUser, appointmentController.getAllAppointments);
router.get('/:id', authMiddleware.authorizeUser, appointmentController.getAppointmentById);
router.post('/schedule', authMiddleware.authorizePatient, appointmentController.scheduleAppointment);
router.put('/:appointmentId/cancel', authMiddleware.authorizePatient, appointmentController.cancelAppointment);
router.put('/:appointmentId/change-status', authMiddleware.authorizePatient, appointmentController.changeAppointmentStatus);

module.exports = router;
