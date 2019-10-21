const nodemailer = require("nodemailer")

const appointmentHandler = (req, res,DB) => {
    const { doctorId, hospitalId } = req.params;
	const {name, age, address, date, number, email} = req.body;
	DB('appointment').insert(
       { 
        patient_name: name,
        patient_address: address,
        patient_age: age,
        patient_number: number,
        a_date: date,
        a_hid: hospitalId, 
        a_did: doctorId,
        patient_email: email}
        )
    .then( user_data => {
        if(user_data){
            res.json("success")
        }
        else 
            res.status(400).json("Profile not found")
    })
   .catch( err => res.status(400).json(err))
}

module.exports = {
	appointmentHandler : appointmentHandler
}