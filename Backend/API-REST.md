# Estructura WEB, APIS y Arquitecturas

- Protocolo HTTP
- Protocolo Socket

- URI/url/urn
- Codigos de respuesta
- Metodos HTTP

- API (Interfaz de programacion de aplicaciones)
- REST (representational state transfer)
- SOAP (Simple Object Access Protocol)

- API Graph QL
- API Socket
- API Hook

# Protocolo HTTP

    Funciona por Peticiones y respuestas con sus cabeceras
    No funciona en tiempo real

    Usa TCP como protocolo de transporte
    Es cacheable
    Unidireccional

    Usos: Obtencion de recursos (html, js, img)
    Normalmente Rest APIs

# Protocolo Socket

    Funciona por eventos (EVENT DRIVEN)
    Funciona en tiempo real (conexion persistente)

    Usa TCP como protocolo de transporte
    No es cacheable
    Bidireccional

    Usos: Real-Time, apps de baja latencia
    Normalmente aplicaciones con envio y devoluciones de informacion

# URI => URL y URN

URI-Unifor Resource Identifier
    - Identificador unico de recursos, por nombre o ubicacion
    - Engloba a las URL y URN, siendo subtipos de URI

    URN-Unifor Resource Name
        - Diseñadas para ser estables e inmutables ante el tiempo y ubicacion

    URL-Unifor Resource Locator
        - Proporciona la direccion precisa para acceder a un recurso, consta de una estructura de componentes

# Codigos de estado

- General:

    1XX: Respuestas informativas
    2XX: Peticiones correctas
    3XX: Redirecciones
    4XX: Errores del cliente
    5XX: Errores del servidor

- Especifico:

    100: Continue
    101: Switching Protocols
    102: Processing
    103: Early Hints
    200: OK
    201: Created
    202: Accepted
    203: Non-Authoritative Information
    204: No Content
    205: Reset Content
    206: Partial Content
    207: Multi-Status
    208: Already Reported
    226: IM Used
    300: Multiple Choices
    301: Moved Permanently
    302: Found
    303: See Other
    304: Not Modified
    305: Use Proxy
    307: Temporary Redirect
    308: Permanent Redirect
    400: Bad Request
    401: Unauthorized
    402: Payment Required
    403: Forbidden
    404: Not Found
    405: Method Not Allowed
    406: Not Acceptable
    407: Proxy Authentication Required
    408: Request Timeout
    409: Conflict
    410: Gone
    411: Length Required
    412: Precondition Failed
    413: Payload Too Large
    414: URI Too Long
    415: Unsupported Media Type
    416: Range Not Satisfiable
    417: Expectation Failed
    418: I'm a Teapot
    421: Misdirected Request
    422: Unprocessable Entity
    423: Locked
    424: Failed Dependency
    425: Too Early
    426: Upgrade Required
    428: Precondition Required
    429: Too Many Requests
    431: Request Header Fields Too Large
    451: Unavailable For Legal Reasons
    500: Internal Server Error
    501: Not Implemented
    502: Bad Gateway
    503: Service Unavailable
    504: Gateway Timeout
    505: HTTP Version Not Supported
    506: Variant Also Negotiates
    507: Insufficient Storage
    508: Loop Detected
    509: Bandwidth Limit Exceeded
    510: Not Extended
    511: Network Authentication Require

# Metodos HTTP

    GET: Solicita información de recursos
    POST: Creación de nuevos recursos
    PUT: Actualiza un recurso existente en su totalidad
    PATCH: Actualiza un recurso existente parcialmente
    DELETE: Elimina un recurso existente

    'HEAD'        'LINK'       'PROPFIND'
    'PROPPATCH'   'PURGE'      'UNSUBSCRIBE'
    'CONNECT'     'COPY'       'UNLOCK'
    'ACL'         'BIND'       'CHECKOUT'
    'LOCK'        'M-SEARCH'   'MERGE'
    'MKACTIVITY'  'MKCALENDAR' 'MKCOL'
    'MOVE'        'NOTIFY'     'OPTIONS'
    'REBIND'      'REPORT'     'SEARCH'
    'SOURCE'      'SUBSCRIBE'  'TRACE'
    'UNBIND'      'UNLINK'

# API

. Servidor que gestiona peticiones y respuestas entre diferentes softwares
. Suelen manejar peticiones HTTP y responder datos JSON o XML
. Permite una comunicacion estandarizada entre aplicaciones para resolver un servicio

- Tipos de API

    Privada:
    - Solo se pueden usar internamente
    - Las empresas tienen un mayor control sobre ellas

    De partners:
    - Se comparten con partners empresariales específicos
    - Puede ofrecer flujos de ingresos adicionales, sin comprometer la calidad

    Pública:
    - Todos tienen acceso a la API
    - Permite que terceros desarrollen aplicaciones que interactúan con su API

# REST

PRINCIPIOS

    1. Arquitectura basada en recursos
        Cada recurso es identificado por URL y manipulado a traves de metodos HTTP

    2. Representacion
        Los recursos pueden tener multiples representaciones como JSON,HTML,XML,etc
        El cliente elige la representacion del recurso

    3. Stateless
        Cada peticion de un recurso contiene TODA la INFORMACION necesaria para entender la solicitud
        El servidor no mantiene ningun estado sobre el cliente entre peticiones
        El servidor no guarda informacion para responder al cliente

    4. Interfaz Uniforme
        Utiliza una interfaz definida y con restricciones como:
            Identificacion unica de recursos (urls)
            Manipulacion de recursos a traves de representaciones

    5. Separacion Cliente / Servidor
        Permite que el COMPONENTE cliente y COMPONENTE servidor tengan una evolucion independiente
        Cada uno puede cambiar si afectar al otro

SEGURIDAD

    Control de acceso
        Garantizar que los clientes solo puedan acceder a la funcionalidad y los datos para los que se les ha otorgado permiso
        Existen controles tipo RBAC y ABAC para establecer una estructura de permisos

    Limitación de velocidad
        Regula la cantidad de solicitudes que un cliente puede realizar a su API dentro de un período de tiempo
        Garantiza un uso justo para todos los clientes
        Restringir la cantidad de solicitudes, protege su API de posibles ataques de denegación de servicio (DoS)

    Puertas de enlaces
        Se utilizan para establecer puntos principales de control de tráfico de nuestras APIs
        Permiten autenticar el tráfico, controlar y analizar el uso de las APIs

    Uso de HTTPS
        Creación de conexiones segura y cifrada entre un cliente y servidor
        HTTPS utiliza cifrado SSL/TLS para establecer conexiones seguras entre el cliente y el servidor

    Uso de mecanismos de autenticación y autorización
        Su funcion es identificar el acceso de clientes a la API y sus recursos
        Existen mecanismos establecidos como OAuth 2.0 y JSON Web Tokens (JWT)

# SOAP

PINCIPIOS

    1. Protocolo estandar
        Es independiente del lenguaje de programacion o plataforma usada

    2. Extensibilidad
        Permite extension de sus funcionalidades como agregar nuevas caracteristicas

    3. Independencia
        Es independiente del modelo de programacion y sistema operativo, facilita la interoperabilidad

    4. Basado en estandares
        Utiliza XML para la representacion de datos
        Utiliza WSDL para describir la interfaz de servicios web

    5. Seguridad
        Configuracion de cifrado y autentificacion para proteger la integridad de datos transmitidos

    6. Manejo de errores
        Mecanismos de gestion de errores durante la comunicacion y respuestas

# API Graph QL

. Se trata de un lenguaje de consultas y un entorno de ejecucion para APIs
. Permite a los clientes solicitar solo la informacion necesaria mediante consultas flexibles
. Es util en aplicaciones donde la eficiencia en la transferencia de datos es crucial

# API Hook

. Tecnica en la que se interceptan eventos o llamadas a funciones para gestionar un comportamiento
. Ejemplo: Monitorizar o modificar la entrada y salida de datos de una aplicacion
. Ejemplo: Realizar acciones cuando se produce un evento especifico como subscripciones

# API Socket

. Tecnica basada en mecanismos de comunicacion entre procesos de diferentes maquinas o por la red
. Ejemplo: Crear, gestionar y configurar conexiones de red a travez de TCP(con conexion) o UDP(sin conexion)