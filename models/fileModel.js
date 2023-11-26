const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  originalname: { type: String, required: true },
  mimetype: { type: String, required: true },
  size: { type: Number, required: true },
  buffer: { type: Buffer, required: true },
});

module.exports = mongoose.model('File', fileSchema);
