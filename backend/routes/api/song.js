const express = require('express');
const asyncHandler = require('express-async-handler');
const { Song, User, Like, Comment } = require('../../db/models');
const { setTokenCookie, restoreUser, requireAuth} = require('../../utils/auth');



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



// GET ALL SONGS (READ)
router.get('/')
