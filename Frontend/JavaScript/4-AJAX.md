# JavaScript Asincrono y APIs

- Tipos de Errores
- Objeto Error
- Operador instanceof

- JSON
- XMLHTTPRequest (AJAX)

- Throw
- Try, Catch, Finally

- Promise
- Async, Await

- Fetch (AJAX)
- Objeto Request

- API REST
- API SOAP
- API JSON-RPC
- API XML-RPC

# Tipos de Errores

    EvalError
        - Ocurre con respecto a la funcion global eval()

    InternalError
        - Ocurre cuando se produce un error interno en el motor de javascript, por ejemplo "demasiada recursividad"

    ReferenceError
        - Ocurre cuando se quita la referencia a una referencia no valida

    SyntaxError
        - Error de sintaxis

    RangError
        - Ocurre cuando una variable numérica o parámetro está fuera de su rango válido

    TypeError
        - Ocurre cuando una variable o parámetro no es de un tipo válido

    URIError
        - Ocurre cuando encodeURI() o decodeURI() pasan parámetros no válidos

# Objeto Error

CONSTRUCTOR

    const err = new Error("Mensaje sobre el error");

PROPIEDADES

    .message
        - Devuelve el mensaje de error
    .name
        - Devuelve el nombre del error

METODO

    .toString()
        - Devuelve un string que representa el objeto Error

# Operador instanceof

- Compara si un objeto fue creado con su constructor
- Se utiliza en condicionales if

    const texto = new String("Texto");

    texto instanceof String; //true

# JSON

¿Que es?

- Es un formato basado en texto para representar objetos en la sintaxis de JavaScript
- Al acceder a los datos se debe convertir de string a objeto (parsing)
- Al enviar los datos se debe convertir de objeto a string (stringification)

    JSON.parse(json)
        - Convierte un string JSON a object

    JSON.stringify(json)
        - Convierte un object JSON a string

- JSON solo contiene propiedades, no metodos
- En cada key y value se debe usaar comillas dobles

- Para obtener un JSON se utiliza la API XMLHTTPRequest
    - Permite realizar solicitudes de red para recuperar recursos desde un servidor vía JavaScript
    - Por ejemplo: imágenes, texto, JSON, incluso código HTML

# XMLHTTPRequest

PROPIEDADES

    .readyState
        - Devuelve un numero que indica el estado de la peticion:

            0 	No inicializado (objeto creado, pero no se ha invocado el método open)
            1 	Cargando (objeto creado, pero no se ha invocado el método send)
            2 	Cargado (se ha invocado el método send, pero el servidor aún no ha respondido)
            3 	Interactivo (se han recibido algunos datos, aunque no se puede emplear la propiedad responseText)
            4 	Completo (se han recibido todos los datos de la respuesta del servidor)

    .status
        - Devuelve el código de estado HTTP devuelto por el servidor

            Respuestas informativas (100–199)
            Respuestas satisfactorias (200–299)
            Redirecciones (300–399)
            Errores de los clientes (400–499)
            Errores de los servidores (500–599)

    .statusText
        - Devuelve el código de estado HTTP devuelto por el servidor en forma de string

    .responseText
        - Devuelve el contenido de la respuesta del servidor en forma de string

    .responseXML
        - Devuelve el contenido de la respuesta del servidor en formato XML
        - El objeto devuelto se puede procesar como un objeto DOM

    .withCredentials
        - Devuelve true o flase indicando si el pedido de Access-Control entre sitios debe o no ser realizado usando credenciales como cookies o encabezados de autorización

    .response
        - Devuelve la respuesta de la llamada

    .responseType
        - Devuelve el tipo de contenido de la respuesta

METODOS

    .abort()
        - Detiene la petición actual

    .getAllResponseHeaders()
        - Devuelve un string con todas las cabeceras de la respuesta del servidor

    .getResponseHeader("cabecera")
        - Devuelve un string con el contenido de la cabecera solicitada

    .open(metodo, url, async, user, password)
        - Establece parametros de la petición que se realiza al servidor
        - metodo: http GET o POST
        - url: url solicitada, puede ser un objeto url

            (opcional) async: true por defecto, si se establece false la peticion sera sincrona
            (opcional) user: Usuario
            (opcional) password: Contraseña de autenticacion http basica

    .send(contenido)
        - Realiza la petición HTTP al servidor

EVENTOS XMLHTTPRequest

    onreadystatechange
        - Se dispara cuando la propiedad readyState cambia

    onprogress
        - Se dispara cuando la cantidad de datos que se han recibido ha cambiado

    onload
        - Se dispara cuando la transferencia se ha completado

    onerror
        - Se dispara cuando ocurre un error en la peticion

## ¿Como usar XMLHTTPRequest para hacer una peticion?

1 Instanciar el objeto XHR
2 Crear la peticion con el método open
3 Definir la propiedad responseType (opcional)
4 Enviar la peticion a la red
5 Manejar la respuesta con un evento, dependiendo del status HTTP

    const XHR = new XMLHTTPRequest();

    XHR.open("GET", "https://jsonplaceholder.typicode.com/users");
    XHR.responseType = "json";
    XHR.send();

    XHR.onload = () => {
        console.log(XHR.response);
    }

# Throw

- Throw por si sola, lanza una excepción (error)
- Se usa para crear errores personalizados

# Try, Catch, Finally

¿Que representan estas Sentencias?

    Try :Intenta ejecutar una instrucción
    Catch :Captura un error en caso de que falle el intento
    Finally :Ejecuta una instruccion independientemente del resultado

- Al menos un bloque catch o finally debe estar presente
- De esta manera existen 3 formas posibles para el bloque:

Ejemplo 1:
    try {
        //sentencia si se lanza correctamente
    } catch (error) {
        //sentencia si se captura una excepción
    };

Ejemplo 2:
    try {
        //sentencia si se lanza correctamente
    } finally {
        //sentencia independiente del resultado
    }

Ejemplo 3:

    try {
        //sentencia si se lanza correctamente
    } catch (error) {
        //sentencia si se captura una excepción
    } finally {
        //sentencia independiente del resultado
    }

# Promise

CREAR y CONSUMIR Promise

- Se debe establecer :
- cúando es conciderada resolve    if
- cúando es conciderada reject    else

- Se establecen acciones a ejecutar segun el resultado de la promesa
- Por ultimo se llama a la promesa pasandole las acciones que debe ejecutar

        const doSomething = new Promise((resolve, reject) => {
            if (condition) {
                //Bloque que procesa la condicion de caso resolve
            } else {
                //Bloque que procesa la condicion de caso reject
            }
        });

        const successful = (resolvedValue) => {
            //resolvedValue es el resultado de la operacion resolve
        }

        const failed = (rejectedValue) => {
            //rejectedValue es el resultado de la operacion reject
        }

        doSomething
            .then(successful)
            .catch(failed)

STATUS

    pending : estado inicial, ni cumplido ni rechazado
    fulfilled : la operación se completó con éxito
    rejected : la operación falló

Informacion:

- Las promesas llaman a sus controladores ".then" o ".catch" cuando el estado cambia de "pending"
- Los controladores manejan la informacion que obtuvo la Promise
- El metodo .then toma maximo 2 argumentos callback, el primero en caso resolve y el segundo en caso reject
- Los metodos .then se procesan en cadena aun cuando no se devuelve la respuesta, solo frenará en el .catch final

# Async , Await

- Async devuelve un Promise, la cual obtiene un valor resolve o reject
- Async puede contener una sentencia await, la cual espera a la resolucion de la Promise y luego reanuda la ejecucion para devolver el valor obtenido

- Las funciones asincronas Simplifican el uso de Promise

    async function display() {
      let myPromise = new Promise(resolve () => {
        resolve("Work Done!!");
      });
      document.getElementById("pharagraph").innerHTML = await myPromise;
    }
    display();

# Fetch

- API similar a XMLHTTPRequest (peticion asincrona de recursos)
- Esta basada en Promise / Devuelve una promesa
- Se controla con .then(respuesta) y .catch(problema)
- A su vez; .then y .catch funcionan con async await

Sintaxis

    fetch("https://example.com")
        .then(data => //statement)
        .catch(error => //statement)

# Objeto Request

- Request puede contener 2 parametros

    const REQUEST = new Request("http://api.com", CONFIGURACION)

    - CONFIGURACION : objeto que contiene los settings para aplicar en la llamada:

        - method : Por defecto "GET"
            - "POST"
            - "HEAD"
            - "PUT"
            - "DELETE"
            - "PATCH"

        - headers : Cabeceras de la peticion
            - autenticacion
            - Caché
            - Cockies, etc

        - body : Tipo de cuerpo, usando "HEAD" o "GET" la peticion no tiene cuerpo
            - Blob
            - FromData
            - DataView, etc

        - mode : Modo de uso, por defecto "cors"
            - no-cors
            - same-origin
            - navigate

        - credentials : Por defecto "same-origin"
            - omit
            - include

        - cache : Modo de caché
            - no-store
            - reload
            - no-cache
            - force-cache
            - only-if-cached

        - redirect : Modo de redireccion, por defecto "follow"
            - error
            - manual

        - referrer :
            - no-referrer
            - client

        - referrerPolicy : String que rellena el encabezado de referencia durante determinadas acciones
        - integrity : Contiene los valores de sub recursos de integridad de la peticion
        - keepalive : Boleano que indica si debe establecer una conexión persistente para varias solicitudes o respuestas.
        - signal : Un objeto AbortSignal que se usa para comunicarse con una solicitud o anularla.

        - priority : Define la prioridad de la peticion frente a otras del mismo tipo
            - high
            - low
            - auto

# API REST