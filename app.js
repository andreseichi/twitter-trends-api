const express = require('express');

const app = express();
const port = process.env.PORT || 3030;

app.get('/', (req, res) => {
  res.send('Welcome to my application 😘');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
