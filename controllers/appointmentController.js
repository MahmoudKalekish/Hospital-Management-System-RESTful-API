const Appointment = require('../models/Appointment');
const Patient = require('../models/Patient');
const mongoose = require('mongoose');

exports.getAllAppointments = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const appointments = await Appointment.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

exports.scheduleAppointment = async (req, res) => {
  const { patientId, doctorId, date, reason, notes } = req.body;

  try {
    const patient = await Patient.findById(patientId);
    if (!patient || !patient.assignedDoctors.includes(doctorId)) {
      return res.status(400).json({ error: 'Patient must be assigned to a doctor to schedule an appointment.' });
    }

    if (new Date(date) < new Date()) {
      return res.status(400).json({ error: 'Cannot schedule past appointments' });
    }

    const appointment = await Appointment.create({ patient: patientId, doctor: doctorId, date, reason, notes });
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ error: 'Failed to schedule appointment', details: error.message });
  }
};

exports.cancelAppointment = async (req, res) => {
  const { appointmentId } = req.params;

  try {
    const appointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      { status: 'Cancelled' },
      { new: true }
    );
    res.json(appointment);
  } catch (error) {
    res.status(400).json({ error: 'Internal Server Error', details: error.message });
  }
};

exports.changeAppointmentStatus = async (req, res) => {
  const { appointmentId } = req.params;
  const { status } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(appointmentId)) {
      return res.status(400).json({ error: 'Invalid appointmentId' });
    }

    const appointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      { status },
      { new: true }
    );
    res.json(appointment);
  } catch (error) {
    res.status(400).json({ error: 'Failed to change appointment status', details: error.message });
  }
};
