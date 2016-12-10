# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `NPM` 
### Fecha de entrega : `2016-12-08`
### Estudiante : `Alexander Josué Pacheco Correa`
### Profesor : `Tania Calle - Adrian Eguez`


<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `NPM`

<a name="objetivos"></a>
## Objetivos
- entender el concepto de npm
- crear paquetes npm
- utilizar paquetes npm

<a name="marco-teorico"></a>
## Marco Teorico

** NPM ** 

- NPM es el gestor de paquetes para JavaScript. Buscar, compartir y reutilizar los paquetes de código de cientos de miles de desarrolladores - y ensamblarlos en nuevas y poderosas formas.

- node esta basado en el motor v8 de google chrome.
- node es un compilador de javascript, se puede hacer cualquier aplicacion como lectura de archivos, mandar correos xq en node se encargar de implementar los protocolos.
- node tiene un gestionador de paquetes llamado npm, 
- nodejs leer archivos
- nodejs mysql
- nodejs express sirve para servir archivos http y escuchar las peticiones.
- node nodemailer para mandar correos con nodejs.

- ara correr un archivo javascript con node es node y el nombre.
- npm init : se le va a dar un nombre al paquete llamado tecnologias web que sirve como firma y para describir y poder subir al repositorio de npm y donde se especifica el main en el caso nuestro el app.js

luego de esto se necesita publicar el paquete al npm 
<a name="desarrollo"></a>
## Desarrollo del informe

<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/04-nodejs-01/Informe/clases/node.JPG?raw=true" alt="">
existe la consola de comandos de node , la cual trabaja con javascript por lo que se puede probar código del mismo.


<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/04-nodejs-01/Informe/clases/varnode.JPG?raw=true" alt="">
en este caso se ha declarado una variable e impreso en consola.

<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/04-nodejs-01/Informe/clases/navegadorvariable.JPG?raw=true" alt="">
se observa que en la consola de node y en el navegador se ejecuta lo mismo por lo que ambos ejecutan y trabajan con javascript. por lo que se puede entender que los paquetes que se creearan serán ejecutados con lenguaje javascript.

<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/04-nodejs-01/Informe/clases/versiondenode.JPG?raw=true" alt="">
este comando es utilizado para ver la versión de node, y que los paquetes que se utilizan sean compatibles.

<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/04-nodejs-01/Informe/clases/app.PNG?raw=true" alt="">
se escribió el código de una calculadora sumamente simple que suma dos números ya establecidos y muestra en pantalla el resultado, module.exports sirve para que nuestro paquete pueda ser usado por otros usuarios.

<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/04-nodejs-01/Informe/clases/crearpaqueteennode.JPG?raw=true" alt="">
> node adduser
Para comenzar a compartir un paquete debemos crear un usuario con el comando donde podemos ingresar nombre , clave , etc.

<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/04-nodejs-01/Informe/clases/loggearseennpm.JPG?raw=true" alt="">
nos loggeamos en npm mediante la consola con el comando
> npm login

e ingresamos las creedenciales que creamos.

<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/04-nodejs-01/Informe/clases/publicarelpaquete.JPG?raw=true" alt="">

una vez loggeados y dentro de la carpaeta que contiene nuestro paquete podemos publicarlo.


<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/04-nodejs-01/Informe/clases/instalarelpaquetesubido.JPG?raw=true" alt="">

para instalar un paquete nuestro o uno de npm digitamos el comando:
> npm install [nombreDelPaquete]


<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/04-nodejs-01/Informe/clases/modificarVersion.JPG?raw=true" alt="">
<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/04-nodejs-01/Informe/clases/updatev1.0.1.JPG?raw=true" alt="">

al momento de modificar un paquete debemos modificar la version y esto lo podemos hacer en el paquete.json que se carga al crear el paquete.

<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/04-nodejs-01/Informe/clases/desinstalarpaquetes.JPG?raw=true" alt="">
 para desinstalar un paquete usamos:
> npm uninstall [nombre del paquete]



<a name="conrec"></a>
## Conclusiones y Recomendaciones




<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Josué Pacheco](https://github.com/PcaJosue)
