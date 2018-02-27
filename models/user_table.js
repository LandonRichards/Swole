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
	return Users;
};