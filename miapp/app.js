var express = require('express');
var app = express();

app.get('/TecnologiasWeb', function (req, res) {
  res.send('Hola Mundo');
});

app.post('/TecnologiasWeb', function (req, res) {
  res.send('Hola mundo Con Post');
});
app.put('/TecnologiasWeb', function (req, res) {
  res.send('Hola mundo con put');
});
app.listen(5050, function () {
  console.log('hola mundo');
});

