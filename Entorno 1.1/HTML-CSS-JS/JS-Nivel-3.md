# JS Nivel 3

- Funcion IIFE
- Funcion Anonimas
- Funcion Recursivas
- Funciones Anidadas

- DOM

- Eventos

- JSON y JSON LD
- Async y Await
- AJAX
- API REST
- Estructura Map y Set

# Funcion IIFE (Immediately Invoked Function Expression)

- Funcion ejecutada inmediatamente cuando se definen
- Tambien conocida como funcion SEAF (Self-Executing Anonymous Function)

Sintaxys

    (function () {
        console.log("Esta funcion se ejecuta inmediatamente");
    })();

Se basa en 2 partes:

- La encapsulacion en (parentesis) impide ingresar variables que estan fuera del IIFE, ademas las variables del IIFE tampoco contaminan al scope Global

- Los (parentesis) del final indican al motor JavaScript que la funcion se debe ejecutar inmediatamente

Asignar una funcion IIFE a una variable almacenará el resultado, no su definicion de funcion

# Funcion Anonima

- Similitud con funciones IIFE
- Son funciones sin nombre, comunmente se asignan a variables

    let mensaje = function() {
        console.log('Soy una función anónima');
    };

    let mensaje2 = () => console.log('Función anónima');

- Una funcion anonima encerrada en (parentesis) solo devuelve el objeto Function

# Funcion Recursiva

- Es una funcion que se llama a si misma hasta que se cumpla una condicion
- Recibe 2 entradas, un caso base (finaliza) y un caso recursivo (continúa)
- Se puede usar para remplazar el uso de loops

# Funciones Anidadas

Ejemplo:

    function A () {
        function B () {
            function C () {
                //code
            }
        }
    }

- Si hay variables con el mismo nombre en varios bloques, estas serán unicas y solo disponibles en su propio bloque

- El acceso a los datos ocurre desde dentro :
- "C" puede acceder a "B" y ésta a su vez en "A"
- "C" tambien puede acceder en "A" gracias a "B"

# DOM
