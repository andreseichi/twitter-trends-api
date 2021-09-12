require('dotenv').config();
const express = require('express');

const twitterApi = require('./api/twitter');

const app = express();
const port = process.env.PORT || 3030;

app.get('/', (req, res) => {
  res.send('Welcome to my application 😃');
});

// global trends
app.get('/trends', async (req, res) => {
  try {
    const { data } = await twitterApi.get('trends/place.json?id=1');
    return res.send(data);
  } catch (error) {
    res.send({ error: error.message });
  }
});

// trends woeid based
app.get('/trends/:id', async (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;

  try {
    const { data } = await api.get(`trends/place.json?id=${id}`);
    return res.send(data);
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
