# JS 7 Modo Estricto y ES Modules

- Modo Estricto
- ES6 Modules
- Politica CORS (cross-origin resource sharing)

- Control de Memoria
- Ciclo de vida de la memoria

- Debugging issues
- Debugging memori leaks
- Debugging Performance

# Modo Estricto

CARACTERISTICAS

    - No permite variables globales accidentales (sin declarar)
    - No permite acceder a valores undefined

    - Prohíbe asignar propiedades a un valor primitivo
    - Prohibe modificar una propiedad de tipo no-writable (solo lectura)
    - Prohibe agregar propiedades cuando usamos Object.preventExtensions()

    - Prohibe usar el metodo with()
    - Prohíbe la notación octal

    - Prohibe duplicar nombres de parametros
    - Prohibe la eliminacion de elementos no-eliminables

    - Arguments y Eval son keywords

Activar Modo Estricto

    //Para que todo el archivo JS trabaje en modo estricto:

        "use strict";

    //Para que sólo una funcion trabaje en modo estricto:

        function customFn (x) {
            "use strict";
            console.log("Ejemplo");
        }

# ES6 Modules

CARACTERISTICAS PRINCIPALES

    - Siempre funcionan en modo estricto
    - Siempre se ejecutan despues de que html se haya cargado completamente
    - No comparten sus funcionalidades entre modulos cargados desde html
    - Se ignoran los scripts externos duplicados
    - Cargar scripts externos de otro origen (dominio/protocolo/puerto) requiere encabezados CORS
    - El objeto global "this" es "undefined"
    - En el navegador, "import" debe tener rutas (relativa o absoluta)
    - Los navegadores antiguos no entienden type = "module", la alternativa, utilizar el atributo "nomodule"

SINTAXIS de Export

    export const customFn = (x) => console.log(x * x / 50);

SINTAXIS de Import

    //Importar todos los elementos que hayan sido exportados de un modulo

        import * as aliasDelModulo from "/modulo.js";

    //Importar uno o más elementos de un modulo

        import { customFn, otherFn } from "./module.js";

SINTAXIS en el archivo HTML

    //Se debe indicar en el archivo html que se va a usar un script tipo modulo

        <script src="index.js" type="module"></script>

# Politica CORS