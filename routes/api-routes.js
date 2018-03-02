var db = require("../models");

module.exports = function(app) {
    app.post("/api/user", function(req, res) {
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

    app.post("/api/messages", function(req,res){
        db.MessageBoards.create({
            userName:req.body.userName,
            message:req.body.message
        }).then(function(data){
            res.json(data);
        });
    });

    app.get("/api/messages", function(req, res) {
        db.MessageBoards.findAll({limit:10})
            .then(function(data) {
                res.json(data)
            }).catch(function(err){
            console.log(err)
            res.json(err)
        });
    });

    app.get("/api/leaders", function(req, res) {
        db.MessageBoards.findAll({
            limit:5,
            
        })
            .then(function(data) {
                res.json(data)
            }).catch(function(err){
            console.log(err)
            res.json(err)
        });
    });

    app.get("/api/workouts/:userName", function(req,res){
        db.Workouts.findAll({
            limit:10,
            order: [ [ 'createdAt', 'DESC' ]],
            where: {
                userName: req.params.userName
            }
        }).then(function(data){
            res.json(data)
        }).catch(function(err){
            console.log(err)
            res.json(err)
        })
    })

    app.post("/api/workouts", function(req, res) {
        db.Workouts.create({
            userName: req.body.userName,
            workoutTitle: req.body.workoutTitle,
            points: req.body.points
        }).then(function(data) {
            res.json(data)
        });
    });

    app.put("/api/users", function(req,res){
        console.log(req.body.points,req.body.userName)
        db.Users.update({
            points: points += req.body.points
        }, {
            where: {
                userName: req.body.userName
            }
        }).then(function(data){
            res.json(data);
        });
    })

    app.post("/api/users", function(req, res) {
        db.Users.findOne({
            where: {
                userName: req.body.userName,
                password: req.body.password
            }
        }).then(function(user) {
            if (user) {
                res.send(user.dataValues.userName)
            } else {
                console.log('No user found')
            };
        })
    });

    

    
}