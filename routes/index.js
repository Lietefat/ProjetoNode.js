const express = require('express');

const router = express.Router();

router.get('/',(req, res) => {
    let obj ={
        'nome':req.query.nome,
    };
    res.render('home', obj);
});
router.get("/rota2", (req, res) => {
    let obj ={
        mostrar: true,
         grade: ['SEGUNDA-FEIRA- 7:40-11:20 Gestão Ágil de Projetos de Software', 'TERÇA-FEIRA 7:40-11:20 Banco de Dados - Não relacional','QUARTA-FEIRA 11:20-13:00 Interação Humano Computador', 'SEXTA-FEIRA 7:40-11:20 Técnica de Programação II','QUARTA-FEIRA 7:40-11:20 Desenvolvimento Web III', 
'QUINTA-FEIRA 7:40-11:20 Álgebra Linear' ]
};
 res.render('home1', obj)});

    

router.get('/rota3',(req,res)=>{
    let obj = { 
    disciplinas: [ {
     Sigla: "AGO021",
     Disciplina: "Gestão Ágil de Projetos de Software",
     Periodo: 20231,
     MediaFinal: "--",
     Frequencia: "--",
     observacao: "Em Curso"
    },
    {
     Sigla: "ESM100",
     Disciplina: "Estágio Supervisionado em Desenvolvimento de Software Multiplataforma",
     Periodo: 20231,
     MediaFinal: "--",
     Frequencia: "--",
     observacao: "Em Curso"
    },
    {
     Sigla: "IAL010",
     Disciplina: "Algoritmo e Lógica de Programação",
     Periodo: 20221,
     MediaFinal: "6.9",
     Frequencia: "100.00%",
     observacao: "Aprovado por Nota e Frequência"
    },
    {
     Sigla: "IBD014",
     Disciplina: "Modelagem de Banco de Dados",
     Periodo: 20221,
     MediaFinal: "6.8",
     Frequencia: "95.00%",
     observacao: "Aprovado por Nota e Frequência"
    },
    {
     Sigla: "IBD015",
     Disciplina: "Banco de Dados – Relacional",
     Periodo: 20222,
     MediaFinal: "7.7",
     Frequencia: "100.00%",
     observacao: "Aprovado por Nota e Frequência"
    },
    {
     Sigla: "IBD016",
     Disciplina: "Banco de Dados - Não relacional",
     Periodo: 20231,
     MediaFinal: "--",
     Frequencia: "--",
     observacao: "Em Curso"
    },
    {
     Sigla: "IED005",
     Disciplina: "Estrutura de Dados",
     Periodo: 20231,
     MediaFinal: "--",
     Frequencia: "--",
     observacao: "Em Curso"
    },
    {
     Sigla: "IES011",
     Disciplina: "Engenharia de Software I",
     Periodo: 20221,
     MediaFinal: "7.7",
     Frequencia: "100.00%",
     observacao: "Aprovado por Nota e Frequência"
    },
    {
     Sigla: "IES012",
     Disciplina: "Engenharia de Software II",
     Periodo: 20222,
     MediaFinal: "8.0",
     Frequencia: "100.00%",
     observacao: "Aprovado por Nota e Frequência"
    },
    {
     Sigla: "IHC004",
     Disciplina: "Interação Humano Computador",
     Periodo: 20231,
     MediaFinal: "--",
     Frequencia: "--",
     observacao: "Em Curso"
    },
    {
     Sigla: "ILP036",
     Disciplina: "Técnica de Programação I",
     Periodo: 20222,
     MediaFinal: "8.1",
     Frequencia: "100.00%",
     observacao: "Aprovado por Nota e Frequência"
    },
    {
     Sigla: "ILP037",
     Disciplina: "Técnica de Programação II",
     Periodo: 20231,
     MediaFinal: "--",
     Frequencia: "--",
     observacao: "Em Curso"
    },
    {
     Sigla: "ING085",
     Disciplina: "Inglês I",
     Periodo: 20231,
     MediaFinal: "--",
     Frequencia: "--",
     observacao: "Em Curso"
    },
    {
     Sigla: "ISO011",
     Disciplina: "Sistemas Operacionais e Redes de Computadores",
     Periodo: 20221,
     MediaFinal: "7.2",
     Frequencia: "100.00%",
     observacao: "Aprovado por Nota e Frequência"
    },
    {
     Sigla: "ISW028",
     Disciplina: "Desenvolvimento Web I",
     Periodo: 20221,
     MediaFinal: "8.8",
     Frequencia: "95.00%",
     observacao: "Aprovado por Nota e Frequência"
    },
    {
     Sigla: "ISW029",
     Disciplina: "Desenvolvimento Web II",
     Periodo: 20231,
     MediaFinal: "--",
     Frequencia: "--",
     observacao: "Em Curso"
    },
    {
     Sigla: "ISW030",
     Disciplina: "Desenvolvimento Web III",
     Periodo: 20231,
     MediaFinal: "--",
     Frequencia: "--",
     observacao: "Em Curso"
    },
    {
     Sigla: "ISW031",
     Disciplina: "Design Digital",
     Periodo: 20221,
     MediaFinal: "9.0",
     Frequencia: "95.00%",
     observacao: "Aprovado por Nota e Frequência"
    },
    {
     Sigla: "MAT019",
     Disciplina: "Matemática para Computação",
     Periodo: 20222,
     MediaFinal: "8.2",
     Frequencia: "100.00%",
     observacao: "Aprovado por Nota e Frequência"
    }
   
   ]};    

   res.render('home2',obj)
})
module.exports = router;