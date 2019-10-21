const allHospitalDetailsHandler = (req, res,DB) => {
	const {id} = req.params;
	DB.select('*').from('hospitals')
    .then( hospitals => {
	  	if(hospitals)
	  		res.json(hospitals)
	  	else 
	  		res.status(400).json("Profile not found")
	})
    .catch( err => res.status(400).json("Unable to load profile"))
}

// const hospitalDetailsByIdHandler = (req, res,DB) => {
// 	const {id} = req.params;
// 	DB.select('*').from('users').where({id:id})
//     .then( user => {
// 	  	if(user.length)
// 	  		res.json(user[0])
// 	  	else 
// 	  		res.status(400).json("Profile not found")
// 	})
//     .catch( err => res.status(400).json("Unable to load profile"))
// }

module.exports = {
  allHospitalDetailsHandler : allHospitalDetailsHandler,
  // hospitalDetailsByIdHandler : hospitalDetailsByIdHandler
}