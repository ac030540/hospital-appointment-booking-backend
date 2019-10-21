const doctorDetailsByIdHandler = (req, res,DB) => {
    const {hospitalId, doctorId} = req.params;
    var subquery = DB.select('did').from('hosp_docs').where({hid:hospitalId, did:doctorId});
	DB.select('*').from('doctors').whereIn('did', subquery).then( doctor => {
	  	if(doctor)
	  		res.json(doctor)
	  	else 
	  		res.status(400).json("Profile not found")
	})
    .catch( err => res.status(400).json(err))
}

const allDoctorDetailsHandler = (req, res,DB) => {
    const {hospitalId} = req.params;
    // console.log(req.params);
    var subquery = DB.select('did').from('hosp_docs').where({hid:hospitalId});
	DB.select('*').from('doctors').whereIn('did', subquery).then( doctors => {
	  	if(doctors)
	  		res.json(doctors)
	  	else 
	  		res.status(400).json("Profile not found")
	})
    .catch( err => res.status(400).json(err + "Doctors couldn't be fetched."))
}

module.exports = {
  doctorDetailsByIdHandler : doctorDetailsByIdHandler,
  allDoctorDetailsHandler: allDoctorDetailsHandler
}