const express = require("express");

const router = express.Router();

// trazer todas as tarefas 
router.get("/", (req, res) => {
  console.log("Ola");
  res.send();
});

// adicionar tarefa
router.post('/', (req, res)=> {
    console.log(req.body)
    res.status(200).send(req.body)
})

// trazer uma tarefa especifica pelo id
router.get('/:id', (req, res)=> {
    console.log(req.params.id)
    res.send(`ID: ${req.params.id}`)
})

// atualizar a tarefa
router.put('/:id', (req, res)=> {
    console.log(req.body)
    res.send(`PUT ID: ${req.params.id}`)
})

// deletar a tarefa 
router.delete('/:id', (req, res)=> {
    console.log(req.params.id)
    res.send(`ID: ${req.params.id}`)
})

module.exports = router;
