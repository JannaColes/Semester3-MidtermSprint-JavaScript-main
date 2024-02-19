const express = require('express');
const token = require('../tokens');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/generate-token', (req, res) => {
  const { username } = req.body;
  const token = tokens.generateToken(username);
  res.json({ token });
});

app.listen(port, () => {
  console.log(`Web server running at http://localhost:${port}`);
});