// import jwt from 'jsonwebtoken';
const jwt = require('jsonwebtoken');

exports.generate= (id,role,username) => {
    return jwt.sign({ id,role,username }, process.env.SECRET_KEY, {
        expiresIn: '1h'
    });
}



// export default generateToken;