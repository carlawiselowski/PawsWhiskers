const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // ← ESSENCIAL para formulário HTML
app.use(bodyParser.json()); // ← necessário se usar fetch/json
app.use(express.static('public')); // ← onde estão seus HTML, CSS, imagens etc.



// Rota de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

  db.query(query, [username, password], (err, results) => {
    if (err) return res.status(500).send('Erro no servidor.');

    if (results.length > 0) {
      // Em vez de só enviar "sucesso", envia o nome do usuário como JSON
      res.json({ username: results[0].username });
    } else {
      res.status(401).send('Usuário ou senha incorretos.');
    }
  });
});


//rota de cadastro
app.post('/register', (req, res) => {
  const { name, username, email, address, password, confirm_password } = req.body;

  if (password !== confirm_password) {
    return res.send('As senhas não coincidem.');
  }

  const query = 'INSERT INTO users (name, username, email, address, password) VALUES (?, ?, ?, ?, ?)';

  db.query(query, [name, username, email, address, password], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.send('Usuário já existe.');
      }
      return res.status(500).send('Erro ao cadastrar usuário.');
    }

    res.redirect('/user_login.html');
  });
});


app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
