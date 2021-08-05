require('dotenv').config();
const { json } = require('express');
const cors = require('cors');

const app = require('./app');
const routes = require('./routes');

app.use(json());
app.use(cors({
  origin: 'http://localhost:5500',
}));
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
