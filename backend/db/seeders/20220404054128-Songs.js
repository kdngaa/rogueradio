'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Songs', [
        {
          userId: 1,
          title: "Beside You",
          genre: "R&B",
          audioFile: "https://res.cloudinary.com/dv3gxfdon/video/upload/v1649088018/yt5s.com_-_keshi_-_beside_you_Audio_128_kbps_q0v6l1.mp3",
          songImg: "https://res.cloudinary.com/dv3gxfdon/image/upload/v1649053985/keshi_cover_ffdaig.jpg",
          artist: "Keshi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Leave The Door Open",
          genre: "R&B",
          audioFile: "https://res.cloudinary.com/dv3gxfdon/video/upload/v1649088803/yt5s.com-Bruno_Mars_Anderson._Paak_Silk_Sonic_-_Leave_The_Door_Open_Audio_-_480p_ldxqcx.mp4",
          songImg: "https://res.cloudinary.com/dv3gxfdon/image/upload/v1649088826/ab67616d0000b2730d18a58b311b58820ba4735f_ktiauy.jpg",
          artist: "Silk Sonic",
          createdAt: new Date(),
          updatedAt: new Date()
        },

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
