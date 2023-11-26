const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  assignedPatients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }],
});

module.exports = mongoose.model('Doctor', doctorSchema);
