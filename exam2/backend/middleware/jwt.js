const jwt = require('jsonwebtoken');

const authenticateJWT = async (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Token not found" });
        }

        const secretKey = "private-key"; 
        const decoded = await jwt.verify(token, secretKey);

        req.user = decoded;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ error: "Token has expired" });
        } else if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ error: "Invalid token signature" });
        } else {
            return res.status(500).json({ error: "Internal server error" });
        }
    }
};



const roleMiddleware = (Role) => (req, res, next) => {
    if (!req.user || !req.user.role) {
        return res.status(401).json({ error: 'Unauthorized. User role not found.' });
    }

    const isAllowed = Role(req.user.role);
    if (!isAllowed) {
        return res.status(403).json({ error: 'Access denied. Role validation failed.' });
    }

    next();
};

module.exports = { authenticateJWT, roleMiddleware };
