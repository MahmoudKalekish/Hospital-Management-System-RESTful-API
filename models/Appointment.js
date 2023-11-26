const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  status: { type: String, enum: ['Scheduled', 'Cancelled', 'Completed'], default: 'Scheduled' },
  date: { type: Date, required: true, validate: { validator: date => date >= new Date(), message: 'Cannot schedule past appointments' } },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
