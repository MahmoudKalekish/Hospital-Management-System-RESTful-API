const File = require('../models/fileModel');
const Patient = require('../models/Patient');
const mongoose = require('mongoose');

exports.uploadFile = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { patientId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(patientId)) {
      return res.status(400).json({ error: 'Invalid patientId' });
    }

    const newFile = new File({
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      buffer: file.buffer,
      patient: patientId,
    });

    await newFile.save();

    res.json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};
