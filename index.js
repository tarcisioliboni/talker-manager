const express = require('express');
const bodyParser = require('body-parser');
const { readFileSync } = require('fs');
const { readFile } = require('fs').promises;
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker', (_req, res) => {
  const talker = JSON.parse(readFileSync('./talker.json', 'utf8'));
  return res.status(200).send(talker);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = JSON.parse(await readFile('./talker.json', 'utf8'));
  const talker = talkers.find((person) => person.id === Number(id));
  if (!talker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  res.status(200).json(talker);
});

app.post('/login', (_req, res) => {
  const token = randomBytes(8).toString('hex');
  res.status(200).json({ token });
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
