const express = require('express');
// const { send } = require('express/lib/response');
const fs = require('fs');
const app = express();
const port = 3000;
const path =require('path');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/hello/:name', (req, res) => {
  res.send(req.params.name + " Welcome to Home Page. I am Ranjeet Kumar. How may I help you? Give me some idea to convert this code into a long-lasting code.");
});

app.use((req, res) => {
 res.sendFile(path.join(__dirname,'PagenotFound.html'))

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
