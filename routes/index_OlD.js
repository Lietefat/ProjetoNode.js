const express = require('express');
//Rotas (quando o servidor for acessado, pra onde ele vai?)
const router = express.Router();

router.get('/posts/:id',(req, res) => {//numero aleatório
    let slug = req.params.id;
    res.send('SLUG do post : '+ slug);
});

router.get('/rota1',(req, res) => {//Primeiro rota // função anônima // dois parametros   
    res.send("Pagina sobre rota1...");
});

router.get('/rota2',(req, res) => {//Primeiro rota // função anônima // dois parametros 
    res.json(req.query);
    });

module.exports = router;
