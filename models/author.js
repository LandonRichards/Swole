module.exports = function(sequelize, DataTypes) {
  var Lifter = sequelize.define("Lifter", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Lifter.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Lifter.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Lifter;
};
