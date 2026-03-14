const express = require('express');
const router = express.Router();

let filmes = [
  {id: 1, titulo: 'O Poderoso Chefão', ano: 1972, diretor: 'Coppola'},
  {id: 2, titulo: 'Clube da Luta', ano: 1999, diretor: 'Fincher'}
];

// GET todos
router.get('/', (req, res) => res.json(filmes));

// GET por ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const filme = filmes.find(f => f.id === id);
  if (!filme) return res.status(404).json({erro: 'Não encontrado'});
  res.json(filme);
});

// POST novo
router.post('/', (req, res) => {
  const {titulo, ano, diretor} = req.body;
  if (!titulo || !ano || !diretor) {
    return res.status(400).json({erro: 'Faltam dados'});
  }
  const novo = {id: filmes.length + 1, titulo, ano: parseInt(ano), diretor};
  filmes.push(novo);
  res.status(201).json(novo);
});

module.exports = router;