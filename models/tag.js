"use strict";

module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define("Tag", {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(db) {
        Tag.hasMany(db.Post);
      }
    }
  });

  return Tag;
};
