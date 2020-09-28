require('dotenv').config();
const express = require('express');
const app = express();
const { DEFAULT_PORT, ENDPOINTS } = require('./constants');

app.use(express.json());
app.use(ENDPOINTS.API, require('./app/api'));
app.use(ENDPOINTS.AUTH, require('./app/auth'));

app.get(ENDPOINTS.ROOT, (req, res) => {
  res.json({ message: `GET ${req.path}` });
});

const port = process.env.PORT || DEFAULT_PORT;
app.listen(port, () => console.log(`\nListening on port ${port}...`));
