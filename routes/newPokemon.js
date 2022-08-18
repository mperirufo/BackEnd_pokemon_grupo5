const express = require('express');
const userQueries = require('../controllers/pokemons');
const router = express.Router();


router.post('/createpokemon', async(req, resp) => {
    const body = req.body;
    const newPokemon = await userQueries.createItem(body);
    resp.json(newPokemon);
});

router.get('/getallpokemons', async (req, resp) => {
    const pokemons = await userQueries.getAllItems();
    resp.json(pokemons);
});

router.get('/pokemon/:id', async (req, resp) => {
    const id = req.params.id;
    const onePokemon = await userQueries.getOnePokemon(id);
    resp.json(onePokemon)
})

router.delete('/:id', async (req, resp) => {
    const id = req.params.id;
    const deletedPokemon = await userQueries.deleteItem(id);
    resp.json(deletedPokemon);
});

router.put('/:id', async(req, resp) => {
    const id = req.params.id;
    const body = req.body;
    const updatedUser = await userQueries.updateItem(id, body)
    resp.json(updatedUser);
});

module.exports = router;