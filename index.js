const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let cors = require("cors");
      app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



app.get('/', (req, resp)=>{
    resp.send("Server funcionando")
})



app.listen((process.env.PORT || 4002)
, ()=>{
    console.log("Server on")
})
