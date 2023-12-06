# JS 3 (Funcionalidad e Interfaz)

- Funcion IIFE
- Funcion Anonima
- Funcion Recursiva
- Funcion Anidada

- SetTimeout, clearTimeout
- SetInterval, clearInterval

- DOM (Tipos de nodos)
- Interfaz Element (propiedades y metodos)
- Interfaz Document (propiedades y metodos)

- Event
- Propiedades
- Metodos

- BOM (Window)
- Location
- Navigator
- Screen
- History
- Console

# Funcion IIFE (Immediately Invoked Function Expression)

- Funcion ejecutada inmediatamente cuando se definen
- Tambien conocida como funcion SEAF (Self-Executing Anonymous Function)

Sintaxys

    (function () {
        console.log("Esta funcion se ejecuta inmediatamente");
    })();

Se basa en 2 partes:

- La encapsulacion en (parentesis) impide ingresar variables que estan fuera del IIFE, ademas las variables del IIFE tampoco contaminan al scope Global

- Los (parentesis) del final indican al motor JavaScript que la funcion se debe ejecutar inmediatamente

Asignar una funcion IIFE a una variable almacenará el resultado, no su definicion de funcion

# Funcion Anonima

- Similitud con funciones IIFE
- Son funciones sin nombre, comunmente se asignan a variables

    let mensaje = function() {
        console.log('Soy una función anónima');
    };

    let mensaje2 = () => console.log('Función anónima');

- Una funcion anonima encerrada en (parentesis) solo devuelve el objeto Function

# Funcion Recursiva

- Es una funcion que se llama a si misma hasta que se cumpla una condicion
- Recibe 2 entradas, un caso base (finaliza) y un caso recursivo (continúa)
- Se puede usar para remplazar el uso de loops

# Funcion Anidada

Ejemplo:

    function A () {
        function B () {
            function C () {
                //code
            }
        }
    }

- Si hay variables con el mismo nombre en varios bloques, estas serán unicas y solo disponibles en su propio bloque

- El acceso a los datos ocurre desde dentro :
- "C" puede acceder a "B" y ésta a su vez en "A"
- "C" tambien puede acceder en "A" gracias a "B"

# setTimeout

- Crea una funcion que se ejecuta cuando su Temporizador llega a 0

    setTimeout(() => {
        //Bloque de codigo con un delay de 5 segundos
    }, 5000);

clearTimeout()
    - Elimina el delay de un setTimeout
    - Toma como argumento la variable que guarda a setTimeout

# setInvertal

- Crea una funcion que se ejecuta cada vez que su temporizador llega a 0

    setInterval(() => {
        //Bloque de codigo que se Ejecuta cada 2 segundos
    }, 2000);

clearInterval()
    - Elimina la repeticion de un setInterval
    - Toma como argumento la variable que guarda a setInterval

# DOM

- Tipos de nodos en DOM:

    DOCUMENT  //Nodo raiz del documento
    ELEMENT   //Etiquetas html
    TEXT      //Texto dentro de etiquetas html (contando los saltos de linea)
    COMMENT   //Comentarios

# Element PROPIEDADES

    tagName 	//Obtener nombre de la etiqueta

    textContent //Obtener el contenido del elemento, sin estilos css
    innerText   //Obtener el contenido del elemento, con estilos css, excepto elementos hidden

    classList 	//Accede a la lista de clases, posee Metodos:

        .add(className) //Añade una clase
        .remove(className) //Elimina la clase
        .togle(className) //Si la clase existe la elimina, sino, la añade
        .contains(className) //Comprueba si existe la clase en el elemento
        .replace(class, newClass) //Remplaza una clase con otra
        .item(index) //Devuelve el valor de la clase en dicho indice

    id 	        //Obtener Id de la etiqueta
    attributes 	//Obtener Todos los atributos de la etiqueta

    childNodes 	//Obtener todos los nodos hijos del elemento
    firstChild 	//Obtener el primer hijo directo del elemento
    lastChild 	//Obtener el último hijo directo del elemento

    nodeName 	//Obtener nombre del nodo de ese elemento
    nodeType 	//Obtener Un número que representa el tipo del nodo

# Element METODOS

.addEventListener()
    - Detectar un evento en un elemento

    const button = document.querySelector("button");
    button.addEventListener("click", () =>
        alert("Hello!")
    );

    - Es habitual declarar la funcion en una variable y luego pasarla como parametro al eventListener

    const action = ()=> alert("Hello!");
    button.addEventListener("click", action);

    - Opcionalmente se puede indicar un tercer parametro :
        - capture : ejecuta el evento al inicio en vez de al final (bubble)
        - once    : ejecuta el evento por unica vez, internamente llama a .removeEventListener()
        - passive : La funcion nunca llama a .preventDefault()

.removeEventListener(event, function)
    - Quitar un detector de evento en un elemento

.blur()
    - Quita el foco del teclado del elemento actual

.click()
    - Simula un click fisico sobre un elemento*

.hasAttribute()
    - Comprueba si el elemento contiene un atributo

.getAttribute(name)
    - Obtiene el atributo del elemento

.removeAttribute(name)
    - Quita el atributo del elemento

.setAttribute(name, value)
    - Actualiza el valor de un atributo, si no existe lo crea

.hasChildNodes()
    - Comprueba si el elemento tiene hijos

.append(string o child)
    - Añade un elemento o string al final dentro de su padre
    - Puede recibir varios parametros
    - No devuelve ningun valor

.appendChild(child)
    - Añade un elemento al final dentro de su padre
    - Solo recibe un parametro
    - Devuelve el nodo añadido

    tagBody.appendChild(newElement)

# Document PROPIEDADES

.cookie
    - Devuelve una lista separada por punto y coma de las cookies para ese documento

.images
    - Devuelve todas las imagenes del documento

.links
    - Devuelve todos los hipervinculos del documento

.domain
    - Obtiene u Obtiene el dominio del documento

# Document METODOS

.createElement(tagName)
    - Crea un elemento nuevo

.createDocumentFragment()
    - Crea un fragmento de documento

.createEvent(event)
    - Crea un objeto evento

.createTextNode(string)
    - Crea un nodo de texto.

.getElementById(ID)
    - Obtiene el elemento identificado

.getElementsByClassName(class CSS)
    - Obtiene una lista de elementos con el nombre de clase dado (HTML collection)

.querySelector(Selector CSS)
    - Devuelve el primer elemento que coincide con el selector especificado (node list)

.querySelectorAll(Selector CSS)
    - Devuelve todos los elementos que coinciden con el selector especificado

.getElementsByTagName(tagName)
    - Devuelve una lista de elementos con el nombre de etiqueta dado

.getElementsByName(name)
    - Devuelve una lista de elementos que tengan el valor del atributo name correspondiente

.write()
    - Escribe texto en un documento

# Event

¿Cómo funcionan los eventos? Propagacion de eventos

    Fase capturing:
        El evento empieza en el window, document y en el root y luego entra dentro de cada uno de los hijos

    Fase target:
        el evento se lanza sobre el elemento en el que se hace click

    Fase bubble:
        Finalmente el evento sube hacia los ancestros desde el target hasta llegar de nuevo al root, document y window

Los elementos con Event Listeners soportan multiples eventos

    button.addEventListener("click", () => {
        console.log("click on button")
    })

Los elementos con Event Handlers solo soportan un unico evento

    button.onclick = () => {
        console.log("click on button")
    }

Eventos de Mouse

    click      //Cuando se hace click
    dblclick   //Cuando se hace doble click
    mousemove  //Cuando se mueve el cursor

    mouseover //Cuando el cursor entra en la zona del evento
    mouseout //Cuando el cursor sale de la zona del evento

    mousedown  //Cuando pulsamos el boton
    mouseup    //Cuando se suelta el boton

Eventos de Keyboard

    keydown  //Cuando pulsamos una tecla
    keyup    //Cuando soltamos una tecla
    keypress //Cuando se mantiene apretada una tecla

# Event PROPIEDADES

event.type
    - Devuelve el tipo de evento (distingue mayúsculas y minúsculas)

event.detail
    - Devuelve detalles sobre el evento, dependiendo del tipo de evento

event.Phase
    - indica qué fase del flujo de eventos se está procesando

event.cancelable
    - Devuelve un valor que indica si el evento se puede cancelar

event.target
    - Devuelve el elemento sobre el cual se dispara el evento
    - "event" es el objeto que contiene la informacion sobre el evento ocurrido

    button.addEventListener("click", function (e){
        console.log(event); //devuelve el objeto del evento
        console.log(event.target); //devuelve el elemento que dispara el evento
        console.log(event.target.id); //devuelve el id del elemento
    })

event.currentTarget
    - Devuelve siempre el elemento asociado al evento

# Event METODOS

event.preventDefault()
    - Cancela el evento si este es cancelable
    - Cualquiera accion por defecto que deba producirce como resultado del evento no ocurrirá

event.stopPropagation()
    - Evita la propagación adicional del evento en las fases de capturing y bubbling

event.stopImmediatePropagation()
    - Evita la propagacion si varios Listeners estan asociados al mismo elemento para el mismo tipo de evento

# BOM

Contiene informacion de la ventana del navegador, incluido el objeto Document que forma el DOM

Propiedades window

    window.innerHeight
        - Obtiene la altura (en pixeles) del viewport

    window.innerWidth
        - Obtiene el ancho del viewport

    window.outerHeight
        - Obtiene la altura en pixeles de toda la ventana, incluyendo la barra de notificaciones (si se encuentra) y los bordes

    window.outerWidth
        - Obtiene el ancho total de la ventana incluyendo las barras laterales (si es expandida), interfaz grafica y los de elementos para redimencionado de bordes

    window.opener
        - Devuelve una referencia de, la ventana que abrió la ventana actual

    window.closed()
        - Devuelve true o false si la ventana se cerró o no

Metodos window

    window.prompt()
        - Muestra un diálogo con mensaje opcional, que solicita al usuario que introduzca un texto
        - Recibe 2 parametros opcionales, un mensaje y un valor por defecto

    window.alert(string)
        - Muestra un diálogo de alerta con un mensaje opcional, y aguardará hasta que el usuario cierre la ventana de diálogo

    window.open()
        - Abre una nueva ventana por defecto about:blank
        - Sus parametros opcionales son URL, titulo de la ventana y configuracion de la ventana

    window.close()
        - Cierra la ventana actual, solo puede llamarse por ventanas abiertas con window.open

    window.confirm(string)
        - Muestra una ventana de diálogo con un mensaje opcional, y espera hasta que el usuario acepte o cancele

    window.print()
        - Abre el diálogo para imprimir el documento actual

    window.stop()
        - Detiene la carga de la pagina

# Location

Propiedades

    window.location.href
        - Devuelve la direcion de la pagina

    window.location.protocol
        - Devuelve el protocolo de la pagina (http, htttps)

    window.location.host
        - Devuelve el nombre del host y su puerto

    window.location.hostName
        - Devuelve el nombre del host

    window.location.port
        - Devuelve el puerto de la pagina actual

Metodos

    location.assign(URL)
        - Remplaza la url recargando la pagina acual, con posibilidad de volver a la anterior

    location.replace(URL)
        - Remplaza la url recargando la pagina acual, sin poder volver

    location.reload()
        - Recarga la pagina actual

# Navigator

Propiedades

    window.navigator.geolocation
        - Devuelve un objeto Geolocation que proporciona acceso web a la ubicación de un dispositivo
        - Metodos:

            geolocation.getCurrentPosition()
                - Utilizado para obtener la posición actual

            geolocation.watchPosition()
                - Utilizado para asignar un manejador para dar seguimiento a cualquier cambio de ubicación

            geolocation.clearWatch()
                - Utilizado para eliminar un manejador asignado a los cambios de ubicación

    navigator.cookieEnabled
        - Devuelve true o false si las cockies estan habilitadas

    navigator.language
        - Devuelve el idioma predefinido del navegador

    navigator.languages
        - Devuelve una matris de todos los lenguajes predefinidos del navegador

    navigator.onLine
        - Devuelve un valor booleano que indica si el navegador está funcionando en línea

    navigator.permissions
        - Devuelve un objeto que se puede usar para consultar y actualizar el estado de los permisos de las API

    window.navigator.userAgent
        - Devuelve la cadena de agente de usuario para el navegador actual

Metodos

    navigator.vibrate()
        - Provoca vibración en dispositivos compatibles

    navigator.share(data)
        - Invoca el mecanismo de uso compartido nativo de la plataforma actual
        - Data puede ser alguno de estos parametros: url,text, title, files
        - Ver tipos de archivos que pueden ser compartidos (application, audio, image, text, video)

    navigator.sendBeacon(url, data)
        - Transfiere de forma asíncrona datos mediante HTTP POST desde el agente de usuario a un servidor web
        - Devuelve true o false si la peticion fue aceptada

        - url : url que recibe los datos
        - data : (opcional) Objeto que contiene los datos enviados, puede ser: ArrayBuffer, TypedArray, DataView, Blobcon, string, FormData o URLSearchParams

    navigator.requestMIDIAccess(MIDI Option)
        - Devuelve un Promise que representa una solicitud de acceso a dispositivos MIDI en el sistema del usuario

        - MIDI Option: un objeto que representa opciones que son pasadas al metodo
            - sysex: si se establece true, permite enviar y recibir mensajes exclusivos del sistema, por defecto false
            - software: si se establece en true, permite que el sistema utilice cualquier sintetizador de software instalado

# Screen

Propiedades

    screen.availHeight
        - Muestra la altura de la pantalla, en píxeles, sin contar las funciones de interfaz de usuario permanentes o semipermanentes que son mostradas por el sistema operativo

    screen.availWidth
        - Devuelve la cantidad de espacio horizontal disponible en pixeles para la ventana

    screen.orientation
        - Devuelve la instancia ScreenOrientation asociada con la pantalla
        - Devuelve la orientacion actual de la pantalla

# History

history.back();
    - Equivalente a hacer clic en el botón de regresar

history.go(number);
    - Viaja x cantidad de paginas delante o detras dependiendo si el parametro es positivo o negativo

# Console

Metodos

    console.log()
        - Para salida general de la información registrada

    console.table()
        - Muestra datos tabulares en forma de tabla

    console.error()
        - Muestra un mensaje de error

    console.warn()
        - Muestra un mensaje de advertencia

    console.clear()
        - Limpia la consola

    console.dir(objeto)
        - Muestra un listado interactivo de las propiedades de un objeto JavaScript específico