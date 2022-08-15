const jwt = require('jsonwebtoken');

const SIGNATURE = 'TokenParaPokemon'

const verifyToken = (req, res, next) => {
  const token = req.header('auth-token')
  if (!token) {
    return res.status(401).json({
      error: "Acceso denegado"
    })
  }

  try {
    const verified = jwt.verify(token, SIGNATURE)
    req.usuario = verified;
    next();
  } catch (error) {
    res.status(400).json({
      error: "Token no valida"
    })
  }
}

module.exports = {
  SIGNATURE,
  verifyToken
}