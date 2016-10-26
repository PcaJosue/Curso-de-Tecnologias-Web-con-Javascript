<<<<<<< HEAD
# Repositorio de Tecnologias Web con Js

Este repositorio forma parte del  [curso de tecnologias web](https://github.com/adrianeguez/Tec_Web_Js_2016_B)

## Enfasis de texto
para nosotros utilizar un texto en **negrita** se utilizan dos "**".

* utilizamos "*" para utilizar listas ordenadas
+ o esto"+"
- o esto "-"

* para nosotros utilizar un texto en *cursiva* se utiliza "*"
* para nosotros ~~tachar un texto~~ se necesita usar "~~"

## Listar Ordenadas
1. número de 
2. de las listas 
1. ordenadas 
 1. lista no ordenada1 "utilizamos dos espacios antes del *"
 3. lista no ordenada2
5. no importa

## Links
 para utilizar un [link] (https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript)
 debemos encerrar el texto del link en "[]" y el link en "()"
 
 ## Imagenes
 para nosotros utilizar imagenes debemos de colocar un texto alternativo en brackets[] despues del caracter de exclamasion ! y el link va entre parentesis.
 ![javascritp](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
 
 ## formateo de codigo
 para utilizar el formateo de codigo dentro de texto plano debemos de utilizar el caracter `tilde invertida`
 para utilizar el formateo de codigo en un bloque de codigo necesitamos utilizar tres tildes invertidas donde se puede especificar el lenguaje de programacion a usarse para el formateo de codigo, justo despued de las 3 tildes invertidas
 
 * bloque de codigo javascript
 ``` javascript
 var mensaje= "hola mundo";
 ``` 
* Bloque de codigo de una `consola`

```
> apt-get update paquete
```

* Bloque de HTML

```
<html>
</html>
```

## Tablas
para usar tablas necesitamos las filas con  

columna 1| columna 2| columna 3|columna 4
 --- | --- | ---|---
 valor 1 c1|valor 2 c2 |valor 3 c3 | valor4 c4
 valor 2 c1|valor 3 c2 |valor 4 c3 | valor5 c4
 
 ##citas (no de humanos sino de texto)
 para escribir varias lineas de citas solamente las concatenamos en la siguiente linea utilizando `>`
 no olvidarse el salto de linea.
 > yo solo se , que nada se.
 
 > un filosofo random
 
 sino utilizamos una cita en la linea con `>`
 > y si me matas, ¿Me muero?
 
 ## saltos de linea
 
 para utilizar un salto de linea debemos de utilizar mas de 3 veces el caracter `---`
 
 ---
 
 o el caracter `--`
 
 ---
 
 ## video de youtube
 
 [![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
=======
# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Introducción a la Web` 
### Fecha de entrega : `2016-10-28`
### Estudiante : Alexander Josué Pacheco Correa
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
<a name="desarrollo"></a>
## Desarrollo del informe



## Conclusiones y Recomendaciones



<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Josué Pacheco](https://github.com/PcaJosue)
>>>>>>> origin/master
