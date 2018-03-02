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

    app.put("/api/workouts/", function(req, res) {
        db.Users.update({
            points: points + req.body.points
        }, {
            where: {
                userName: req.body.userName
            }
        });
    });

    // app.post("/api/workouts/", function(req, res) {
    //     db.Workouts.create({
    //         userName: ,
    //         workoutTitle: ,
    //         points: 
    //     }).then(function(data) {
    //         res.json(data)
    //     });
    // });

    app.post("/api/users/", function(req, res) {
        console.log(req.body)
        db.Users.findOne({
            where: {
                userName: req.body.userName,
                passWord: req.body.passWord
            }
        }).then(function(user) {
            if (user) {
                console.log('Found')
                res.send({ userName: req.body.userName });
            } else {
                console.log('No user found')
            };
        })
    });

    app.get("/api/messages", function(req, res) {
        db.STMB.findAll({ limit: 10, order: '"createdAt" DESC' })
            .then(function(data) {
                res.json(data)
            })
    })

    
}