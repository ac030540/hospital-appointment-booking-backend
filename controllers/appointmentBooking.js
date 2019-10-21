const nodemailer = require("nodemailer")

const appointmentHandler = (req, res,DB) => {
    const { doctorId, hospitalId } = req.params;
    console.log('Entered appointemnt handler');
  const {name, age, address, date, number, email, hospital_name, doctor_name, time} = req.body;
  console.log(name, address, age, date, number, email);
	DB('appointment').insert(
       { 
        patient_name: name,
        patient_address: address,
        patient_age: age,
        patient_number: number,
        a_date: date,
        patient_email: email,
        a_hid: hospitalId, 
        a_did: doctorId,
        patient_email: email}
        )
    .then( user_data => {
        if(user_data){
            let message = nodemailer.composeMail(`Your Appointment has been booked successfully at the hospital ${hospital_name} with doctor ${doctor_name}
            on ${date} at ${time}.`,name);
            nodemailer.sendEmail("Appointment Confirmation", email, message)
            .then(() => {
              res.json("success");
            })
            .catch((err) => res.status(400).json(err));
        }
        else 
            res.status(400).json("Profile not found")
    })
   .catch( err => res.status(400).json(err))
}

module.exports = {
	appointmentHandler : appointmentHandler
}