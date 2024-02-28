//routes.js
const express = require('express')
const router = express.Router();
const passport = require('passport')

module.exports = (function () {

    router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

    router.get('/auth/facebook/callback',
        passport.authenticate('facebook', { successRedirect: 'https://api-soida.applamdep.com/', failureRedirect: 'https://id.applamdep.com/#/login' }),
        function (req, res) {
            console.log(res)
            res.send(res);
        });

    router.get('/logout', function (req, res) {
        req.session = null;
        req.logout();
        res.redirect("https://api-soida.applamdep.com/")
    });

    return router;
})();