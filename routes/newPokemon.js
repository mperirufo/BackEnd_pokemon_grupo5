const express = require('express');
const userQueries = require('../controllers/pokemons');
const router = express.Router();


router.post('/', async(req, resp) => {
    const body = req.body;
    const newPokemon = await userQueries.createItem(body);
    resp.json(newPokemon);
});

router.get('/', async (req, resp) => {
    const pokemons = await userQueries.getAllItems();
    resp.json(pokemons);
});


module.exports = router;