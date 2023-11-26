const Patient = require('../models/Patient');
const mongoose = require('mongoose');

exports.getAllPatients = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const patients = await Patient.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPatient = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  try {
    const patient = await Patient.create({ name });
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create patient', details: error.message });
  }
};

exports.assignDoctor = async (req, res) => {
  const { patientId, doctorId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(doctorId) || !mongoose.Types.ObjectId.isValid(patientId)) {
    return res.status(400).json({ error: 'Invalid doctorId or patientId' });
  }

  try {
    const patient = await Patient.findByIdAndUpdate(
      patientId,
      { $addToSet: { assignedDoctors: doctorId } },
      { new: true }
    );
    res.json(patient);
  } catch (error) {
    res.status(400).json({ error: 'Failed to assign doctor to patient', details: error.message });
  }
};

exports.unassignDoctor = async (req, res) => {
  const { patientId, doctorId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(doctorId) || !mongoose.Types.ObjectId.isValid(patientId)) {
    return res.status(400).json({ error: 'Invalid doctorId or patientId' });
  }

  try {
    const patient = await Patient.findByIdAndUpdate(
      patientId,
      { $pull: { assignedDoctors: doctorId } },
      { new: true }
    );
    res.json(patient);
  } catch (error) {
    res.status(400).json({ error: 'Failed to unassign doctor from patient', details: error.message });
  }
};

exports.getAllPatientsWithDoctors = async (req, res) => {
  try {
    const patients = await Patient.find().populate('assignedDoctors', 'name');
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};