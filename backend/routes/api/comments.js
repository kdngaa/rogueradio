const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const { Song, User, Like, Comment } = require('../../db/models');



//GET ALL COMMENTS
router.get('/', asyncHandler(async (req, res) => {
    const comments = await Comment.findAll();
    return res.json({comments})
}))




//GET SPECIFIC COMMENT BY ID
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    // const commentId = req.params.id;
    const id = parseInt(req.params.id, 10)
    const currentComments = await Comment.findAll({
        where: { songId: id },
        include: [{ model: Song }, { model: User }]
    })

    return res.json(currentComments)
}))






// POST COMMENT (CREATE)
router.post('/', asyncHandler(async (req, res) => {
    const { userId, songId, content } = req.body;

    const comment = await Comment.create({
        userId, songId, content
    })
    return res.json({ comment });
}))



//REMOVE A COMMENT
router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10)
    const comment = await db.Comment.findByPk(id)


    const deletedComment = await comment.destroy();
    res.json(comment);
}))

module.exports = router;
