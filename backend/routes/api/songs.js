const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Song, User, Like, Comment } = require('../../db/models');
const { setTokenCookie, restoreUser, requireAuth} = require('../../utils/auth');



// GET ALL SONGS (READ)
router.get('/', asyncHandler( async(req, res) => {
    const getAllSongs = await Song.findAll();
    console.log(getAllSongs)
    return res.json(getAllSongs)
}))



// GET 1 SPECIFIC SONG BY ID
router.get('/:id(\\d+)', asyncHandler( async(req, res) =>{
        const songId = req.params.id;
        const currentSong = await Song.findByPk(songId)

        return res.json(currentSong)
}))





// UPLOAD SONG (CREATE)
router.post('/upload', requireAuth,asyncHandler( async(res, req) =>{
    const {title, genre, audioFile, songImg, artist} = req.body;

    const newSong = await Song.create({
        title, genre, audioFile, songImg, artist
    })

    if (newSong) {
        return res.json({ newSong });
      } else return res.json({});
}))



module.exports = router;
