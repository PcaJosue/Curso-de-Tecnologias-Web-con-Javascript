var express = require('express');
var app = express();

app.get('/TecnologiasWeb', function (req, res) {
  res.send('Hola Mundo');
});

app.listen(5050, function () {
  console.log('hola mundo');
});
