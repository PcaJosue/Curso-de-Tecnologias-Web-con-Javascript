# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Introducción a CSS` 
### Fecha de entrega : `2016-11-02`
### Estudiante : `Alexander Josué Pacheco Correa`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : 2

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
    - <a href="#css">CSS</a>
        - <a href="#tags"> ETIQUETAS</a>
        - <a href="#clases"> Clases</a>
        - <a href="#id">Identificadores</a>
        - <a href="#containers">Contenedores</a>
        - <a href="#row">Clase Row</a>
        - <a href="#bootstrap">Bootstrap</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Introducción a CSS`

<a name="objetivos"></a>
## Objetivos

- Desarrollar el conocimiento de CSS
- Conocer bibliotecas de desarrolladores de estilos como: bootstrap
- Aprender el uso de lenguaje HTML CSS

<a name="marco-teorico"></a>
## Marco Teorico
<a name="css"></a>
### CSS 

<p> Hojas de Estilo en Cascada (Cascading Style Sheets), es un mecanismo simple que describe cómo se va a mostrar un documento en la pantalla, o cómo se va a imprimir, o incluso cómo va a ser pronunciada la información presente en ese documento a través de un dispositivo de lectura. Esta forma de descripción de estilos ofrece a los desarrolladores el control total sobre estilo y formato de sus documentos. </p>

    
* #### ¿Para qué sirve CSS?
    CSS se utiliza para dar estilo a documentos HTML y XML, separando el contenido de la presentación. Los Estilos definen la forma de mostrar los elementos HTML y XML. CSS permite a los desarrolladores Web controlar el estilo y el formato de múltiples páginas Web al mismo tiempo. Cualquier cambio en el estilo marcado para un elemento en la CSS afectará a todas las páginas vinculadas a esa CSS en las que aparezca ese elemento.
* #### ¿Cómo funciona?
    CSS funciona a base de reglas, es decir, declaraciones sobre el estilo de uno o más elementos. Las hojas de estilo están compuestas por una o más de esas reglas aplicadas a un documento HTML o XML. La regla tiene dos partes: un selector y la declaración. A su vez la declaración está compuesta por una propiedad y el valor que se le asigne.

    `h1 {color: red;}`

    `h1 es el selector`

    `{color: red;} es la declaración`
 

El selector funciona como enlace entre el documento y el estilo, especificando los elementos que se van a ver afectados por esa declaración. La declaración es la parte de la regla que establece cuál será el efecto. En el ejemplo anterior, el selector h1 indica que todos los elementos h1 se verán afectados por la declaración donde se establece que la propiedad color va a tener el valor red (rojo) para todos los elementos h1 del documento o documentos que estén vinculados a esa hoja de estilos.
<a href="http://www.w3c.es/Divulgacion/GuiasBreves/HojasEstilo">tomado de W3C español</a>
<a name="tags"></a>
* ##### Tags
 html 5 permite poner tags propios y darles un estilo diferente a cada uno de estos asi como color en un backgroundy muchas otras cosas mas, para esto se debe abrir el tag por ejemplo: `<parrafo> aqui va texto </parrafo>` en la misma hoja o en una hoja diferentes de estilos se llama al tag y se le agrega un estilo . <br>

 `parrafo { background-color: blueviolet  }` 
 <a name="clases"></a>
* ##### Clases: 
  Para darle formato (aplicar un diseño, un aspecto) a un elemento de html como puede ser un `<p>` se utilizan las clases (class), que van definidas en la hoja de estilos.

    Así pues podemos crear en la hoja de estilos la clase "importante" y la aplicaremos a aquellos párrafos que queramos resaltar.

    En el archivo CSS (que es un simple archivo de texto, pero que tiene la extensión .css) definimos la clase "importante", las clases siempre se definen poniendo un punto (.) delante.
    Cuando queramos destacar un párrafo sólo tenemos que asignarle esa clase: `<p class='importante'>asi se aplican estilos con clases.</p>`
    
<a name="id"></a>
* ##### ID: 
 
 El atributo global id define un identificador único (ID) el cual no debe repetirse en todo el documento. Su proposito es identificar el elemento al vincularlo (usando un identificador de fragmento), en scripts u hojas de estilo (con CSS).

El valor de este atributo es una cadena de caracteres opaca: es decir,  el autor del sitio no debe usarlo para proporcionar información. De forma particular, en sentido semántico por ejemplo, no debe ser derivado de la misma cadena.
 * ##### Hojas de estilo css
 los estilos CSS pueden estar tanto dentro del archivo de trabajo con extension .html o bien fuera con extension .css solo que, para este ultimo en la hoja de trabajo se debe referenciar donde se encuentra dicho archivo de estilos, asi tambn se puede agregar diferentes hojas de estilos pero si tags comunes se sobre escriben siempre quedará vigente el último.
 <a name="containers"></a>
 * ##### clase containers
    *   Contenedores facilitan la igualdad
    *   El W3-container ofrece igualdad de todos los elementos contenedores HTML:
        *   márgenes comunes
        * rellenos comunes
        *  alineaciones comunes
        * fuentes comunes
        * Los colores más comunes
    * Para utilizar un contenedor, basta con añadir un w3-contenedor de clase a cualquier elemento
<a name="row"></a>
 * ##### clase row
Lo más importante de entender en un principio es el sistema de grillas que plantea la librería Bootstrap.
Debemos pensar para armar nuestro esquema de la página que tenemos la posibilidad de definir filas y en cada fila definir de 1 hasta 12 columnas. Cada columna con un ancho relativo a ese número 12.
Luego Bootstrap se encarga de colapsar las columnas cuando se accede al sitio desde un dispositivo con una capacidad limitada en cuanto al ancho en píxeles (esto permite una experiencia más placentera al visitante que accede a nuestra página desde un celular con capacidades limitadas)
<a name="bootstrap"></a>
### BOOTSTRAP
Twitter Bootstrap es un framework o conjunto de herramientas de Código abierto para diseño de sitios y aplicaciones web. Contiene plantillas de diseño con tipografía, formularios, botones, cuadros, menús de navegación y otros elementos de diseño basado en HTML y CSS, así como, extensiones de JavaScript opcionales adicionales

Bootstrap tiene un soporte relativamente incompleto para HTML5 y CSS 3, pero es compatible con la mayoría de los navegadores web. La información básica de compatibilidad de sitios web o aplicaciones está disponible para todos los dispositivos y navegadores. Existe un concepto de compatibilidad parcial que hace disponible la información básica de un sitio web para todos los dispositivos y navegadores. Por ejemplo, las propiedades introducidas en CSS3 para las esquinas redondeadas, gradientes y sombras son usadas por Bootstrap a pesar de la falta de soporte de navegadores antiguos. Esto extiende la funcionalidad de la herramienta, pero no es requerida para su uso.

Desde la versión 2.0 también soporta diseños sensibles. Esto significa que el diseño gráfico de la página se ajusta dinámicamente, tomando en cuenta las características del dispositivo usado (Computadoras, tabletas, teléfonos móviles).

Bootstrap es de código abierto y está disponible en GitHub. Los desarrolladores están motivados a participar en el proyecto y a hacer sus propias contribuciones a la plataforma.
<a href="https://es.wikipedia.org/wiki/Twitter_Bootstrap">tomado de wikipedia</a>
        
<a name="desarrollo"></a>
## Desarrollo del informe

### formas de poner estilos 
<ol>
<li> **Tags:** 
 
    <img src=" https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/02-css/informe/ejemplos/propio%20tag.png?raw=true" alt="ejemplo de poner estilo en un propio tag">
     </li>
     
<li> **Clases:** 
       
 <img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/02-css/informe/ejemplos/clases.png?raw=true" alt="ejemplo de parrafo agregado estilo con clases">
  
</li>
<li> **ID:**
   <img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/02-css/informe/ejemplos/identificador.PNG?raw=true" alt="ejemplo de parrafo agregado estilo con un identificador">
   
</li>    
</ol>
### Hojas de estilos en páginas diferentes
<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/02-css/informe/ejemplos/hojas%20de%20estilos.png?raw=true" alt="muestra de la carpeta estilos, de los diferentes archivos .css que pueden contener y la referencia a esos archivos">

### Grids
<img src="https://github.com/PcaJosue/Curso-de-Tecnologias-Web-con-Javascript/blob/02-css/informe/ejemplos/grids.PNG?raw=true" alt="diferentes ejemplos de tamños de una celda en columnas ">


## Conclusiones y Recomendaciones

 * se puede trabajar estilos para cada parte del código teniendo cada participante un archivo diferente, eso sí no se deben usar tags comunes para dicha tarea
 *  bootstrap en una biblioteca importante para el manejo de estilos ya que nos permite tener variedad de estilos que han colaborado en todo el mundo
 * el manejo de grids no solo se usa para columnas sino para dividir de mejor manera nuestra página.


<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Josué Pacheco](https://github.com/PcaJosue)