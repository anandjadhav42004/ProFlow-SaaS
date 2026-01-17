const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    // Header se token nikalo
    const token = req.header('x-auth-token');

    // Check karo agar token nahi hai
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Token verify karo
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user; // User ID request mein daal do
        next(); // Agle step par bhejo
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};