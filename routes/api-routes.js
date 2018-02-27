var db = require("../models");

module.exports = function(app){
	app.post('/api/users',function(req,res){
		db.Users.create({
			firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailAddress: req.body.emailAddress,
            userName: req.body.userName,
            password: req.body.password,
            points: 0
		}).then(function(data){
			res.json(data);
		});
	});


}