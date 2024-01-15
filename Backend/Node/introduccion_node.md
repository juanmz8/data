# Node JS

    Detalles de Node
    Arquitectura Node
    Objeto Process
    CommonJS
    ECMAScript Modules
    Dependencias de Desarrollo/Produccion y Versionado

# Detalles de Node

- Al importar un modulo en CommonJS no es obligatorio escribir la extension .js / .cjs
- Al importar un modulo en ECMAScript es obligatorio escribir la extension .mjs

- En ECMAScript se puede usar Await sin necesidad de una funcion Async
- En CommonJS no se puede usar Await sin crear una funcion Async

- Siempre debe usarse "globalThis", no existe window

- Crear un servidor con Node puro implica obtener los datos de las peticiones por "chunks" y esperar a que la respuesta este completa, en cada peticion

# Arquitectura Node

Elementos de la arquitectura:

    - V8 engine: Interprete de Javascript.

    - Libuv: Software multiplataforma para operaciones I/O (In/Out) basada en eventos asincronos

    - Event Queue: Estructura que ALMACENA y PROCESA eventos, basada en el Principio "First-In-First-Out"

    - Event loop: Estructura de control que administra y coordina la ejecución de eventos y tareas.

    - Worker threads: Grupo de hilos que ayudan con el acceso de archivos, criptografía, compresiones o búsquedas de DNS.

# Objeto Process

- Es una variable global que ofrece informacion y utilidades sobre el proceso que está ejecutando el script

METODOS

    process.env() //Variables de entorno del sistema
    process.cwd() //Directorio de trabajo actual del proceso
    process.exit(n) //Finaliza el proceso de Node.js sincronamente con un código de salida
    process.argv() //Argumentos proporcionados al ejecutar el script desde la linea de comandos
    process.pid() //ID del proceso actual

    process.stdout() //Proporciona un flujo de salida estandar asincrono para datos
    process.stderr() //Proporciona un flujo de salida estandar asincrono para errores
    process.chdir(path) //Cambia el directorio actual, util para simplificar rutas relativas en proyectos grandes
    process.kill(pid, [signal]) //Envia señales de Sistema Operativo a un proceso especificado con su ID desde otro proceso o CLI

# CommonJS

EXPORTAR

    module.exports = console.log("Hello world");

    module.exports = fnCustom1;

    module.exports = { fnCustom1, fnCustom2, fnCustom3 }

IMPORTAR modulos personalizados (libreria local)

    const calculator = require("./calculator.js");

IMPORTAR modulos de node_modules (libreria externa)

    const libreria = require("nombreDelibreria")

IMPORTAR modulos nativos de node (core modules)

    const os = require("node:os")

Variables globales en CommonJS

    __dirname //Ruta completa hasta la carpeta
    __filename //Ruta completa hasta el archivo

Sistema de Modulos especificado en "package.json"

    "type": "commonjs" //Sistema por defecto de Node
    "type": "module" //Sistema ECMAScript

Forzar tipo de archivo

    Independiente del sistema de Modulos usado en "package.json"

        archivo.cjs
        archivo.mjs

# ECMAScript Modules

EXPORTAR

    export const suma = (n,n2) => console.log(n + n2);

IMPORTAR

    import suma from "./archivo.js"

    import os from 'node:os'

El sistema "ES Module" puede importar archivos .cjs sin necesidad de "require"

# Dependencias de Desarrollo y Produccion

Instalar una dependencia de Desarrollo con la Terminal

    npm i UnaDependencia -D
    npm i UnaDependencia --development

//Configuracion package.json para usar nodemon
    "dev":"nodemon index.js"

Versionado Semantico (1.45.3 ejemplo)

X.Z.Y

X: MAJOR, cuando rompe la compatibilidad con versiones anteriores
Z: MINOR, cuando se añaden nuevas funcionalidades
Y: PATCH, cuando se solucionan bugs