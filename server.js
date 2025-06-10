const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Para servir o user_login.html

// Rota de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

  db.query(query, [username, password], (err, results) => {
    if (err) return res.status(500).send('Erro no servidor.');
    if (results.length > 0) {
      res.redirect('/main.html'); // Redireciona o usuário
    }  else {
      // Falha no login: redireciona de volta com erro
      res.send('<h2>Usuário ou senha incorretos.</h2><a href="/user_login.html">Voltar</a>');
    }
  });
});


app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
