# JS 6 Protocolos WEB, APIS y Arquitecturas

- URI, URL, URN
- Codigos de respuesta
- Metodos HTTP

- Arquitectura REST
- API REST

- SOAP (Simple Object Access Protocol)

- API GraphQL
- API gRCP
- API Web Sockets
- API Web Hooks

# URI, URL, URN

# Codigos de estado

General:

    1XX: Respuestas informativas
    2XX: Peticiones correctas
    3XX: Redirecciones
    4XX: Errores del cliente
    5XX: Errores del servidor

Especifico:

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

# Arquitectura REST

PRINCIPIOS

    1.Cliente-servidor
        El cliente y el servidor deben estar completamente separados e independientes
        La única forma de comunicación debe ser mediante solicitudes HTTP

    2.Sin estado (stateless)
        La comunicación entre el cliente y el servidor debe ser sin estado
        Implica que no se almacenará ni se compartirá información entre peticiones
        Toda petición es independiente y debe contener sólo la información necesaria para procesarla

    3.Identificador único (URI)
        Todo recurso debe tener un ID unico
        No puede existir varios recursos con el mismo ID en la red
        Estos deben mantener una jerarquía lógica

    4.Uso correcto de Protocolos HTTP
        REST debe respetar los metodos y códigos de estado para cada operación

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

DISEÑO

    - Uso correcto de Metodos y código de estado HTTP
    - Usar sustantivos para referirse a recursos, no verbos
    - Usar plurales para los recursos de la colección
    - Usar URL anidadas cuando exista una jerarquía o relación clara entre recursos

# API REST