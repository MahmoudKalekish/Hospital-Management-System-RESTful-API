const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  assignedDoctors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }],
});

module.exports = mongoose.model('Patient', patientSchema);
