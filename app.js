const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.sendFile('./views/home.html',{root:__dirname});
});

app.listen(port, () => {
  console.log(`Server lestening on http://localhost:${port}`);
});
