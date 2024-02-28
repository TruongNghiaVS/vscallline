const jwt = require('jsonwebtoken')
const User = require('./../models/PluginCollection/UserPluginModel');
const EndUser = require('./../models/EndUserModel');
const Response = require('../helpers/Response');

const auth = async (req, res, next) => {
    try {
        var token = req.header('Authorization').replace('Bearer ', '')
        var payload = jwt.decode(token);
        var user = await User.findOne(
            { '_id': payload._id });
        jwt.verify(token, "1234567890qwertyuiopasdfghjklzxcvbnm");
        req.user = user;
        req.token = token;
        req.role = payload.role;
        req.company_id = payload.company_id
        next();
    } catch (error) {
        // console.log('[error]', error);
        res.status(401).send({ error: 'Not authorized to access this resource' });
    }
};

const authEndUser = async (req, res, next) => {
    try {
        var token = req.header('Authorization').replace('Bearer ', '')
        var payload = jwt.decode(token);
        var user = await EndUser.findOne(
            { '_id': payload._id });
        jwt.verify(token, "qwertyuioplkjhgfdsazxcvbnm");
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        // console.log('[error]', error);
        res.status(401).send({ error: 'Not authorized to access this resource' });
    }
};

const authAdmin = (permiss) => {
    return async (req, res, next) => {
        try {
            var token = req.header('Authorization').replace('Bearer ', '')
            var payload = jwt.decode(token);
            var user = await User.findOne(
                { '_id': payload._id });
            jwt.verify(token, "1234567890qwertyuiopasdfghjklzxcvbnm");
            req.user = user;
            req.token = token;
            if (permiss.includes(payload.role)) {
                next();
            } else {
                res.send(Response(401, "You do not have permisions", [], false));
            }
        } catch (error) {
            // console.log('[error]', error);
            res.status(401).send({ error: 'Not authorized to access this resource' });
        }

    }
}

module.exports = { auth, authAdmin, authEndUser };