const jwt = require('jsonwebtoken');
const tokenBlacklistModel = require('../models/blocklist.model')

async function authUser(req, res, next) {
    
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
          message: "Token is expired!",
        });
    }

    const isTokenBlacklisted = await tokenBlacklistModel.findOne({
        token
    })

    if (isTokenBlacklisted) {
        return res.status(401).json({
            message: "Token is expred!"
        })
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();

    } catch (error) {
        res.status(401).json({
          message: "Unauthorized",
        });
    }
}

module.exports = {authUser}