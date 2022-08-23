const express = require('express');
const userQueries = require('../controllers/habiliades');
const router = express.Router();


router.post('/createhabilidades', async(req, resp) => {
    const body = req.body;
    const newPokemon = await userQueries.createItem(body);
    resp.json(newPokemon);
});

router.get('/getallhabilidades', async (req, resp) => {
    const pokemons = await userQueries.getAllItems();
    resp.json(pokemons)
    .catch((er) => {
        resp.json (er)
    })
});

router.get('/habilidades/:id', async (req, resp) => {
    const id = req.params.id;
    const onePokemon = await userQueries.getItemById(id)
    .then(
    resp.json(onePokemon))
    .catch((er) => {
        resp.json (er)
    })
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