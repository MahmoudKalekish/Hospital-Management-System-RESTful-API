const Doctor = require('../models/Doctor');
const mongoose = require('mongoose');

exports.getAllDoctors = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const { name } = req.query;

    const query = {};

    if (name) {
      query.name = { $regex: new RegExp(name, 'i') };
    }

    const doctors = await Doctor.find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createDoctor = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  try {
    const doctor = await Doctor.create({ name });
    res.status(201).json(doctor);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create doctor', details: error.message });
  }
};

exports.assignPatient = async (req, res) => {
  const { patientId, doctorId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(doctorId) || !mongoose.Types.ObjectId.isValid(patientId)) {
    return res.status(400).json({ error: 'Invalid doctorId or patientId' });
  }

  try {
    const doctor = await Doctor.findByIdAndUpdate(
      doctorId,
      { $addToSet: { assignedPatients: patientId } },
      { new: true }
    );
    res.json(doctor);
  } catch (error) {
    res.status(400).json({ error: 'Failed to assign patient to doctor', details: error.message });
  }
};

exports.unassignPatient = async (req, res) => {
  const { patientId, doctorId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(doctorId) || !mongoose.Types.ObjectId.isValid(patientId)) {
    return res.status(400).json({ error: 'Invalid doctorId or patientId' });
  }

  try {
    const doctor = await Doctor.findByIdAndUpdate(
      doctorId,
      { $pull: { assignedPatients: patientId } },
      { new: true }
    );
    res.json(doctor);
  } catch (error) {
    res.status(400).json({ error: 'Failed to unassign patient from doctor', details: error.message });
  }
};

exports.getAllDoctorsWithSchedules = async (req, res) => {
  try {
    const doctors = await Doctor.find().populate('assignedPatients');
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};