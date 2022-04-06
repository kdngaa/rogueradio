const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const { Song, User, Like, Comment } = require('../../db/models');




//GET SPECIFIC COMMENT BY ID
router.get('/:id(\\d+)', asyncHandler( async(req, res) =>{
    // const commentId = req.params.id;
    const songId = parseInt(req.params.songId, 10)
    const currentComment = await Comment.findAll({
        where: { songId }
    })

    return res.json(currentComment)
}))






// POST COMMENT (CREATE)
router.post('/', asyncHandler(async (req, res) => {
    const { userId, songId, content } = req.body;

    const newComment = await Comment.create({
        userId, songId, content
    })
    return res.json({ newComment });
}))



//REMOVE A COMMENT
router.delete('/:id(\\d+)' ,asyncHandler( async(req,res) => {
    const id = parseInt(req.params.id, 10)
    const comment = await db.Comment.findByPk(id)


   const deletedComment = await comment.destroy();
    return res.json(deletedComment);
}))

module.exports = router;
