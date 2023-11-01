const users = require('./baseclientes.json');
const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/home', (req, res) => {
    res.json({ msg: 'Servidor de usuários' });
});

app.get('/todosusuarios', (req, res) => {
    const allUsers = Object.values(users);
    res.json(allUsers);
});

app.get('/usuarioporid/:i', (req, res) => {
    const i = req.params.i;
    if (users[i]) {
        res.json({ usuario: users[i] });
    } else {
        res.json({ msg: 'Usuário não encontrado' });
    }
});

app.get('/cadastrar', (req, res) => {
    const cpf = req.query.cpf;
    const nome = req.query.nome;
  
    if (!cpf || !nome) {
      res.status(400).json({ error: 'CPF e nome são obrigatórios' });
    } else {
      res.json({ msg: 'Usuário cadastrado com sucesso' });
    }
  });

app.listen(3000, () => {
    console.log('Servidor está iniciado na porta 3000');
});
