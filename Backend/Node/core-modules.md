# Indice

    Modulo OS (Sistema operativo)
    Modulo FS (Sistema de archivos)
    Modulo PATH (Sistema de rutas)
    Modulo HTTP (Protocolo http)
    Modulo URL (Estructura URL)

# OS

METODOS

    arch() //Muestra Arquitectura del procesador (x86/x64)
    cpus() //Muestra Informacion de nucleos e hilos del procesador
    machine() //Muestra Tipo de maquina (arm, arm64, x86_64, etc)

    freemem() //Muestra Cantidad de memoria libre del SO en bytes
    totalmem() //Muestra Cantidad total de memoria del SO en bytes
    uptime() //Muestra cantidad de segundos que lleva funcionando la computadora
    loadavg() //Muestra Array del promedio de tiempo de carga en 1,5 y 15 minutos

    userInfo() //Muestra Informacion del usuario
    hostname() //Muestra Nombre de la maquina

    homedir() //Muestra Ruta del usuario actual
    tmpdir() //Muestra Ruta de la carpeta temporal asignada

    platform() //Muestra Plataforma del SO
    type() //Muestra Identificacion del SO

    version() //Muestra Version del SO
    release() //Muestra Version completa del SO

# FS

- Interfaz para manipular el sistema de archivos del OS
- Se usa para hacer operaciones de lectura y escritura de archivos

Objetos comunes:

    fs.Stat ---Objeto que proporciona informacion sobre un archivo
    fs.createReadStream() ---Metodo que crea un objeto fs.ReadStream
    fs.createWriteStream() ---Metodo que crea un objeto fs.WriteStream
    fs.openDir() ---Metodo que lee un directorio y proporciona un objeto fs.Dir que lo representa

writeFile() //Crear archivo

    writeFile(path, data, options, callback)
        - path = Ruta del archivo donde se debe escribir
        - data = Datos que se escribiran en el archivo
        - options = Opciones para configurar la salida
        - callback = Funcion ejecutada cuando se lanza el metodo

        EJEMPLO
            const content = "Contenido para el archivo";
            fs.writeFile("./texto.txt", content, "utf-8", (error) => {
                if (error) console.log(error)
            })

appenFile() //Añadir contenido

    appendFile(path, data, options, callback)

        EJEMPLO
            fs.appendFile("./text.txt", "Nuevo contenido", "utf-8", (error) => {
                if (error) console.log(error)
            })

readFile() //Leer un archivo

    readFile(path, options, callback)

        EJEMPLO
            fs.readFile("./texto.txt", "utf-8", (error, data) => {
                if(error) console.log(error)
                else console.log(data)
            })

watch() //Observar cambios en un directorio

    watch(path, options, listener)
        - listener = callback que recibe 2 argumentos (eventType,filename)

        EJEMPLO
            fs.watch("./folder", (eventType, filename) =>{
                console.log("Archivo modificado:", filename);
                console.log("Tipo de cambio:", eventType);
            })

watchFile() //Observar cambios en un archivo

    watchFile(path, options, listener)

        EJEMPLO
            fs.watchFile('./index.html', (curr, prev) => {
                console.log(`the current size: ${curr.size}`);
                console.log(`the previous size: ${prev.size}`);
            });

unwatchFile() //Dejar de Observar cambios en el archivo

    unwatchFile(path)

        EJEMPLO
            fs.watchFile('./index.html', (curr, prev) => {
                console.log("Before" curr.ctime, "After", prev.ctime);
                fs.unwatchFile("./index.html")
            });

stat() //Mostrar informacion de archivos o Directorios

    stat(path, options, callback)

        EJEMPLO
        fs.stat("./folder", (error, stats) => {
            if (error) console.log(error);
            else console.log(stats);
        })

readdir() //Leer un directorio

    readdir(path, options, callback)

    EJEMPLO
        fs.readdir("./", (error, files) => {
            if (error) console.log(error)
            else console.log(files)
        })

unlink() //Eliminar un archivo

    unlink(path, callback)

    EJEMPLO
        fs.unlink("./archivo.txt", error => {
            if (error) console.log(error)
            else console.log("Deleted")
        })

# Path

sep //Muestra los separadores de rutas del SO

    console.log(path.sep) //En Windows = \ y en POSIX = /

delimiter //Muestra el delimtador de rutas del SO

    console.log(path.delimiter) //En Windows = ; y en POSIX = :

join //Une rutas usando los separadores del SO

    console.log(path.join("folder1","folder2","archivo.txt"))

basename() //Muestra el archivo al final de una ruta

    basename(path, suffix)
        - suffix = Se utiliza para eliminar la extension del archivo

        console.log(path.basename("Code Testing/index.html"))

extname() //Devuelve la extension de un archivo

    extname(path)

        console.log(path.extname("index.html"))

dirname() //Devuelve la ruta donde se encuentra la carpeta actual

    dirname(path)

        console.log(path.dirname(__dirname)) //Devuelve la ruta de la carpeta actual
        console.log(__dirname) //Devuelve la ruta incluyendo la carpeta actual

# HTTP

## http.createServer()

- Sintaxis

    http.createServer([options], [requestListener])

- options //{ }

    connectionsCheckingInterval
        - Establece tiempo en ms para comprobar si se agoto el tiempo de espera (number)
    headersTimeout
        - Establece tiempo en ms para recibir los encabezados HTTP completos del cliente (number)
    requestTimeou
        - Establece tiempo de espera en ms para recibir la peticion del cliente (number)
    keepAliveTimeout
        - Establece tiempo en ms de actividad después de enviar la ultima respuesta (number)
    keepAliveInitialDelay
        - Establece un retraso inicial en ms antes de que se envíe el primer sondeo keepalive en un socket inactivo (number)
    uniqueHeaders
        - Lista de encabezados de respuesta que solo se deben enviar una vez (array)
    keepAlive
        - Habilita el mantenimiento de conexión en el zócalo inmediatamente después de recibir una nueva conexión entrante (bolean)
    joinDuplicateHeaders
        - Une los encabezados duplicados en una solicitud separados con coma en lugar de descartarlos (bolean)
    noDelay
        - Deshabilita el uso de la función inmediatamente después de recibir una nueva conexión entrante (bolean)
    requireHostHeader
        - Obliga al servidor a responder con un status 400 si la peticion no tiene encabezados (bolean)
    maxHeaderSize
        - Anula el valor de --max-http-header-size (number)

- requestListener //(req,res) => { }

    req
        - Guarda informacion de la peticion
        - req.method
        - req.headers //Muestra los encabezados de la peticion y sus valores
        - req.mode
        - req.credentials
        - req.cache
        - req.keepalive

    res
        - Maneja la respuesta a una peticion
        - res.statusCode
        - res.statusMessage
        - res.setHeader(name,value)
        - res.write

## http.request()

Sintaxis:
    http.request(url, [options], [callback])

- options //{ }

    hostname //"String" url donde se hace la peticion
    path //"String" Ruta especifica de la url
    method //"String" Establece el metodo de la peticion

    port //"Number" Puerto del servidor
    protocol //"String" Protocolo http
    headers //"Object" Establece los encabezados de la peticion
    auth //"String" Autorizacion del usuario

- callback //(res) => { }

    - Funcion que recibe como parametro informacion de la respuesta obtenida tras la peticion
    - Obtener y manejar la respuesta mediante eventos

## http.get()

Sintaxis:
    http.get(url, [options], [callback])

options //Acepta las mismas opciones que http.request()
callback //Igual que http.request()

## METODOS de http.Server => Servidor

server.close([callback])

    - Termina las conexiones que no estan enviando o esperando una respuesta
    - Impide al servidor aceptar nuevas conexiones

server.closeAllConnections()

    - Cierra todas las conexiones del sevidor

server.closeIdleConnections()

    - Cierra las conexiones que NO envían una solicitud
    - Cierra las conexiones que NO esperan una respuesta

server.listen([port], [host], [backlog], [callback])

    - port //Puerto de escucha, si se omite o es 0, se asigna el primer puerto sin uso
    - host //Url del servidor
    - backlog
    - callback //Funcion que se ejecuta al escuchar una peticion en el puerto

## Eventos

- Eventos http.Server ==> server.on()

    checkContinue,(req, res)-----Cada vez que se recibe una solicitud

    checkExpectation,(req, res)-----Cada vez que se recibe una solicitud con un encabezado

    clientError,(exeption, socket)-----Cuando la conexion obtiene un error

    close-----Cuando el servidor se cierra

    connect,(req, socket, head)-----Cuando se recibe un metodo CONNECT

    connection,(socket)-----Cuando se establece una nueva secuencia TCP

    dropRequest,(req, socket)-----Cuando las solicitudes en un socket alcanzan el umbral "server.maxRequestsPerSocket"

    request,(req, res)-----Cada vez que hay una solicitud

    upgrade,(req, socket, head)-----Cada vez que un cliente solicita una actualización HTTP

- Eventos de http.ClientRequest ==> request.on()

    'close'-----Cuando la peticion se completó o su conexion terminó antes de que finalice la respuesta
    'connect'-----Cuando se recibe un metodo CONNECT

    'continue'-----Cuando el servidor envía una respuesta HTTP '100 Continue'
    'information'-----Cuando el servidor envia una respuesta de codigo 1XX

    'finish'-----Cuando se ha enviado la solicitud
    'response'-----Cuando se recibe una respuesta a esta solicitud

    'socket'-----Garantiza que el evento se pasará a una instancia NET o subclase de STREAM (modulos)
    'timeout'-----Cuando se agota el tiempo de espera del socket subyacente debido a la inactividad

    'upgrade'-----Cada vez que un servidor responde a una solicitud con una actualización

- Eventos de http.ServerResponse ==> response.on()

    "close" : Se emite cuando la respuesta se ha completado
    "finish" : Se emite cuando se ha enviado la respuesta

# URL

- No es necesario importar el modulo URL
- Solo se necesita crear un objeto URL :

    const customUrl = new URL("http://example.com")

## Metodos y propiedades

- Propiedades (Devuelven informacion o Asignan valores a la url)

    url.host //Dominio
    url.hostname //Dominio

    url.href //Url serializada completa
    url.origin //Url serializada de origen

    url.hash //Hash la dirección
    url.pathname //Parte de la ruta de acceso

    url.password //Contraseña
    url.username //Nombre del usuario

    url.port //Puerto en que se encuentra
    url.protocol //Protocolo ; http,https,etc

    url.search //Consultas serializadas
    url.searchParams //Objeto con todas los parametros de las consultas serializadas

- Metodos

    url.toString() //Convierte la url en"string" similar a href
    url.toJSON() //Convierte la url en objeto JSON