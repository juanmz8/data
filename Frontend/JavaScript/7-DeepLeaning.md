# JS 7 Deep Learning

- Modulos en JS
- ECMAScript Modules
- CommonJS

- Control de Memoria
- Ciclo de vida de la memoria
- Garbage Collection

- Modo estricto

- Expresiones Regulares

- ArrayBuffer

- Explicit Blinding
- call
- apply
- blind

- Herramientas de desarrollador
- Debugging issues
- Debugging memori leaks
- Debugging Performance

# Expresiones Regulares

    - Se usa para realizar funciones de busqueda y reemplazo de las coincidencia de patrones en el texto
    - Un objeto RegExp es un patron con propiedades y metodos
    - Hay dos formas de crear un objeto RegExp :

NOTACION LITERAL

    Sus parametros se encierran entre barras y no utilizan comillas

    let expRegular = /ab+c/i

        - La notacion literal da como resultado la compilacion de la expresion regular cuando se evalua la expresion.
        - Usarla cuando la expresion regular permanecera constante.
        - Por ejemplo cuando es usada en un bucle, la expresión regular no se volvera a compilar en cada iteracion.

FUNCION CONSTRUCTORA

    Sus parametros no se cierran entre barras pero utilizan comillas

        let expRegular= new RegExp("ab+c" , "i")
        let expRegular = new RegExp(/ab+c/, "i")    //A partir de ECMAScript 6

        - El constructor da como resultado la compilacion en tiempo de ejecucion
        - Usarla cuando el patron de expresion regular cambiara o cuando no conozcas el patron y lo obtienes de otra fuente
        - Por ejemplo la entrada del usuario

Métodos de RegExp

        exec()
            - Ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica
            - Devuelve el resultado como array, o null

        test()
            - Ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada
            - Devuelve true o false

Métodos de String que se usan con RegExp

        match()
            - Devuelve un arreglo que contiene todas las coincidencias, incluidos los grupos de captura, o null si no se encuentra ninguna coincidencia

        matchAll()
            - Devuelve un iterador que contiene todas las coincidencias, incluidos los grupos de captura

        replace(), replaceAll(), search(), split()

FLAGS

    g = Encuentra todas las coincidencias, en lugar de deternerse con la primera
    i = Encuentra coincidencias sin distincion entre mayúsculas y minúsculas
    m = Encuentra coincidencia de varias lineas

CONVERSION DE CARACTER ESPECIAL A LITERAL

    - Se utiliza \ y luego el caracter especial:

        /\/ejemplo\//
            - Para buscar el string "/ejemplo/"

        /[A-Z]:\\/
            - Para encontrar el string "C:\"
            - La primer barra invertida le indica a la segunda que se transforme en literal

GUARDAR SUBCADENA

    -Los paréntesis alrededor de cualquier parte del patrón de expresión regular hacen que se recuerde esa parte de la subcadena coincidente
    - Una vez reconocida, la subcadena se puede recuperar para otro uso

SOPORTES

    [abc] = Encuentra cualquier caracter indicado
    [^abc] = Encuentra cualquier caracter que no este indicado
    [0-9] = Encuentra cualquier caracter digito entre los indicados
    [^0-9] = Encuentra cualquier caracter que no sea digito
    [x|y] = Encuentra cualquiera de las alternativas especificadas

CLASES DE CARACTERES

    - Las clases distinguen tipos de caracteres, por ejemplo entre letras y dígitos

        \b : Indica un limite, no empieza ni termina de buscar la coincidencia en medio de una palabra
        \d : Busca cualquier digito, equivalente a [0-9]
        \D : Busca cuualquier caracter que no sea digito, equivalente a [^0-9]
        \w : Busca cualquier caracter del alfabeto latino basico, equivalente a [A-Za-z0-9_]
        \W : Busca cualquier caracter que no sea del alfabeto latino basico, equivalente a [^A-Za-z0-9_]
        \s : Busca un solo caracter de espacio en blanco
        \S : Busca un solo caracter que no sea un espacio en blanco
        \n : Coincide con un salto de línea

SINTAXIS

    {numero}
        - Se usa para indicar la cantidad de apariciones
        Por ejemplo /d{4}/ , busca 4 caracteres

    {numero,}
        - Se usa para indicar la cantidad de veces minima de apariciones
        - Por ejemplo /a{2,}/ busca minimo una coincidencia de 2 "a"

    {numero, maximo}
        - Se usa para indicar la cantidad de veces minima de apariciones y maxima
        - Por ejemplo /a{1,2}/ encuentra de 1 a 2 "a" seguidas

    * : Concuerda 0 o mas veces con el elemento anterior, por ejemplo /bo*/ reconoce en el string "boooo"

    + : Encuentra 1 o mas veces el elemento anterior, por ejemplo /a+/ encuentra la "a" en "candy" y todas las "a" en "caaaandy"

    ? : Encuentra 0 o 1 vez el elemento anterior, por ejemplo /do?/ encuentra "do" en mundo"

    [] : Se usa para establecer condiciones, por ejemplo /[a-c]/ , busca los caracteres a,b y c

# ArrayBuffer

ArrayBuffer

    Se usa para representar un buffer genérico, de datos binarios brutos con una longitud específica

    Tiene una longitud fija, no podemos aumentarla ni disminuirla.
    Ocupa exactamente ese espacio en la memoria.
    Para acceder a bytes individuales, se necesita otro objeto "view", no buffer[index]

        Ejemplo:
```js
        const buffer = new ArrayBuffer(16); // crea un buffer de 16 bytes
        console.log(buffer.byteLength); // 16
```

TYPED ARRAY

    Un objeto view no almacena nada por sí mismo. Son “gafas” que le dan una interpretación a los bytes almacenados en el ArrayBuffer.

    El término común para todas estas vistas (Uint8Array, Uint32Array, etc) es TypedArray. Comparten el mismo conjunto de métodos y propiedades.

Por ejemplo:

        Uint8Array : trata cada byte del ArrayBuffer como un número separado, con valores posibles de 0 a 255 (un byte es de 8 bits, por lo que sólo puede contener esa cantidad)
        Este valor se denomina “entero sin signo de 8 bits”.

        Uint16Array : trata cada 2 bytes como un entero, con valores posibles de 0 a 65535.
        Es lo que se llama un “entero sin signo de 16 bits”.

        Uint32Array : trata cada 4 bytes como un entero, con valores posibles de 0 a 4294967295.
        Eso se llama “entero sin signo de 32 bits”.

        Float64Array : trata cada 8 bytes como un número de punto flotante con valores posibles desde 5.0x10-324 hasta 1.8x10308.

```js
        const view = new Uint32Array(buffer); // trata el buffer como una secuencia de enteros de 32 bits
        console.log(Uint32Array.BYTES_PER_ELEMENT); // 4 bytes por entero
```

DataView

    DataView es una vista especial superflexible “no tipada” sobre ArrayBuffer. Permite acceder a los datos en cualquier desplazamiento en cualquier formato.
    DataView es genial cuando almacenamos datos de formato mixto en el mismo buffer. Por ejemplo, cuando almacenamos una secuencia de pares (entero de 16 bits, flotante de 32 bits), DataView permite acceder a ellos fácilmente.

RESUMEN

    ArrayBuffer es el objeto central, una referencia al área de memoria contigua de longitud fija.
    Para hacer casi cualquier operación sobre ArrayBuffer, necesitamos una vista.

    Puede ser un TypedArray:
        Uint8Array, Uint16Array, Uint32Array : para enteros sin signo de 8, 16 y 32 bits.
        Uint8ClampedArray : para enteros de 8 bits, los “sujeta” en la asignación.
        Int8Array, Int16Array, Int32Array : para números enteros con signo (pueden ser negativos).
        Float32Array, Float64Array : para números de punto flotante con signo de 32 y 64 bits.
    O una DataView : la vista que utiliza métodos para especificar un formato, por ejemplo getUint8(offset).

    En la mayoría de los casos creamos y operamos directamente sobre arrays tipados, dejando el ArrayBuffer a cubierto, como “denominador común”. Podemos acceder a él como .buffer y hacer otra vista si es necesario.

    También hay dos términos adicionales, que se utilizan en las descripciones de los métodos que operan con datos binarios:

        ArrayBufferView es un término paraguas para todos estos tipos de vistas.
        El término BufferSource es un término general para ArrayBuffer o ArrayBufferView.

# Modo estricto

El modo estricto tiene varios cambios en la semántica normal de JavaScript:

    Elimina algunos errores silenciosos de JavaScript cambiándolos para que lancen errores.
    Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones: a veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto.
    Prohíbe cierta sintaxis que probablemente sea definida en futuras versiones de ECMAScript.

Invocacion

    Para invocar el modo estricto en todo un script, escribe exactamente "use strict"; (o 'use strict';) antes de cualquier otra expresión.

Detalles

    Concatenar scripts no produce problemas si todos están en modo estricto (o si todos están en modo no estricto). El problema es mezclar scripts en modo estricto con scripts en modo no estricto. Por eso se recomienda habilitar el modo estricto a nivel de función solamente (al menos durante el periodo de transición de un programa).

    Otra opción es envolver el contenido completo del script en una función y tener esa función externa en modo estricto. Así se elimina el problema de la concatenación, pero entonces tienes que hacerte cargo de exportar explícitamente las variables globales fuera del ámbito de la función.


Funcion Estricta

```js
    function strict() {
        // Sintaxis del modo estricto a nivel de función
      "use strict";
      function nested() {
          return "¡Y yo también!";
      }
      return "¡Hola!  ¡Soy una función en modo estricto!  " + nested();
    }

    function notStrict() {
        return "Yo no soy estricto.";
    }
```

Fuincionamiento del Modo Estricto

El modo estricto trata las equivocaciones como errores, para que se puedan descubrir y subsanar inmediatamente.

- Hace imposible crear variables globales por accidente; cualquier asignación que produzca variables globales por accidente lanzará un error

- Lanza una excepción en asignaciones que de otro modo fallarían silenciosamente

- Lanza una excepción al intentar eliminar propiedades no eliminables (mientra que en código normal el intento no tendría ningún efecto)

- La versión de modo estricto anterior a Gecko 34 requiere que todas las propiedades nombradas en un objeto sean únicas. En código normal se pueden duplicar nombres, siendo el último el que determina el valor de la propiedad; Duplicar nombres de propiedades es un error de sintaxis en modo estricto

- Requiere que los nombres de los parámetros de una función sean únicos; duplicar nombres de argumentos es un error de sintaxis.

- En modo estricto ECMAScript 5 se prohíbe la notación octal (La notación octal no es parte de ECMAScript 5, pero está soportada en todos los navegadores al poner como prefijo un cero al número)

- El modo estricto en ECMAScript 2015 prohíbe establecer propiedades en valores primitivos.