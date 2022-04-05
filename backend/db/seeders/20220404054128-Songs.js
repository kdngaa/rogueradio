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
        {
          userId: 1,
          title: "Levels",
          genre: "EDM",
          audioFile: "https://res.cloudinary.com/dv3gxfdon/video/upload/v1649142216/yt5s.com-Avicii-_Levels_Audio_toxjw7.mp4",
          songImg: "https://res.cloudinary.com/dv3gxfdon/image/upload/v1649142298/R-3196879-1320268289_vnzbpg.jpg",
          artist: "Avicii",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Erase Me",
          genre: "Rap/HipHop",
          audioFile: "https://res.cloudinary.com/dv3gxfdon/video/upload/v1649142527/yt5s.com-Kid_Cudi_-_Erase_Me_ft._Kanye_West_360p_r6wg6n.mp4",
          songImg: "https://res.cloudinary.com/dv3gxfdon/image/upload/v1649142596/81SfVgqSdOL._SL1400__afhr2e.jpg",
          artist: "Kid Cudi ft. Kanye West",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Focus",
          genre: "R&B",
          audioFile: "https://res.cloudinary.com/dv3gxfdon/video/upload/v1649142789/yt5s.com-H.E.R_-_Focus_Lyrics_li4clj.mp4",
          songImg: "https://res.cloudinary.com/dv3gxfdon/image/upload/v1649142817/ab67616d0000b273b5d9c8de465654c20d77305c_acqtzs.jpg",
          artist: "H.E.R",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Shelter",
          genre: "EDM",
          audioFile: "https://res.cloudinary.com/dv3gxfdon/video/upload/v1649142906/yt5s.com-Porter_Robinson_wu6qwr.mp4",
          songImg: "https://res.cloudinary.com/dv3gxfdon/image/upload/v1649142924/artworks-000189531060-9pz78z-t500x500_awdgt4.jpg",
          artist: "Porter Robinson ft. Madeon",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Say It",
          genre: "EDM",
          audioFile: "https://res.cloudinary.com/dv3gxfdon/video/upload/v1649143169/yt5s.com-Flume_-_Say_It_feat._Tove_Lo_Illenium_Remix_hxlwjb.mp4",
          songImg: "https://res.cloudinary.com/dv3gxfdon/image/upload/v1649143200/artworks-000180900411-2b2yxs-t500x500_yu6akg.jpg",
          artist: "Flume ft. Tove Lo (Illenium Remix)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Marvin's Room",
          genre: "Rap/HipHop",
          audioFile: "https://res.cloudinary.com/dv3gxfdon/video/upload/v1649143411/yt5s.com-Drake_-_Marvins_Room_HQ_fte9pr.mp4",
          songImg: "https://res.cloudinary.com/dv3gxfdon/image/upload/v1649143479/ddcb576177a3d4fe409bac84d3fa859a_wajkba.jpg",
          artist: "Drake",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Someone Else",
          genre: "EDM",
          audioFile: "https://res.cloudinary.com/dv3gxfdon/video/upload/v1649143649/yt5s.com-Rezz_ybrq9u.mp4",
          songImg: "https://res.cloudinary.com/dv3gxfdon/image/upload/v1649143662/artworks-RSWVTC4KyMtGh2c2-CavlMQ-t500x500_xi8byi.jpg",
          artist: "Rezz",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Myself",
          genre: "Rap/HipHop",
          audioFile: "https://res.cloudinary.com/dv3gxfdon/video/upload/v1649143886/yt5s.com-Nav_-_Myself_8D_Audio_USE_HEADPHONES_hzwlks.mp4",
          songImg: "https://res.cloudinary.com/dv3gxfdon/image/upload/v1649143894/artworks-QX5CNEYxus54GlMr-IhABNg-t500x500_liryzi.jpg",
          artist: "Nav",
          createdAt: new Date(),
          updatedAt: new Date()
        },

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
