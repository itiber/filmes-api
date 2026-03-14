const express = require('express');
const app = express();

app.use(express.json());

let filmes = [
  {id:1,nome:"Interestelar",ano:2014,genero:"Ficção Científica",duracao:169},
  {id:2,nome:"Clube da Luta",ano:1999,genero:"Drama",duracao:139}
];
let proximoId = 3;

app.get('/filmes', (req, res) => res.json(filmes));
app.get('/filmes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const filme = filmes.find(f => f.id === id);
  filme ? res.json(filme) : res.status(404).json({erro:'Filme não encontrado'});
});
app.post('/filmes', (req, res) => {
  const {nome,ano,genero,duracao} = req.body;
  if(!nome || !ano || !genero || !duracao) {
    return res.status(400).json({erro:'Todos os campos obrigatórios'});
  }
  const novoFilme = {id:proximoId++,nome,ano:parseInt(ano),genero,duracao:parseInt(duracao)};
  filmes.push(novoFilme);
  res.status(201).json(novoFilme);
});

app.listen(3000, () => console.log('🚀 http://localhost:3000'));