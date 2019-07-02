const jwt = require('jsonwebtoken');

module.export = (req, res, next) => {
    // need to add token to client function that uses this to pass token
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        const error = new Error('Not Authenticated.');
        error.status = 401;
        throw error;
    }
    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'ultrAsup3rduperSecr3t');
    }
    catch (err) {
        err.status = 500;
        throw err;
    }
    if (!decodedToken) {
        const error = new Error('Not Authenticated.');
        error.status = 401;
        throw error;
    }
    else {
        req.userId = decodedToken.userId;
        next();
    }
};