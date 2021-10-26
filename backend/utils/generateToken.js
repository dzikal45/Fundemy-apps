// import jwt from 'jsonwebtoken';
const jwt = require('jsonwebtoken');

exports.generate= (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY, {
        expiresIn: '1h'
    });
}



// export default generateToken;