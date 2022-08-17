const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let cors = require("cors");
    app.use(cors());

const newPokemonRouter = require('./routes/newPokemon');
const authRouter = require('./routes/auth');
const usuarioRouter = require('./routes/usuarios')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', newPokemonRouter);
app.use('/auth', authRouter);
app.use('/usuario', usuarioRouter);



app.get('/', (req, resp)=>{
    resp.send("Server funcionando")
})


app.listen(4000, () => {
    console.log("Servidor levantado")
})
