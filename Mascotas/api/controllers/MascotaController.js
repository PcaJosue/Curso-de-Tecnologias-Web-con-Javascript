/**
 * MascotaController
 *
 * @description :: Server-side logic for managing Mascotas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  crearMascota: function (req, res) {
    var parametros = req.allParams();

    if (req.method == 'POST') {
      if (parametros.nombre && parametros.paisNacimiento && parametros.idRaza) {
        Mascota.create({
          nombre: parametros.nombre,
          fechaNacimiento: parametros.fechaNacimiento,
          paisNacimiento: parametros.paisNacimiento,
          idRaza: parametros.idRaza,
        }).exec(function (error, mascotaCreado) {
          if (error) return res.view('error', {
            title: 'Error',
            error: {
              descripcion: 'Hubo Problemas creando la mascota, intentalo de nuevo: ' + error,
              url: '/crearMascota'
            }
          });

          Mascota.find().exec(function (error, mascotasEncontrados) {
            if (error) return res.serverError()
            sails.log.info(mascotasEncontrados);
            return res.view('vistas/Mascota/listarMascotas', {
              title: 'Lista de Mascotas',
              mascotas: mascotasEncontrados
            })
          });

        });
      } else {
        // bad Request
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envia todos los parametros',
            url: '/crearMascota'
          }
        });
      }
    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          url: '/crearMascota'
        }
      });
    }

  },
  
    destroy:function(req,res,next){
    Mascota.destroy(req.param('id'),function MascotaDestroyed(err){
        if(err){
            console.log(err);
            return next(err);}
        res.redirect('/Mascota/listarMascotas');
    });
    
    
},ListarMascotas: function (req, res) {

        Mascota.find().exec(function (error, mascotasEncontrados) {
            if (error) return res.serverError()
            return res.view('vistas/Mascota/listarMascotas', {
                title: 'Lista de Mascotas',
                mascotas: mascotasEncontrados
            })
        });
    }
};
