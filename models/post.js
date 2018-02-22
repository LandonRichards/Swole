module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    //this whole thing is just input validation...
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Post.associate = function(models) {
    // We're saying that a Post should belong to an Lifter
    // A Post can't be created without an Lifter due to the foreign key constraint
    // Hey neat! Input validation!
    Post.belongsTo(models.Lifter, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
