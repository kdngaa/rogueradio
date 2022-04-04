'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    audioFile: DataTypes.STRING,
    songImg: DataTypes.STRING
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
    Song.belongsTo(models.User, { foreignKey: 'userId' });
    Song.hasMany(models.Like, { foreignKey: 'songId' });
    Song.hasMany(models.Comment, { foreignKey: 'songId' });
  };
  return Song;
};
