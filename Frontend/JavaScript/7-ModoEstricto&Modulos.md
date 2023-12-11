# JS 7 Modo Estricto y Modulos

- Modo Estricto
- Modulos en JS Nativo
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

# Modulos en JS Nativo

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

    //Se puede exportar codigo en linea o usar su nombre de referencia

        export const customFn = (x) => console.log(x * x / 50);

        export { customfn };

SINTAXIS de Import

    //Importar todos los elementos que hayan sido exportados de un modulo

        import * as aliasOfModule from "/folder/module.js";

    //Llamar cualquier elemento importado mediante el alias del modulo

        aliasModule.customFn(10);

    //Importar uno o más elementos de un modulo

        import { customFn, otherFn } from "/folder/module.js";

SINTAXIS en el archivo HTML

    //Se debe indicar en el archivo html que se va a usar un script tipo modulo

        <script src="index.js" type="module"></script>

# Politica CORS