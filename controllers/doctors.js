const doctorDetailsByIdHandler = (req, res,DB) => {
    const {hospitalId, doctorId} = req.params;
	var subquery1 = DB.select('did').from('hosp_docs').where({hid:hospitalId, did:doctorId});
	var subquery2 = DB.select('hid').from('hosp_docs').where({hid:hospitalId, did:doctorId});
	var query1 = DB.select('*').from('doctors').whereIn('did', subquery1);
	var query2 = DB.select('name').from('hospitals').whereIn('hid', subquery2);
	// let obj = {doctor: query1,
	// 		hospital: query2};
	query1.then( doctor => {
		  if(doctor)
		  {
		  	query2.then(hospital => {
					if(hospital)
					{
						DB.select('timings').from('hosp_docs').where({hid:hospitalId, did:doctorId}).then( timings => {
							doctor[0].timings = timings;
							res.json({doctor: doctor[0], 
								hospital: hospital[0]})
						})
					}
					else
						res.status(400).json("Profile not found")
			  })
		  }
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