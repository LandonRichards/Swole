module.exports = function(sequelize,DataTypes){
	var Workouts = sequelize.define('Workouts',{
		//We may need to make this a foreign key so that it references
		//the previous table, possibly something to ask JJ
		userName:DataTypes.STRING,
		workoutTitle:DataTypes.STRING,
		points:DataTypes.TINYINT
	});
	return Workouts;
}