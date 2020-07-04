const jwt = require('jsonwebtoken');
const config = require('../config');
const secret = config.jwt.secret;
const error = require('../utils/error');

function sign(data){
    return jwt.sign(data, secret);
}

function verify(token){
    return jwt.verify(token, secret);
}

const check = {
    own : function(req, owner){
        const decoded = decodeHeader(req);
        console.log(decoded);
        //comprobar si es propio
        if(decoded.id === owner){
            throw error('No puedes hacer esto', 401);
           //throw new Error('No puedes hacer esto');
        }
    }
}

function getToken(auth){
    if(!auth){
        throw error('No viene el token', 401);
        //throw new Error('No viene el token');
    }
    if(auth.indexOf('Bearer ') === -1){
        throw error('Formato invalido', 401);
        //throw new Error('Formato invalido');
    }
    let token = auth.replace('Bearer ', '');

    return token;

}

function decodeHeader(req){
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;

    return decoded;
}

module.exports = {
    sign,
    check,
}