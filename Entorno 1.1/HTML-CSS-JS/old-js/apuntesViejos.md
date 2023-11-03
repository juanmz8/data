# Parámetros Rest

- La sintaxis de los parámetros rest nos permiten representar un número indefinido de argumentos como un array.

- Sólo el último parámetro puede ser un "parámetro rest".

- El último parámetro de una función se puede prefijar con ... lo que hará que todos los argumentos restantes (suministrados por el usuario) se coloquen dentro de un array de javascript "estándar".

# DOM

- Es toda la estructura HTML
- No es JavaScrpit, es una API (DOM)
- Cada parte del Arbol es un NODO
    - element node (cualquier etiqueta) 1
    - text node (contenido de etiqueta) 3
    - coment node (cualquier comentario) 8
    - Attribute node: Atributos en las etiquetas
- Los elementos siempre se guardan en una variable const

# Eventos

- Es cualquier cosa que suceda en el documento

- Se pueden usar para modificar codigo CSS mediante el uso de "classList"


**FlowEvent**

*Bubbling*

Por defecto, se ejecutan en flujo desde los hijos y luego los padres

*Capturing*

Invierte el flujo desde los padres hasta los hijos, cuando tiene true al cerrar el ultimo parentesis de la función

**Propagacion de los eventos**

*.stopPropagation*

Sirve para detener la propagacion a sus hijos o padres, como un break

- Si se quisiera llamar a una funcion externa ésta no puede ser Arrow, solo tradicionales (Function)

Sintaxis particular de Angular:

    <p (click)="saludo()" > Lorem ipsum </p>

Sintaxis correcta en JavaScript

    element.addEventListener("event", callback)

# Objeto Evento

El objeto Event es un objeto predefinido de JavaScript que almacena información sobre un evento y es pasado, para cada evento que tiene lugar, como argumento a la función o funciones que gestionan el evento.

En el DOM se accede a los objetos de eventos a través de las funciones de manejo. Entonces al tener una referencia al objeto de evento, se puede llegar a todas las propiedades y métodos

El método preventDefault() cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá.

Por ejemplo, esto puede ser útil cuando
- Al hacer clic en el input "submit", evita que refresque la pagina
- Al hacer clic en un enlace, evita que el enlace siga la URL

# Crear e insertar elementos

Maneras de insertar elementos en el DOM

    appendChild()
    insertBefore(position,element)
    insertAdjacentElement(position,element)
    insertAdjacentHTML(position,html)
    insertAdjacentText(position,text)

Los elementos o etiquetas siempre se crean en el documento,con comillas y en mayusculas

Los elementos o etiquetas siempre tienen que ser hijos de alguien

# DOM Traversing (recorrer el dom)

Propiedades de padres, hijos y hermanos

# AJAX

*El Objeto XMLHttpRequest*

Proporciona informacion de la pagina a traves de solicitudes sin necesidad de recargarla
Se instancia de la siguiente manera

    let xhr = new XMLHttpRequest()

XHR tiene un metodo OPEN que recibe dos parametros

Solo se solicitan ciertos datos cuando se hace la peticion al navegador, esos datos se guardan en un objeto

*Codigos de Estado de Respuesta*

    Respuestas informativas (100–199)
    Respuestas satisfactorias (200–299)
    Redirecciones (300–399)
    Errores de los clientes (400–499)
    Errores de los servidores (500–599)

*Protocolo HTTP*

- Es la base de cualquier intercambio de datos en la Web, y un protocolo de estructura cliente-servidor, esto quiere decir que una petición de datos es iniciada por el elemento que recibirá los datos (el cliente), normalmente un navegador Web.

*TCP (Protocolo de Control de Transmisión)*

- El rol de TCP es garantizar que los paquetes se entreguen de forma confiable y sin errores. TCP tiene control de concurrencia, lo que significa que las solicitudes iniciales serán pequeñas, aumentando de tamaño a los niveles de ancho de banda que los ordenadores, servidores y redes puedan soportar.

*Proxy*

Aquellos dispositivos, que sí operan procesando la capa de aplicación son conocidos como proxies. Estos pueden ser transparentes, o no (modificando las peticiones que pasan por ellos), y realizan varias funciones:

- caching (la caché puede ser pública o privada, como la caché de un navegador)
- filtrado (como un anti-virus, control parental, ...)
- balanceo de carga de peticiones (para permitir a varios servidores responder a la carga total de peticiones que reciben)
- autentificación (para el control al acceso de recursos y datos)
- registro de eventos (para tener un histórico de los eventos que se producen)

*Cabeceras HTTP*

- Las Cabeceras son los parámetros que se envían en una petición o respuesta HTTP al cliente o al servidor para proporcionar información esencial sobre la transacción en curso.

*Los elementos que se pueden controlar con el protocolo HTTP :*

- Cache
    - El como se almacenan los documentos en la caché, puede ser especificado por HTTP. El servidor puede indicar a los proxies y clientes, que quiere almacenar y durante cuanto tiempo. Aunque el cliente, también puede indicar a los proxies de caché intermedios que ignoren el documento almacenado.

- Flexibilidad del requisito de origen
    - Para prevenir invasiones de la privacidad de los usuarios, los navegadores Web, solamente permiten a páginas del mismo origen, compartir la información o datos. Esto es una complicación para el servidor, asi que mediante cabeceras HTTP, se puede flexibilizar o relajar esta división entre cliente y servidor

- Autentificación
    - Hay páginas Web, que pueden estar protegidas, de manera que solo los usuarios autorizados puedan acceder.

- Proxies y  tunneling
    - Servidores y/o clientes pueden estar en intranets y esconder así su verdadera dirección IP a otros. Las peticiones HTTP utilizan los proxies para acceder a ellos. Pero no todos los proxies son HTTP proxies. El protocolo SOCKS, por ejemplo, opera a un nivel más bajo. Otros protocolos, como el FTP, pueden ser servidos mediante estos proxies.

- Sesiones
    - El uso de HTTP cookies permite relacionar peticiones con el estado del servidor. Esto define las sesiones, a pesar de que por definición el protocolo HTTP es un protocolo sin estado. Esto es muy útil no sólo para aplicaciones de comercio electrónico, sino también para cualquier sitio que permita configuración al usuario.

# Callbacks

- Son funciones que se ejecutan a traves de otra funcion y se usan como argumento

- No son asincronos, tienen un orden

# Promesas

- Es un objeto con dos callbacks dentro ( Resolv , Reject)

    - resolv se ejecuta cuando no hay error y reject cuando lo hay