# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Introducción a la Web` 
### Fecha de entrega : `2016-10-28`
### Estudiante : `Alexander Josué Pacheco Correa`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : 1

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
<!--
  * <a href="#hist">Historia y Facts</a>
  * <a href="#defhtml">Definicion HTML</a>
-->
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Introduccion a la Web`

<a name="objetivos"></a>
## Objetivos

- Desarrollar el conocimiento Web
- Conocer herramientas de desarrolladores web como: postman, inspetor web
- Aprender el uso de lenguaje HTML CSS

<a name="marco-teorico"></a>
## Marco Teorico
<a name="www"></a>
### World Wide Web
La World Wide Web ("telaraña de alcance mundial") o
simplemente la Web, tuvo sus orígenes en 1989 en el CERN (Centro
Europeo para la Investigación Nuclear) ubicado en Ginebra (Suiza),
en circunstancias en que el investigador británico Tim Berners-Lee
se dedicaba a encontrar una solución efectiva al problema de la
proliferación y la heterogeneidad de la información disponible en la
Red
<br>
 "La WWW es una forma de ver toda
la información disponible en Internet como un continuo, sin rupturas.
Utilizando saltos hipertextuales y búsquedas, el usuario navega a
través de un mundo de información parcialmente creado a mano,
parcialmente generado por computadoras de las bases de datos
existentes y de los sistemas de información". 
<a href="http://www.educoas.org/portal/bdigital/contenido/valzacchi/ValzacchiCapitulo-2New.pdf"> tomado de educoas.org</a>
<a name="browser"></a>
###  Browsers
En una arquitectura de tipo cliente-servidor, el usuario interactúa y
obtiene información desde su computadora a través de una aplicación
cliente. En la Web estas aplicaciones se conocen bajo el nombre
genérico de "browsers" (también llamadas en nuestro idioma
"visores", "visualizadores", "navegadores" o "exploradores"), y
cumplen dos funciones básicas:
* transmitir a los servidores remotos las órdenes que le
imparte el usuario, y
* presentar la información en forma asequible a quien la
solicite. 
<br>  <a href="http://www.educoas.org/portal/bdigital/contenido/valzacchi/ValzacchiCapitulo-2New.pdf"> tomado de educoas.org</a>
<a name="metodoshttp"></a>  

### HTTP Y sus Métodos
Este protocolo se denominó HTTP (HyperText Transfer Protocol, o
Protocolo de Transferencia de Hipertexto), y cada vez que se activa
cumple con un proceso de cuatro etapas entre el browser y el servidor
que consiste en lo siguiente:
* **Conexión:** el browser busca el nombre de dominio o el número
IP de la dirección indicada intentando hacer contacto con esa
computadora.
* **Solicitud:** el browser envía una petición al servidor (generalmente
un documento), incluyendo información sobre el método a
utilizar, la versión del protocolo y algunas otras especificaciones.
* **Respuesta:** el servidor envía un mensaje de respuesta acerca de
su petición mediante códigos de estado de tres dígitos.
* **Desconexión:** se puede iniciar por parte del usuario o por parte
del servidor una vez transferido un archivo.
<br>  <a href="http://www.educoas.org/portal/bdigital/contenido/valzacchi/ValzacchiCapitulo-2New.pdf"> tomado de educoas.org</a>
#### Métodos Http 

Dos métodos comúnmente utilizados para una petición-respuesta entre un cliente y el servidor son: GET y POST.

* **GET**  Pide a los datos de un recurso especificado
    *  el método get cuenta con una cadena de consultas de nombre y valor que se especifica en el URL de la petición.
    *  Peticiones GET pueden almacenar en caché
    *  Las peticiones GET permanecen en el historial del navegador
    *  Peticiones GET se pueden marcar
    *   Peticiones GET nunca deben ser utilizados cuando se trata de datos sensibles
    *   Peticiones GET tienen restricciones de longitud
    *   Peticiones GET sólo se deben usar para recuperar datos 
* **POST** provee datos para ser procesador en un recurso especifico.
    *   el método post cuenta con la misma cadena de consultas de nombre y valor pero se especifica en el body del mensaje http.
    *   solicitudes POST no se almacenan en caché
    *   solicitudes POST no permanecen en el historial del navegador
    *   solicitudes POST no se pueden marcar
    *   solicitudes POST no tienen restricciones en la longitud de datos
* **Otros métodos HTTP Request**
    *   HEAD
    *   PUT
    *   DELETE
    *   OPTIONS
    *   CONNECT

<br> <a href="http://www.w3schools.com/TAGS/ref_httpmethods.asp"> tomado de W3school</a>  
### Herramienta inspeccionar

Chrome Inspector es una herramienta complementaria de desarrollo web que se usa específicamente para solucionar problemas de código de páginas web en el navegador Chrome.

Para abrir Chrome Inspector, haga clic con el botón secundario en cualquier sitio de la página web y seleccione Inspeccionar elemento en la parte inferior del menú. Se abrirá la consola de inspección de elemento en la parte inferior de la pantalla y verá el código fuente HTML de la página en la parte izquierda, y la secuencia de comandos CSS en la derecha. Esto le permitirá cambiar elementos del código localmente para diagnosticar el problema.
* en esta herramienta se puede ver el uso de red que se usa al recargar una pagina o una busqueda.

<img src=" https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/Html/informe/imagenes/network%20inspector.JPG?raw=true" alt="muestra de la pantalla del uso de red de una pagina web con la herramienta inspector">

* también se puede observar la información sobre headers como:
    - url de donde se envió la página web
    - método http enviado en nuestro caso get
    - código http
    - dirección remota
<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/Html/informe/imagenes/headers%20inspector.JPG?raw=true" alt="muestra de pantalla de la información de header dicha anteriormente">
### Postman
Postman es una extensión gratuita para el navegador Google Chrome que permite probar servicios web fácilmente, basta con indicar la url, el método HTTP (POST, GET, etc.) y los parámetros de la petición.
* en este caso se puede ver que se ha enviado una petición get al api de pokemon go , el cual en un método get se envia el parámetro en el url y en este caso nos devuleve un archivo json.


*por otro lado con el método post se puede enviar en el cuerpo parámetros como clave valor


### W3C
El Consorcio World Wide Web (W3C) es una comunidad internacional donde las organizaciones Miembro [ingles], personal [ingles] a tiempo completo y el público en general trabajan conjuntamente para desarrollar estándares Web [ingles]. Liderado por el inventor de la Web Tim Berners-Lee [ingles] y el Director Ejecutivo (CEO) Jeffrey Jaffe [ingles], la misión del W3C es guiar la Web hacia su máximo potencial. Contacta con el W3C para más información
<br> <a href="http://www.w3c.es/Consorcio/"> tomado de w3c españa</a>

### W3C schools
W3Schools está optimizado para el aprendizaje, pruebas y entrenamiento de diferentes lenguajes WEB. Los ejemplos pueden ser simplificadas para mejorar la lectura y la comprensión básica. Tutoriales, referencias y ejemplos son revisados constantemente para evitar errores, pero no se garantiza la corrección completa de todo el contenido.
<br>

#### Cursos y Tutoriales
* HTML y CSS
* JavaScript
* Lado del Servidor SQL PHP ASP
* Web Building
* Tutoriales XML
 <br> <a href="http://www.w3schools.com/"> links a los recursos</a>
### XML
XML, siglas en inglés de eXtensible Markup Language ("lenguaje de marcas Extensible"), es un meta-lenguaje que permite definir lenguajes de marcas desarrollado por el World Wide Web Consortium (W3C) utilizado para almacenar datos en forma legible. Proviene del lenguaje SGML y permite definir la gramática de lenguajes específicos (de la misma manera que HTML es a su vez un lenguaje definido por SGML) para estructurar documentos grandes. A diferencia de otros lenguajes, XML da soporte a bases de datos, siendo útil cuando varias aplicaciones deben comunicarse entre sí o integrar información
<br> <a href="https://es.wikipedia.org/wiki/Extensible_Markup_Language"> tomado de wikipedia</a>

### HTML
<p> HTML, que significa Lenguaje de Marcado para Hipertextos (HyperText Markup Language) es el elemento de construcción más básico de una página web y se usa para crear y representar visualmente una página web. Determina el contenido de la página web, pero no su funcionalidad.
</p>       
<P>HTML le da "valor añadido" a un texto estándar en español. Hiper Texto se refiere a enlaces que conectan una página Web con otra, haciendo de la Red Mundial (World Wide Web) lo que es hoy. Al crear y subir páginas Web a Internet, te haces participante activo de esta Red Mundial desde que tu sitio está en línea. HTML soporta imágenes y también otro tipo de elementos multimedia. Con la ayuda de HTML todos pueden hacer sítios web estáticos y dinámicos. HTML es el lenguaje que describe la estructura y el contenido semántico de un documento web. El contenido dentro de una página web es etiquetado con elementos HTML como `<head>`, `<title>`, `<body>`, `<article>`, `<section>`, `<p>` etcétera. Estos elementos forman los bloques de construcción de un sitio web.</p>

<br> <a href="https://developer.mozilla.org/es/docs/Web/HTML"> tomado de mozilla foundation</a>

### Estilo css

Hojas de estilo en cascada (o CSS, siglas en inglés de Cascading Stylesheets) es un lenguaje de hojas de estilo para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado . Es muy usado para establecer el diseño visual de las páginas web, e interfaces de usuario escritas en HTML o XHTML; el lenguaje puede ser aplicado a cualquier documento XML, incluyendo XHTML, SVG, XUL, RSS, etcetera. También permite aplicar estilos no visuales, como las hojas de estilo auditivas. (Fuente: Wikipedia)

### Doctype
Una declaración de tipo de documento o DOCTYPE (del inglés document type declaration) asocia un documento SGML o XML particular con una definición de tipo de documento. En la forma serializada de un documento, este se manifiesta como una cadena corta de caracteres de marcado (markup) que se conforma con una sintaxis particular.

A pesar de su nombre, una declaración DTD no sirve para deducir el tipo de documento , aunque originalmente se suponía que lo fuera.

El motor de visualización de HTML en los navegadores web modernos ejecutan el DOCTYPE, en donde el DOCTYPE en un documento es servido como text/html, esto determina el modo de visualización, "quirks mode" o "standards mode". 

#### Lista de Doctypes
* HTML 5
* HTML 4.01 Strict
* HTML 4.01 Transitional


<a name="desarrollo"></a>
## Desarrollo del informe



## Conclusiones y Recomendaciones



<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Josué Pacheco](https://github.com/PcaJosue)