const axios = require('axios');
const express = require('express')
const app = express()
const port = 3002

app.get('/sunData', async (req, res) => {
  const url = `https://api.sunrise-sunset.org/json?lat=36.72&lng=-4.42&formatted=0`;

  try {
    const response = await axios.get(url);

    const { sunrise, sunset } = response.data.results;

    res.json({
      sunrise,
      sunset
    });
  } catch (error) {
    console.error('❌ Error fetching sun data:', error.message);
    res.status(500).json({ error: 'Failed to fetch sun data' });
  }
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})  