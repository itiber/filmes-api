const express = require('express');
const routerFilmes = require('./filmes');

const app = express();
app.use(express.json());
app.use('/filmes', routerFilmes);

app.listen(3000, () => {
  console.log('🚀 http://localhost:3000/filmes');
});