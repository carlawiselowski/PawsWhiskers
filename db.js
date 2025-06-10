const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2104',
  database: 'paws_whiskers'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao MySQL!');
});

module.exports = connection;
