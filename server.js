const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const DB = require('./config/postgres.config');

const app = express();

DB.raw('select 1+1 as result').then(function () {
  console.log("Connneted to DB");
});

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
	res.json("Server Running");
})

const hospitals = require('./controllers/hospitals');
const doctors = require('./controllers/doctors');
const appointmentBooking = require('./controllers/appointmentBooking');

app.get( '/hospitals', (req, res) => { hospitals.allHospitalDetailsHandler(req, res, DB)});
app.get( '/hospitalPage/:hospitalId', (req, res) => { hospitals.hospitalDetailsByIdHandler(req, res, DB)});
app.get( '/doctors/:hospitalId', (req, res) => { doctors.allDoctorDetailsHandler(req, res, DB)});
app.get( '/doctors/:hospitalId/:doctorId', (req, res) => { doctors.doctorDetailsByIdHandler(req, res, DB)});
app.post( '/booking-appointment/:hospitalId/:doctorId', (req, res) => { appointmentBooking.appointmentHandler(req, res, DB)});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("The server is listening on port", PORT);
  console.log("The environment is", process.env.NODE_ENV);
  console.log(process.env.DATABASE_URL);
});
