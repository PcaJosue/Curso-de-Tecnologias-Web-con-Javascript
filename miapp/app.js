//Localhost:5050/TecnologiasWeb?
//nombre=josue&cedula=17267991608

var express = require('express');
var app = express();
var usuarios =[{
    id:1,
    nombre:'pepe',
    cedula:'123465987'
    
},{
    id:2,
    nombre:'juan',
    cedula:'65498765987'
    
},{
    id:3,
    nombre:'carlos',
    cedula:'65798465987'
    
}];
app.get('/TecnologiasWeb', function (req, res) {
  
    res.send('Hola Mundo');
});
app.get('/Usuario', function (req, res) {

    res.json(usuarios);
    
})

app.get('/Usuario/:idUsuario', function (req, res) {
    
    var idActual = req.params.idUsuario;
    for(var i=0;i<usuarios.length;i++){
        if(idActual == usuarios[i].id){
            res.json(usuarios[i]);
        }
    }
    res.send('No existe el Usuario');
    
})
app.post('/TecnologiasWeb', function (req, res) {
  
    //request=> req
  //response => res
    var parametros = req.params;
    
    var usuario={
        nombre:'Josue',
        cedula:'00000000'
    };
    usuario.apellido='Pacheco';
    usuario.mascota=[];
    usuario.casado=false;
    
//    console.log('Lo que tengo en el requeste es: ');
//    console.log(req.headers);
//    console.log('Lo que tengo en el response es: ');
   res.append('token','1234');
    
    //res.send('Hola mundo Con Post');
    res.json(usuario);
    
});

app.put('/TecnologiasWeb', function (req, res) {
  res.send('Hola mundo con put');
});
app.listen(5050, function () {
  console.log('hola mundo');
});

