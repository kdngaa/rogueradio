// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');
const songsRouter = require("./songs.js");
// const { route } = require('../index.js');
// const { Router } = require('express');
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');



router.use('/session', sessionRouter);

router.use('/users', usersRouter);

// router.post('/test', (req, res) => {
//     res.json({ requestBody: req.body }); //request is an object that you're keying into
// });

router.use("/songs", songsRouter);




router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
    const user = await User.findOne({
        where: {
            username: 'Demo-lition'
        }
    });
    setTokenCookie(res, user);
    return res.json({ user });
}));




router.get(
    '/restore-user',
    restoreUser,
    (req, res) => {
        return res.json(req.user);
    }
);



router.get(
    '/require-auth',
    requireAuth,
    (req, res) => {
        return res.json(req.user);
    }
);


module.exports = router;
