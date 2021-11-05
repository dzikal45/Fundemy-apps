// import jwt from 'jsonwebtoken';
const jwt = require('jsonwebtoken');

exports.generate= (id,role) => {
    return jwt.sign({ id,role }, process.env.SECRET_KEY, {
        expiresIn: '1h'
    });
}



// export default generateToken;