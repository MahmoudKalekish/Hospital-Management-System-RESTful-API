require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const userRoutes = require('./routes/userRoutes');
const fileRoutes = require('./routes/fileRoutes');

const app = express();

const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hcat9io.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/users', userRoutes);
app.use('/files', fileRoutes)

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to the database successfully!");
    app.listen(PORT, () => {
      console.log(`Server is running on port - ${PORT}`);
    });
  } catch (error) {
    console.log("Database error occurred!", error);
  }
};
startApp();
