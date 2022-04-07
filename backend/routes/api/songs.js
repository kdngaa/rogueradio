const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const { Song, User, Like, Comment } = require('../../db/models');



// GET ALL SONGS (READ)
router.get('/', asyncHandler( async(req, res) => {
    const getAllSongs = await Song.findAll();
    console.log(getAllSongs)
    return res.json(getAllSongs)
}))





// GET 1 SPECIFIC SONG BY ID  //CHECK AGAIN
router.get('/:id(\\d+)', asyncHandler( async(req, res) =>{
    const id = parseInt(req.params.id, 10)
    const song = await Song.findByPk(id,{
        include: [db.User, {model: db.Comment, include: db.User}]
    })

    return res.json(song)
}))





// UPLOAD SONG (CREATE)
router.post('/', asyncHandler( async(req, res) =>{
    const {userId, title, artist, genre, songImg, audioFile} = req.body;

    const newSong = await Song.create({
        userId, title, artist, genre, songImg, audioFile
    })
     res.json({ newSong });
}))




// UPDATE/EDIT A SONG
router.put('/:id(\\d+)', asyncHandler( async(req,res) => {
    const id = parseInt(req.params.id, 10)
    const song = await db.Song.findByPk(id)

    const {userId, title, artist, genre, songImg, audioFile} = req.body;
    const updatedSong = await song.update({
        userId, title, artist, genre, songImg, audioFile
    })
    await updatedSong.save()
    res.json(updatedSong)
}))





//REMOVE A SONG
router.delete('/:id(\\d+)' ,asyncHandler( async(req,res) => {
    const id = parseInt(req.params.id, 10)
    const song = await db.Song.findByPk(id)


   const deletedSong = await song.destroy();
res.json(deletedSong);
}))

module.exports = router;
