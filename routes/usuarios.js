const express = require('express');
const { verifyToken } = require('../middlewares/validate-jwt'); 
const validateRole = require('../middlewares/validate-role');

const router = express.Router();

router.use('/', verifyToken);
router.use('/', validateRole);

router.get('/usuario', (req, resp) => {
  resp.send('home usuario')
})

module.exports = router;