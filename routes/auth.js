const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SIGNATURE } = require('../middlewares/validate-jwt');



const userController = require('../controllers/usuarios');

const router = express.Router();

router.post('/register', async(req, resp) => {
  const salt = await bcrypt.genSalt(10);
  const contrasena = await bcrypt.hash(req.body.contrasena, salt);
  const newUser = {
    ...req.body,
    contrasena
  };
  const response = await userController.createUser(newUser);
  resp.json({
    success: true,
    response
  })
})

router.post('/login', async(req, resp) => {
    const usuario = await userController.findUser(req.body.nombre);
  
    if (!usuario) {
      resp.json({
        error: "Usuario no creado"
      })
    }
  
    const validPass = await bcrypt.compare(req.body.contrasena, usuario.contrasena);
  
    if(!validPass) {
      return resp.json({
        error: "Contraseña incorrecta"
      })
    }
  
    const token = jwt.sign({
      name: usuario.nombre,
      id: usuario.id,
    }, SIGNATURE)
  
    resp.json({
      data: 'Login exitoso',
      token
    })
  })

module.exports = router;