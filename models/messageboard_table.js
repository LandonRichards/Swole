module.exports = function(sequelize,DataTypes){
	var MessageBoards = sequelize.define('MessageBoards',{
		userName:DataTypes.STRING,
		message:DataTypes.STRING
	});
	return MessageBoards;
}