const jwt = require('jsonwebtoken');
const { SIGNATURE } = require("./validate-jwt")

const validateRole = (req, resp, next) => {
  const token = req.header('auth-token')
  const user = jwt.verify(token, SIGNATURE)
  if (user.role === 1) {
    next()
  }

  resp.json({
    error: 'El usuario no tiene permisos'
  })
}

module.exports = validateRole;