const nodemailer = require("./nodemailer")

const appointmentHandler = (req, res,DB) => {
    const { doctorId, hospitalId } = req.params;
	const {name, age, address, date, number} = req.body;
	DB('appointment').insert(
       { // {aid: DEFAULT,
        patient_name: name,
        patient_address: address,
        patient_age: age,
        patient_number: number,
        a_date: date,
        a_hid: hospitalId, 
        a_did: doctorId}
        )
    .then( user_data => {
        if(user_data){
            let composeMail = nodemailer.composeMail("Your Appointment has been booked",name);
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