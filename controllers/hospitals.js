const allHospitalDetailsHandler = (req, res,DB) => {
	DB.select('*').from('hospitals')
    .then( hospitals => {
	  	if(hospitals)
	  		res.json(hospitals)
	  	else 
	  		res.status(400).json("Profile not found")
	})
    .catch( err => res.status(400).json("Unable to load profile"))
}

const hospitalDetailsByIdHandler = (req, res,DB) => {
	const {hospitalId} = req.params;
	DB.select('*').from('hospitals').where({hid:hospitalId})
    .then( hospital => {
	  	if(hospital)
	  		res.json(hospital)
	  	else 
	  		res.status(400).json("Hospital not found")
	})
    .catch( err => res.status(400).json("Error: " + err))
}

module.exports = {
  allHospitalDetailsHandler : allHospitalDetailsHandler,
  hospitalDetailsByIdHandler : hospitalDetailsByIdHandler
}