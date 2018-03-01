module.exports = function(sequelize,DataTypes){
	var STMB = sequelize.define('MessageBoard',{
		userName:DataTypes.STRING,
		message:DataTypes.STRING
	});
	return STMB;
}