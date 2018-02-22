module.exports = function(sequelize,DataTypes){
	var Users = sequelize.define('Users',{
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING,
		userName: {
			type:DataTypes.STRING,
			primaryKey:true
		},
		password: DataTypes.STRING,
		points: DataTypes.TINYINT
	},{timestamp:false});

	var Workouts = sequelize.define('Workouts',{
		//We may need to make this a foreign key so that it references
		//the previous table, possibly something to ask JJ
		userName:DataTypes.STRING,
		workoutTitle:DataTypes.STRING,
		points:DataTypes.TINYINT
	});

	var STMB = sequelize.define('MessageBoard',{
		userName:DataTypes.STRING,
		message:DataTypes.STRING
	});
};