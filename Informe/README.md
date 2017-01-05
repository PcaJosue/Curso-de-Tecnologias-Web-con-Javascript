# Introducción A SailsJS

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Introducción a SailsJS` 
### Fecha de entrega : `2017-01-05`
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
El tema de la práctica es: `Introducción a SailsJs`

<a name="objetivos"></a>
## Objetivos

- Adquirir conocimientos en el desarrollo web con javascript
- utilizar SailsJs para el desarrollo web
- aplicar la arquitectura modelo-vista-controlador

<a name="marco-teorico"></a>
## Marco Teorico
<a name="css"></a>

<a href="sails"></a>
<h5>Sails Js </h5>
Sails.js facilita el desarrollo de aplicaciones Node.js empresariales. Ha sido diseñado para imitar el patrón MVC de frameworks como Ruby on Rails, pero con soporte para los requisitos de aplicaciones modernas: data-driven APIs con una arquitectura escalable y service-oriented. Es especialmente bueno para el desarrollo de chats, cuadros de mando en tiempo real o juegos multijugadores.
Una de las cosas que nos permite Sails.js, entre muchas otras, es el desarrollo de forma sencilla y rápida de un API REST.

<a href="assets"></a>
<h5>Assets</h5>
Los Assets se refieren a los archivos estáticos (JS, CSS, imágenes, etc) en su servidor que se desea que sean accesibles al mundo exterior. En Sails, estos archivos se colocan en la assets/carpeta. Al levantar su aplicación, añadir archivos a la assets/carpeta, o cambiar los activos existentes, los procesos de pipeline de activos incorporados "y sincroniza los archivos en una carpeta oculta ( .tmp/public/).

Este paso intermedio (mover archivos de assets/dentro .tmp/public/) permite comprobar la validez de las velas de procesos activos para su uso en el cliente - cosas como, CoffeeScript, Sass, spritesheets, plantillas MENOS Jade, etc.
El contenido de esta .tmp/publiccarpeta son los que en realidad sirve Sails en tiempo de ejecución. Esto es aproximadamente equivalente a la carpeta "público" en el expreso , o la www/carpeta que podría estar familiarizado con los de otros servidores web como Apache.

<a href="Views"></a>
<h5> Views</h5>
En Sails, las vistas son las plantillas de marcado que se compilan en el servidor en páginas HTML. En la mayoría de los casos, se utilizan puntos de vista como la respuesta a una petición HTTP entrante, por ejemplo, para servir a su página de inicio.

Alternativamente, una vista puede ser compilado directamente en una cadena HTML para su uso en el código de fondo (ver sails.renderView()). Por ejemplo, es posible utilizar este método para enviar mensajes de correo electrónico HTML, o para construir grandes cadenas XML para su uso con un API anterior.

<a href="Pipeline"></a>
<h5>Pipeline</h5>
El pipeline.jsarchivo en su aplicación Sails determina el orden en que sus hojas de estilo, JavaScript y archivos de plantilla del lado del cliente deben ser compilados y vinculados como etiquetas.

<a href="Controllers"></a>
<h5>Controllers</h5>
Controladores (la C en MVC ) son los principales objetos de la aplicación Sails que son responsables de responder a las peticiones de un navegador web, aplicaciones móviles o cualquier otro sistema capaz de comunicarse con un servidor. A menudo actúan como un intermediario entre sus modelos y puntos de vista . Para muchas aplicaciones, los controladores contienen la mayor parte de su proyecto de la lógica de negocio .

<a name="desarrollo"></a>
## Desarrollo del informe
* Para la Instalación de SailsJs se abre la consola y se digita lo siguiente:

<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/10-sails-01/Informe/instalarSails.JPG?raw=true" alt="">

* Ingresamos al directorio donde se requiere crear el proyecto y se digita
```sails new [nombreProyecto]  ```

<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/10-sails-01/Informe/CrearProyecto.JPG?raw=true" alt="">

* Como siguiente paso se levanta el servicio con:
```sails lift  ```
<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/10-sails-01/Informe/levantarServicio.JPG?raw=true" alt="">

* en el navegador en localhost en el puerto 1337 se observa la página de inicio que Sails nos proporciona

<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/10-sails-01/Informe/paginaPrincipal.JPG?raw=true" alt="">

* dentro de la carpeta assets se puede crear un directorio de trabajo en este caso será ** app ** 

<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/10-sails-01/Informe/crearCarpetas.JPG?raw=true" alt="">

* en los archivos descritos anteriormente se tiene el siguiente código:

 1. index.html
    ```
<!DOCTYPE html>
<html lang="en">
<head>
<title>Document</title>
<link rel="stylesheet" href="estilos.css">
</head>
<body>
<h1>Hola Mundo</h1>
<script src="app.js"></script>
</body>
</html> ```
   
 2. app.js
 ```alert("No es bueno usar alertas"); ```
 
 3. estilos.css
 ``` body{
    background-color:darkseagreen;
    color:aliceblue;
}```

* se puede crear más carpetas en el directorio de trabajo por ejemplo una carpeta de imagenes

<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/10-sails-01/Informe/imagenDentroDeLacarpeta.JPG?raw=true" alt="">

* dentro de pipeline.js se encuentra la carpeta **tasks** y aquí es donde se inyectan los archivos css que se desee.

<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/10-sails-01/Informe/estilos.JPG?raw=true" alt="">

* para meter archivos css se debe insertar en la carpeta styles de assets

<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/10-sails-01/Informe/estilosenAssets.JPG?raw=true" alt="">

<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/10-sails-01/Informe/estilosInsertados.JPG?raw=true" alt="">

* para las vistas se encuentra en **views**

<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/10-sails-01/Informe/vistasPath.JPG?raw=true" alt="">

* el archivo homepage.js muestra la página inicial en este caso se colocará el siguiente código:
<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/10-sails-01/Informe/homepage.JPG?raw=true" alt="">

* ahora el homepage se ve asi:
<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/10-sails-01/Informe/homepageEditado.JPG?raw=true" alt="">

<a name="conrec"></a>
## Conclusiones y Recomendaciones

https://github.com/santy-101/Tec_Web/tree/10-Sails-01/Informe
<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Josué Pacheco](https://github.com/PcaJosue)
