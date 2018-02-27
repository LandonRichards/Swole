var db = require("../models");

module.exports = function(app) {
    app.post("/api/user/", function(req, res) {
        db.Users.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.emailAddress,
            userName: req.body.userName,
            password: req.body.password,
            points: 0
        }).then(function(data) {
            res.json(data);
        });
    });

    app.put("/api/workouts", function(req, res) {
        db.Users.update({
            points:points+req.body.points
        }, {
        	where:{
        		userName:req.body.userName
        	}
        });
    });

    app.post("/api/users/", function(req,res){
    	db.Users.findOne({
    		where:{
    			userName:req.body.userName,
    			password:req.body.password
    		}
    	}).then(function(user){
    		if(user){
    			console.log('Found')
    			return res.redirect('back');
    		} else{
    			console.log('No user found')
    		};
    	})
    })
}