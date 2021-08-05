const express = require('express');
const { json } = require('express');
const cors = require('cors');
const app = express();

app.use(json());
app.use(cors({
  origin: 'http://localhost:5500'
}));

app.get('/', (_, res) => {
  return res.json({ hello: 'world' });
});

app.post('/subscription', (req, res) => {
  const { body } = req;

  console.log(body);

  return res.json({ status: 'received!' });
});

app.listen(3000, () => {
  console.log('SERVER RUNNING!');
});
