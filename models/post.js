"use strict";

module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    AuthorId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
  }, {
    classMethods: {
      associate: function(db) {
        Post.belongsTo(db.Author);
        Post.hasMany(db.Tag);
        // associations can be defined here
      }
    }
  });

  return Post;
};

