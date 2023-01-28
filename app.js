const express = require("express");
const mustache =require('mustache-express');
const router = require('./routes/index');

//configurações básicas do aplicativos
const app = express();
app.use('/',router); //Foi passado 1 rota pois criamos apenas 1
    
app.use(express.json());//Confg o moto ,extensão utilizada

app.engine('mst',mustache(__dirname + '/views/partials', '.mst'));
app.set('view engine', 'mst'); //setar motor visual

//Pega o diretorio absoluto do projeto e aumenta para pasta views concatenando
app.set('views',__dirname + '/views');

module.exports = app; //exportamos o app,pois vamos importalo no server

