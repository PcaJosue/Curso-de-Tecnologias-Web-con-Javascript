/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	home:function(req,res){
        //res.view(String: nombre vista, Datos Json)
        return res.view('vistas/home',{
            titulo:'Inicio',
            numero:1,
            mauricio:{
                nombre: 'Mauricio',
                cedula: 1718137159
            }
        })
    },
    crearUsuario: function(req,res){
        
        
    }
    
};

