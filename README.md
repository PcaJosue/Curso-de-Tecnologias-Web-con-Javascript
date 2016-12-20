
## Comandos Importantes
### instalar salilsjs


´´´
>npm install -g sails
´´´

### crear un proyecto en Sailsjs

´´´
>Sails new [nombre proyecto]
´´´

### levantar servidor

´´´
> Sails lift
> node app.js

´´´
el sails les pide opcones si no estan definidas, las opciones son:
- 1: SAFE MODE no se va a alterar la base de datos
- 2: ALTER MODE se va alterar la base de datos si nosotros hicimos camibos en los modelos
- 3: DELETE MODE borra todos los datos de la base y vuelve a crear los modelos

## Servidor Web de sailsjs
el servidor web de sails se encuentra localizado en la carpeta
**assets**

Para generar controladores se utiliza el siguiente comando:
´´´
> sails generate controller

´´´
