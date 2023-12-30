- Tipos de Arquitectura web
- Capas de Arquitectura web
- Patrones de Diseño web
- Componentes de Servidor
- Componentes de Cliente
- Modelos de componentes WEB

# Tipos de Arquitectura web

SPA (Single page aplication)
PWA (Progressive web Aplication) (similar a SPA pero se pueden instalar)
SSR (Server Side Rendering)
SOA (Service Oriented Aplication)

Aplicaciones Isomorficas (SPA + SSR)
Aplicaciones Pre-Renderizadas (CSS + HTML + JS)
Aplicaciones Micro-Servicios
Aplicaciones Sin Servidor

# Capas de Arquitectura web

Capa-Presentacion (Interfaz)
Capa-Negocio (Peticiones)
Capa-Persistencia (Base de datos)

# Patrones de Diseño web

## Model-view-controller (MVC)

    - Ciclo de MVC
        - La vista le hace una peticion al controlador
        - El controlador le pasa la peticion al modelo
        - El modelo devuelve datos al controlador
        - El controlar le asigna a la vista la respuesta

    Uso:
        Arquitectura para aplicaciones World Wide Web en los principales lenguajes de programación.
        Marcos web como Django y Rails

## Flux (Actions - State - View)

    - Ciclo de Flux
        - La vista genera Acciones
        - Las acciones actualizan el estado de la app

## Otros patrones

Layer Pattern

    - Capa de presentación / UI layer
    - Capa de aplicación / service layer
    - Capa de lógica de negocios / domain layer
    - Capa de acceso a datos / Persistence Layer

    Uso:
        Aplicaciones de escritorio generales.
        Aplicaciones web de comercio electrónico

Client-server pattern

    - Consiste en dos partes; un servidor y múltiples clientes
    - Los clientes solicitan servicios del servidor y este proporciona servicios a esos clientes

    Uso:
        Aplicaciones en línea como correo electrónico, uso compartido de documentos y banca

Master-Slave Pattern

    - Consiste en dos partes; maestro y esclavos
    - El componente maestro distribuye el trabajo entre componentes esclavos idénticos
    - El el resultado final lo devuelven los esclavos

    Uso:
        Replicación de la base de datos, las bases de datos esclavas se sincronizan a la maestra
        Periféricos conectados a un bus en un sistema informático

Pipe Filter Pattern

    - Componente filtro; Los datos que se procesarán se pasan a través de las tuberías
    - Estas tuberías se pueden utilizar para el almacenamiento en búfer o con fines de sincronización

    Uso:
        Compiladores; Los filtros consecutivos realizan análisis léxico, análisis sintáctico y generación de código.
        Flujos de trabajo en bioinformática

Agent Pattern

    - Los servidores publican sus servicios y características a un intermediario
    - El componente intermediario es responsable de la coordinación de la comunicación entre los componentes
    - Los clientes solicitan un servicio del intermediario y este redirecciona al cliente a un servicio

Event Bus Pattern

    - Este patrón trata principalmente con eventos y tiene 4 componentes principales
    - Event Source / Event Listener / Channel / Event Bus
        - Las fuentes de publican mensajes en canales particulares
        - Los oyentes se suscriben a canales particulares
        - Los oyentes son notificados de los mensajes que se publican en un canal al que se han suscrito
    Uso:
        Desarrollo de Android
        Servicios de notificación

# Componentes de Servidor

DNS y Enrutamiento

    - Equilibrio de carga; ayuda a distribuir el tráfico para mantener un alto rendimiento
    - Endpoints de APIs; facilitar la comunicación entre el cliente y el servidor

Almacenamiento de Datos

    - Bases de datos; almacenar datos que la aplicacion usa regularmente para tener un rápido acceso
    - Almacenes de datos; están pensados para la conservación de datos históricos para generar información empresarial

Almacenamiento en Caché

    - datos en caché; acceder facilmente a datos utilizados regularmente y que no cambian con frecuencia
    - datos en caché de páginas web; normalmente sólo se recomienda almacenar en caché las páginas web estáticas

Trabajos y Servicios

    Servicios en segundo Plano; completan tareas que no son sensibles al tiempo ni a la sincronización
    Trabajos CRON; ejecutan rutinas de mantenimiento automáticamente en momentos determinados

# Componentes de Cliente

Interfaz de Usuario

    - No alberga gran parte de la lógica de negocio
    - Optimizar para que la capacidad de respuesta y el tiempo de carga sean mínimos

Logica de Negocio

    - Operaciones comunes como la autenticación, el almacenamiento de datos, el almacenamiento de archivos, etc

# Modelos de componentes WEB

Un Servidor, Una Base de Datos

    - Este modelo no debería utilizarse en producción
    - Un problema en el servidor o en la base de datos puede provocar inactividad y pérdidas

Varios Servidores, Una Base de Datos

    - Acceder simultáneamente a la base de datos desde varios servidores puede producir problemas de inconsistencia
    - Para evitarlo, los servidores web están diseñados para no tener estado
    - Esto significa que los servidores no retienen los datos entre sesiones

Varios Servidores, Varias Bases de Datos

    - Múltiples instancias idénticas de servidor web agrupadas detrás de un equilibrador de carga
    - La base de datos también se mantiene en múltiples instancias para añadir tolerancia a los fallos
    - Opcion 1; dividir tu base de datos entre las instancias disponibles para mejorar el rendimiento
    - Opcion 2; mantener duplicados de todo el almacén de datos para la redundancia

Modulos independientes (no-monoliticos)

    - Cada uno de estos módulos puede conectarse a la base de datos por sí mismo
    - Intancias de base de datos dedicadas para las necesidades de escalabilidad de los módulos