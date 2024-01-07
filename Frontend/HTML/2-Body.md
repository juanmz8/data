# Utilidades y Contexto

- <a></a>
   Crea un hiperlink
   Atributos:

   download=""
   //Valores: Una url para descargar un recurso LOCAL

   href=""
   //Valores: Una url o id para navegar

   rel=""
   //Valores: nofollow/noopener/noreferrer/external/author/help/licence/prev/next/bookmark/search/alternate/tag

   target=""
   //Valores: _self/_blank/_parent/_top

- <abbr></abbr>
   - Se usa para colocar abreviaciones
   - Atributos:

   title=""
   //Valores: Una descripcion o expansion de la abreviatura

- <address></address> //Se usa para especificar informacion de contacto

- <area>
   - Crea distintas selecciones en las que se puede dividir un mapa de imagenes
   - Se utiliza con la etiqueta <map> que asocia la <img> a las areas donde se puede hacer click
   - Atributos:

   shape=""
   //Valores: rect/circle/poly/default

   href=""
   //Valores: Una url con el mapa de imagenes

   coords=""
   //Valores: Cantidad de pixeles o porcentajes de espacio disponibles

   alt=""
   //Valores: Descripcion del area

   accesskey=""
   //Valores: Tecla o caracter de acceso rapido

   tabindex=""
   //Valores: Numero entre 0 y 32767 que se asigna en orden de tabulacion

- <blockquote></blockquote>
   - Crea citas en bloque
   - Atributo: cite="" //Valor: Url de la fuente original

- <br> //Añade un salto de linea
- <cite></cite> //Crea una cita inline
- <embed></embed> //Incrusta recursos externos como archivos pdf
- <h1> //Titulos con 6 diferentes niveles
- <hr> //Crea una linea divisorio de tema
- <p></p> //Crea un parrafo
- <q></q> //Crea una cita inline
- <strong></strong> //Define el texto como importante
- <sub></sub> //Crea un Sub-indice
- <sub></sub> //Crea un Sub-indice
- <sup></sup> //Crea un Super-indice
- <time></time> //Representa un periodo de tiempo especifico

# Estructura de secciones

- <article></article> //Contenido independiente de una pagina
- <aside></aside> //Contenido relacionado con el contenido principal de la pagina
- <div></div> //Contenedor para cualquier otro elemento
- <footer></footer> //Especifica el pie de pagina
- <header></header> //Especifica una seccion de encabezado
- <main></main> //Especifica el contenido Primario de la pagina
- <nav></nav> //Contiene elementos de navegacion
- <secction></secction> //Contiene una seccion de la pagina
- <span></span> //Agrupa elementos inline y texto

# Multimedia

- <audio></audio>
   - Inserta contenido de audio
   - Atributos:

   autoplay //Boleano; si se especifica el sonido se reproduce automaticamente

   controls //Boleano; si se especifica, el navegador ofrecera controles para controlar la reproduccion del audio

   src="" //La url del recurso de audio

- <figcaption></figcaption> //Genera un subtitulo o Leyenda en un elemento <figure>

- <figure></figure> //Permite incrustar contenido independiente

- <iframe></iframe>
   - Incrusta otra pagina html en la actual
   - Atributos: (CONTIENE MUCHISIMOS)

      allow=""
      //Valores: Una caracteristica de seguridad

      allowfullscreen
      //Valores: Boleano; puede activar el modo pantalla completa

      allowpaymentrequest
      //Valores: Boleano; un <iframe> de origen cruzado puede invocar el api de solicitud de pago

      referrerpolicy=""
      //Valores: Un valor que indica que referencia se debe enviar cuando se trae el recurso

- <img>
   - Coloca una imagen
   - Atributos:

      loading="lazy" //Carga la imagen con un retraso
      usemap="" //Nombre #hash que utiliza un elemento <map> para refencia

- <map></map>
   - Define una coleccion de elementos <area> clickables
   - Atributos:

      name="" //Referencia del atributo [usemap] de <img>

- <svg></svg> //Añade un fragmento svg en el documento

- <track> //Se usa dentro de <audio> y <video>, funciona con recursos ".vtt"

- <video></video> //Crea un reproductor de video

# Estilos y decoraciones

- <b></b> //Estila texto en bold
- <i></i> //Estila texto en italic
- <em></em> //Contenido importante
- <u></u> //Estila texto con guion bajo
- <small></small> //Contenido sin importancia
- <del><del> //Estila texto tachado
- <kbd></kbd> //Dibuja una tecla con texto
- <mark></mark> //Crea un resaltado en el texto
- <pre></pre> //Muestra texto exactamente como fue asignado en el documento
- <progress></progress> //Crea una barra de progreso horizontal

# Formularios

- <button></button>
   - Crea un boton clickable
   - Atributos:

      name=""
      //Valores: El nombre de control del boton

      value=""
      //Valores: Texto inicial con el que sera enviado con el formulario

      type=""
      //Valores: buttton/submit/reset

      disable //Boleano que indica que el boton esta desabilitado

- <fieldset></fieldset> //Genera un recuadro en un grupo de inputs

- <form></form>
   - Es un contenedor para inputs
   - Atributos

      acept-charset=""
      //Valores: Lista de codificacion de caracteres que el servidor acepta

      action=""
      //Valores: La URI de un programa que procesa la informacion enviada

      autocomplete=""
      //Valores: on/of

      method=""
      //Valores: post/get

      name=""
      //Valores: Nombre del formulario

      novalidate
      //Valores: Es un boleano; indica que el formulario no es valido cuando es enviado

      target=""
      //Valores: _self/_blank/_parent/_top

- <input>
   - Crea un campo de entrada de datos
   - Atributos:

      type=""
      //Valores: button/checkbox/color/date/datetime-local/email/file/month/hidden/image/number/password/radio/range/reset/search/submit/tel/text/time/url/week

      autofocus //boleano
      capture //Boleano
      disable //Boleano

      maxlenght="" //Numero maximo de caracteres permitidos
      minlenght="" //Numero minimo de caracteres permitidos

      required //El input no puede enviarse vacio
      placeholder="" //Pista sobre el contenido que debe escribir el usuario
      readonly //El usuario no puede modificar el valor del input

      checked //Cuando se usa un tipo radio/checkbox, selecciona una opcion predeterminada

      from=""
      //Valores: El id del elemento <form> en cualquier region del documento

      accept=""
      //Valores: audio/* video/* image/*

      autocomplete=""
      //Valores: off/on/name/honorific-prefix/Muchisimos mas

- <label></label>
   - Añade una descripcion a un <input>
   - Atributos:

      for="" //id compartido con el <input>
      form="" //id compartido con el <form>

- <legend></legend> //Crea un titulo dentro de grupos <fieldset>

- <textarea></textarea> //Crea un campo de texto


# Tablas

- <caption></caption> //Crea un titulo para una tabla
- <col></col> //Especifica propiedades para una columna
- <colgroup></colgroup> //Especifica propiedades para un grupo de columnas

- <table></table> //Crea una tabla
- <tbody></tbody> //Define el cuerpo de la tabla
- <tfoot></tfoot> //Define el pie de la tabla
- <thead></thead> //Define la cabecera de la tabla

- <td></td> //Agrega una celda a la tabla
- <th></th> //Crea un encabezado para <td>
- <tr></tr> //Agrega una fila a la tabla


# Listas

- <datalist></datalist> //Crea una lista de opciones usando el atributo [value=""]

- <dd></dd> //Crea descripciones en una lista
- <details></details> //Crea una lista desplegable de informacion
- <dl></dl> //Crea una lista descriptiva
- <dt></dt> //Crea datos o terminos en una lista

- <li></li> //Crea un item de lista
- <ol></ol> //Crea una lista Ordenada
- <ul></ul> //Crea una lista Desordenada

- <optgroup></optgroup> //Crea un grupo de opciones
- <option></option> //Crea una opcion

- <select></select> //Crea una lista desplegable con opciones
- <summary></summary> //Crea un titulo para un elemento <details>