# JS 6 APIs y Servicios Web

- Arquitectura REST
- API REST

- SOAP (Simple Object Access Protocol)

- URL
- URI
- URN

- API GraphQL
- API gRCP
- API Web Sockets
- API Web Hooks

- Politica CORS (cross-origin resource sharing )

# Arquitectura REST

PRINCIPIOS REST

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

REGLAS DE DISEÑO

    - Uso correcto de Metodos y código de estado HTTP
    - Usar sustantivos para referirse a recursos, no verbos
    - Usar plurales para los recursos de la colección
    - Usar URL anidadas cuando exista una jerarquía o relación clara entre recursos

USO DE METODOS CORRECTOS

    GET: Solicita información de recursos
    POST: Creación de nuevos recursos
    PUT: Actualiza un recurso existente en su totalidad
    PATCH: Actualiza un recurso existente parcialmente
    DELETE: Elimina un recurso existente

CODIGOS DE ESTADO CORRECTOS

    1XX: Respuestas informativas
    2XX: Peticiones correctas
    3XX: Redirecciones
    4XX: Errores del cliente
    5XX: Errores del servidor

SEGURIDAD EN API REST

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

# API REST