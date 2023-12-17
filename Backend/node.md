Detalles de Node
Arquitectura Node

CommonJS
ECMAScript Modules

Modulo OS
Modulo FS

# Detalles de Node

El objeto global en Node es "globalThis"

    Siempre debe usarse "globalThis" para referirse a window

Iniciar npm :

    npm init (en la terminal)

Al usar CommonJS no es necesario especificar la extension del archivo js
Al usar ECMAScript es obligatorio usar la extensnion del archivo .mjs

# Arquitectura Node

Elementos de la arquitectura:

    - V8 engine: Interprete de Javascript.

    - Libuv: Software multiplataforma para operaciones I/O (In/Out) basada en eventos asincronos

    - Event Queue: Estructura que ALMACENA y PROCESA eventos, basada en el Principio "First-In-First-Out"

    - Event loop: Estructura de control que administra y coordina la ejecución de eventos y tareas.

    - Worker threads: Grupo de hilos que ayudan con el acceso de archivos, criptografía, compresiones o búsquedas de DNS.

# CommonJS

EXPORTAR

    module.exports = console.log("Hello world");

    module.exports = fnCustom1;

    module.exports = { fnCustom1, fnCustom2, fnCustom3 }

IMPORTAR modulos personalizados (libreria local)

    const { calculator } = require("./calculator.js");

IMPORTAR modulos de node_modules (libreria externa)

    const { libreria } = require("nombreDelibreria")

IMPORTAR modulos nativos de node (core modules)

    const { os } = require("node:os")

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

    import { suma } from "./archivo.js"

    import os from 'node:os'

El sistema "ES Module" puede importar archivos .cjs sin necesidad de "require"

# Modulo Operating System (OS)

- Modulo Nativo de Node JS
- Proveé información sobre el hardware, sistema operativo y usuario

Metodos

    arch() //Arquitectura del procesador (x86/x64)
    cpus() //Informacion de nucleos e hilos del procesador
    machine() //Tipo de maquina (arm, arm64, x86_64, etc)

    freemem() //Cantidad de memoria libre del SO en bytes
    totalmem() //Cantidad total de memoria del SO en bytes
    uptime() //cantidad de segundos que lleva funcionando la computadora
    loadavg() //Array del promedio de tiempo de carga en 1,5 y 15 minutos

    userInfo() //Informacion del usuario
    hostname() //Nombre de la maquina

    homedir() //Ruta del usuario actual
    tmpdir() //Ruta de la carpeta temporal asignada

    platform() //Plataforma del SO
    type() //Identificacion del SO

    version() //Version del SO
    release() //Version completa del SO

# Modulo File system (FS)