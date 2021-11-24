const express = require('express');
const app = express();
const PORT = 3001;

const { getSolutions } = require('./db-connection');

app.get('/solutions', async (req, res) => {
  try {
    const solutionData = await getSolutions();
    res.status(200).send({ solutions: solutionData });
  } catch (err) {
    res.status(400).json(err);
  }

});

app.listen(PORT, () => { console.log(`app listening at Port ${PORT}`)});