const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Song, User, Like, Comment } = require('../../db/models');



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
router.post('/', asyncHandler( async(res, req) =>{
    const {title, artist, genre, songImg, audioFile} = req.body;

    const newSong = await Song.create({
        title, artist, genre, songImg, audioFile
    })
     return res.json({ newSong });
}))


module.exports = router;
