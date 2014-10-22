"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addColumn('Posts','AuthorId',{
      type:DataTypes.INTEGER,
      foreignKey: true
    });
    // add altering commands here, calling 'done' when finished
    done();
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done();
  }
};
