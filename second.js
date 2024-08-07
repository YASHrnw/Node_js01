const express = require('express');

const app = express();

// root route
app.get('/', (req, res) => {
  res.send("<h1>yash panchal</h1>");
});


app.get('/panchal', (req, res) => {
    res.send("<h1>yash@2212</h1>");
  });
  

app.listen(420);
