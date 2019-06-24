const express = require('express');
const app = express();
const path = require('path');

app.get('/api/hello', (req, res) => {
  res.send('hello!');
});

// if we are in production, serve the static build and index.html along with
// the api routes all defiend above
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

app.listen(3000);

