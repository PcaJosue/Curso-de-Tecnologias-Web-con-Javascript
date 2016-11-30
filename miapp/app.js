//Localhost:5050/TecnologiasWeb?
//nombre=josue&cedula=17267991608

var express = require('express');
var app = express();

app.get('/TecnologiasWeb', function (req, res) {
  
    res.send('Hola Mundo');
});

app.post('/TecnologiasWeb', function (req, res) {
  
    //request=> req
  //response => res
    var usuario={
        nombre:'Adrian',
        cedula:'00000000'
    };
    console.log('Lo que tengo en el requeste es: ');
    console.log(req.headers);
    console.log('Lo que tengo en el response es: ');
    console.log(res.headers);
    //res.send('Hola mundo Con Post');
    res.json(usuario);
    
});

app.put('/TecnologiasWeb', function (req, res) {
  res.send('Hola mundo con put');
});
app.listen(5050, function () {
  console.log('hola mundo');
});

