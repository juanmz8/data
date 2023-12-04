# JavaScript Asincrono

- JSON
- XMLHTTPRequest (AJAX)

- Tipos de Errores
- Objeto Error
- Operador instanceof

- Sentencia throw
- Try , Catch

- Fetch
- Promise

- Async y Await

- API REST

- API SOAP
- API XML-RPC
- API JSON-RPC

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

# Sentencia Throw

Lanza una expresión definida por el usuario
