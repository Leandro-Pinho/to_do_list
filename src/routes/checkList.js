const express = require("express");

const router = express.Router();

const Checklist = require("../models/checklist");

// trazer todas as tarefas
router.get("/", (req, res) => {
  console.log("Ola");
  res.send();
});

// adicionar tarefa
router.post("/", async (req, res) => {
  let { name } = req.body;

  try {
    let checklist = await Checklist.create({ name });
    res.status(200).json(checklist);
  } catch (error) {
    res.status(422).json(error);
  }
});

// trazer uma tarefa especifica pelo id
router.get("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`ID: ${req.params.id}`);
});

// atualizar a tarefa
router.put("/:id", (req, res) => {
  console.log(req.body);
  res.send(`PUT ID: ${req.params.id}`);
});

// deletar a tarefa
router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`ID: ${req.params.id}`);
});

module.exports = router;
