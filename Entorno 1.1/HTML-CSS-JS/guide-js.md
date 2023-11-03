# INDICE

**VARIABLES**
- Declaracion de Variables
- Naming rules
- Hoisting
- Scopes de Variables

**OPERADORES**
- Asignacion
- Comparacion
- Aritmeticos
- Logico

**TIPOS DE DATOS**
- Datos Primitivos
- Operador typeof

**CONVERSION DE TIPOS**
- Coercion
    - Implicita
    - Explicita

**OBJETOS**
- Conceptos basicos
- This
- Get
- Set
- window/globalThis
- Metodos de Object
- Prototipos y Herencia

**PROCESAMIENTO DE TEXTOS**
- Template strings
- Metodos de String
- RegExp

**OBJETOS NUMERICOS**
- Number
- Math
- Date

**FUNCIONES GLOBALES**
- eval()
- isFinite()
- isNaN()
- parseFloat()
- parseInt()
- encodeURI()
- decodeURI()
- encodeURIComponent()
- decodeURIComponent()

**ERRORES**
- EvalError
- InternalError
- RangeError
- ReferenceError
- SyntaxError
- TypeError
- URIError
- Error()

**RUTAS WEB**
- Absolutas
- Relativas
- URI

**ARRAY**
- Desestructuracion de Array
    - Asignacion de valores básica
    - Asignacion de valores por separado
    - Asignacion de valores predeterminados
    - Intercambio de variables
- Metodos de Array

**ESTRUCTURA DE DATOS**
- Map
- Weak Map
- Set
    - size
    - add
    - clear
    - delete
    - has
- Weak Set

**Spread Syntax**
- Llamadas de funciones
- Arrays literales o strings
- Objetos literales

**JSON**
- JSON
- JSONLD

**ArrayBuffer**
- Vista/TypedArray
- DataView
- Resumen

**Loops**
- while
- do while
- for
    - Break
    - Continue
    - Identififcador Label
- for of
- for in

**CONDICIONALES**
- If, else
- Switch
- Condicional Ternario

**Exception Handling**
- Sentencia Trow     ----------------------------------
- Try/Catch/Finally  ----------------------------------
- Objetos de Error   ----------------------------------

**FUNCIONES**
- Function
- Arrow Function
- Funcion Anonima
- IIFE
- Funcion Recursiva
- Funcion Anidada
- Parametros predeterminados
- Parametros Rest ----------------------------------
- Objeto Argument ----------------------------------

**Modo estricto**
- Invocar modo Estricto
- Detalles
- Funcion Estricta
- Fuincionamiento del Modo Estricto

**This keyword**
- Explicit Blinding
    - call
    - apply
    - blind
- This
    - en metodos
    - en funciones
    - en eventos
    - en arrow function

**Javascript Asincrono**
- setTimeout
- setInterval
- Callbacks
    - Callback Hell
- Promises
    - Async / Await

**APIs**
- XMLHTTPRequest
- Fetch

**Clases**
- Iteradores y Generadores
- Modulos en JS
    - CommonJS
    - Modulos ECMAScript

**Control de Memoria**
- Ciclo de vida de la memoria
- Garbage Collection

**Herramientas de desarrollador**
- Debugging issues
- Debugging memori leaks
- Debugging Performance

# VARIABLES

DECLARACION DE VARIABLES

    - var:
        - Ambito (Global)
        - Son procesadas antes de que cualquier otro código sea ejecutado.
        - Se pueden re-declarar

    - let:
        - Ambito (block-scope)
        - No es necesario que su valor este definido
        - Se pueden re-declarar
        - Se utiliza comúnmente dentro de sentencias de flujo

    - const:
        - Ambito (block-scope)
        - Devuelve error si su valor no esta definido
        - Se puede re-declarar unicamente si está en un scope distinto
        - Se recomienda su nombre en mayusculas para diferenciarlas

NAMING RULES

    Las variables globales se escriben al principio
    En Variables usar camelCase
    En constantes usar Mayusculas y _ para separar palabras
    En boolean usar prefijos
    En funciones y Metodos usar verbos
    En clases usar PascalCase
    En Web components usar PascalCase
    En declaraciones Privadas usar _
    No se usa -

HOISTING

    En el contexto de ejecucion, las variables son movidas al comienzo del codigo



```js
//Ejemplo y explicacion

    //console.log crea la variable x, pero no la inicializa (no le da un valor)
        Function (){
            console.log(x); //undefined
            let x = 10;
            console.log(X) //10
        };

    //esto se entiende como:
        Function (){
            let x
            console.log(x); //Undefined
            x = 10;
            console.log(X) //10
        };
```

SCOPES DE VARIABLES

    Local Scope
        Las variables solo son accesibles dentro de su bloque

    Global Scope
        Las variables declaradas por fuera de los bloques de funciones son accesibles globalmente

    Automaticamente Global

    Las variables inicializadas pero sin declaracion se convierten en una variable global

Ejemplo:
```js
            hello();

            function hello() {
                sayHello = "Hi"; //Sin declarar === sin let,const o var,es automaticamente global
            };
```

# OPERADORES

ASIGNACION

    Asignación	                                            x = y     es decir  x = y
    Asignación de suma	                                    x += y    es decir  x = (x + y)
    Asignación de resta	                                    x -= y    es decir  x = (x - y)
    Asignación de multiplicación                            x *= y    es decir  x = (x * y)
    Asignación de división	                                x /= y    es decir  x = (x / y)
    Asignación de residuo	                                x %= y    es decir  x = (x % y)
    Asignación de exponenciación	                        x = y     es decir  x = (x  y)

COMPARACION

    Igual valor (==)
    Igual valor y tipo (===)

    Distinto valor (!=)
    Distinto valor y tipo (!==)

    Mayor (>)
    Mayor o igual (>=)

    Menor (<)
    Menor o igual (<=)

ARITMETICO

    Post Incremento (a++)
    Pre Incremento (++a)

    Post Decremento (a--)
    Pre  Decremento (--a)

LOGICO

    AND (&&)
    OR (||)
    NOT (!)

# TIPOS DE DATOS

DATOS PRIMITIVOS

    undefined = Una variable a la que no se le ha asignado un valor

    bolean = Valor Boleano

    number = Valor numerico

    string = Valor textual

    bigInt = Puede almacenar y operar en números enteros grandes más allá del límite seguro de enteros para Numbers
    Se crea agregando n al final de un número entero

    symbol = Valor Unico e inmutable y se puede utilizar como key de una propiedad de objeto
    Se crea utilizando Symbol() y opcionalmente un string dentro

    null = valor nulo o vacio de manera intencional

OPERADOR typeof

    El operador typeof devuelve una cadena que indica el tipo del operando sin evaluarlo

    Recibe una cadena, variable, palabra clave u objeto para el que se devolverá su tipo

    Los paréntesis son opcionales

# CONVERSION DE TIPOS

COERCION

    Implicit
        Ocurre de manera automatica, Javascript elige un tipo de dato para llevar a cabo la operacion
        No siempre se obtienen los resultados esperados
        Siempre se devuelve un string si uno de los datos es de ese tipo
        Si no hay string se intenta realizar una conversion numerica
        Con operadores logicos intentara obtener datos booleanos

    Explicit
        Es el proceso en donde se define el tipo de dato que se desea convertir
        Se utilizan las siguientes funciones:

            String()
            Number()
            Boolean()

# OBJETOS

CONCEPTOS BASICOS

    - Una propiedad es un conjunto = key:value
        - key = string sin comillas
        - value = cualquier cosa

    - Propiedades Accessors = funciones para obtener y asignar
        - get = Funcion sin parametros, obtiene un valor existente
        - set = Funcion con parametros, modifica un valor existente o de entrada

    - Key de varias palabras = se escribe entre comillas
    - Notacion de punto y Notacion de corchete
    - Abreviatura al asignar variables como propiedades en el objeto(no hace falta escribir su value)

OPERADORES ESPECIALES

    in---Determina si una propiedad existe en el objeto

        console.log("age" in person)

    delete---Elimina la propiedad del objeto

        delete person.history;

OBJETO LITERAL Y CONSTRUCTOR

    const userLiteral = {};
    const userConstructor = new Object();

## This

    Hace referencia al objeto en cuestion, al dueño de la llamada.
    Solo sirve con funciones tradicionales.

## get

    Es una funcion que obtiene un valor.
    La funcion es llamada como una propiedad simple y no como metodo.

## set

    Es una funcion que recibe parametros asignados, para configurar datos.
    La funcion es llamada como una propiedad simple pero se le asigna un valor para configurarlo (operador de asignacion =).

## Global This

    - El objeto global contendrá variables que deberian estar disponibles en todas partes por ejemplo objetos Array, valores especificos del entorno o como window.innerHeight (la altura de la ventana en el navegador)

    - El objeto global tiene un nombre universal: globalThis, pero con mayor frecuencia se hace referencia a nombres especificos del entorno, "window" en el navegador y "global" en node.js

    - Deberiamos almacenar valores en el objeto global solo si son verdaderamente globales para nuestro proyecto y manteniendo su uso al minimo

    - En el navegador, a menos que estemos utilizando modulos, las funciones globales y las variables declaradas con var se convierten en propiedades del objeto global

    - Para que nuetro codigo este preparado para el futuro y sea facil de entender debemos acceder a las propiedades del objeto global directamente como window.x

## Metodos de Object

    Object.assign()
        Copia las propiedades de uno o más objetos, y los fusionia, tambien se puede usar spread ...

    Object.values()
        Devuelve un array que contiene todos los valores correspondientes a las propiedades enumerables de tipo string pertenecientes a un objeto dado

    Object.keys()
        Devuelve un array que contiene todos los nombres de las propiedades enumerables de tipo string pertenecientes al objeto dado

    Object.entries()
        Devuelve un array que contiene todos los pares [key, value] de las propiedades enumerables en formato string que le pertenecen a un objeto dado

    Object.fromEntries()
        Devuelve un nuevo objeto de los pares iterables [key, value]. (Este método hace lo contrario a Object.entries)

    Object.freeze()
        Impide borrar, cambiar y agregar propiedades al objeto

    Object.isFrozen()
        Determina si un objeto se congeló o no

    Object.seal()
        Impide la creacion de propiedades pero permite la modificacion de propiedades existentes

    Object.create()
        Crea un nuevo objeto con el objeto prototipal especificado y sus propiedades.

## PROTOTIPOS

    - Object.prototype es el prototipo de todos los objetos en JavaScript.
    - Es el final de la cadena de prototipos.

    - Las propiedades y metodos son accecibles por la cadena de prototipos.
    - La cadena de prototipos solo se recorre cuando se lee una propiedad o metodo, no cuando se crea, elimina o modifica.
    - Los metodos y propiedades son definidos en la propiedad "prototype" que reside en la funcion constructora del objeto, no en la instancia misma del objeto.

CREAR PROTOTIPOS

```js
        const myPrototype = { //Objeto principal (prototipo)
            type : test
        };

        const simpleObject = Object.create(myPrototype); //Objeto nuevo que hereda del prototipo indicado
```

# PROCESAMIENTO DE TEXTO

Template strings

    - Por defecto concatena todas las partes para devolver una unica cadena
    - Permite la interpolacion de expresiones
    - Se pueden anidar incrustandose en una expresion

Metodos de String

    lenght    //Devuelve la cantidad de caracteres
    charAt([a])    //Devuelve el caracter especificado, por defecto es 0
    replace(x,y)    //Elimina la primer coicidencia y la reemplaza
    toLowerCase()    //Devuelve la cadena en minúsculas. No la cambia
    toUpperCase()    //Devuelve la cadena en mayúsculas. No la cambia

    search(a)    //Devuelve la posicion de la primer coincidencia
    match(x)    //Devuelve la posicion de la primer coincidencia

    indexOf(a,[b])
        //Devuelve la posicion de la primer coincidencia
        //Su segundo parametro indica la posicion donde empezara a buscar
        //Devuelve -1 si no se encuentran coincidencias

    lastIndexOf(a[,b])
        //Devuelve la posicion inicial de la ultima coincidencia
        //El parametro B indica desde donde empezar a contar hacia la izquierda

    includes(a[,b])
        //Devuelve boleano si se incluye o no el valor del parametro
        //El parametro B indica desde donde empieza a contar

    slice(a,[b])
        //Extrae los caracteres entre ambos parametros sin incluir el ultimo
        //Si recibe numeros negativos contará desde el final
        //Si recibe solo un parametro extraerá los caracteres hasta el final
        //Su segundo parametro es opcional

    substring(a,[b])
        //Extrae los caracteres entre ambos parametros sin incluir el ultimo
        //No recibe parametros negativos
        //Si el parametro A es mayor que el B, los parametros intercambian su lugar
        //Si el argumento es menor que 0 o es NaN, se trata como si fuese 0
        //Si recibe solo un parametro extraerá los caracteres hasta el final
        //Su segundo parametro es opcional

    split(a[,b])
        //Divide un string en un array
        //Parametro A es el separador que debe coincidir en el string, donde se cortaran las sub cadenas
        //Parametro B es el limite de substrings que se generan
        //Si ningun parametro se especifica, devuelve el string en forma de array
        //Si Parametro A esta vacio, devuelve cada caracter como string del array

    startsWith(a[,b])
        //Devuelve boleano si empieza o no con el valor del parametro A
        //El parametro B indica la posicion desde la que empieza a contar

    endsWith(a[,b])
        //Devuelve boleano si finaliza o no con el valor del parametro A
        //El parametro B indica la longitud que puede tener la coincidencia, empezando desde el principio

    repeat(a)    //Repite la cadena cuantas veces le indiquemos
    trim()    //Elimina los espacios del principio y final del String
    concat(a[,b])    //Concatena dos o mas strings mediante el uso de comas

    charCodeAt(x)    //Devuelve el valor unicode del caracter en determinada posicion
    fromCharCode(x)    //Convierte valores unicode en caracteres

## RegExp

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

# OBJETOS NUMERICOS

METODOS DE NUMBER

        Number.isNaN()
            Determina si el valor es NaN

        Number.isFinite()
            Determina si el valor es un numero infinito

        Number.isInteger()
            Determina si un numero es entero

        Number.isSafeInteger()
            Determina si el valor pasado es un entero seguro (número entre -(253 - 1) y 253 - 1)

        Number.parseFloat()
            El valor es el mismo que parseFloat () del objeto global

        Number.parseInt()
            El valor es el mismo que parseInt() del objeto global

PROPIEDADES DE NUMBER

    Number.prototype
        Permite la adición de propiedades a un objeto Number

    Number.EPSILON
        El intervalo más pequeño entre dos números representables

    Number.MAX_SAFE_INTEGER
        El número máximo representable en JavaScript (253 - 1)

    Number.MIN_SAFE_INTEGER
        El número mínimo representable en JavaScript (-(253 - 1))

    Number.MAX_VALUE
        El número más grande representable

    Number.MIN_VALUE
        El número más pequeño representable, es el número positivo más cercano a cero que no sea cero

METODOS DE MATH

    Math.random()---Devuelve un número pseudo-aleatorio entre 0 y 1

    Math.round(x)---Devuelve un entero redondeando al mas cercano
    Math.ceil(x)---Devuelve un entero redondeando al mayor
    Math.floor(x)---Devuelve un entero redondeando al menor

    Math.max([x[, y[, …]]])---Devuelve el numero mas grande a 0
    Math.min([x[, y[, …]]])---Devuelve el numero más pequeño

    Math.trunc(x)---Devuelve un entero eliminando los numeros despues de la coma
    Math.pow(x,y)---Devuelve el resultado de X elevado por Y

    Math.sign(x)---Devuelve el signo del numero
    Math.abs(x)---Devuelve el numero sin su signo

METODOS DE DATE

    Date.now()

# FUNCIONES GLOBALES

    eval()
        - Evalua un string, si no es un string devuelve el argumento sin cambios
        - Ejecuta codigo el cual es pasado con los privilegios de quien llama
        - Si ejecuta eval con un string que podria ser afectado por un elemento malicioso, podria terminar ejecutando codigo malicioso dentro de la computadora del usuario con los permisos de su pagina o extension

    inFinite()
        - Evalua un argumento, si es necesario lo convierte a number
        - Si el argumento es NaN, infinito positivo o infinito negativo, devuelve false, de otro modo devuelve true

    isNaN()
        - Determina cuando un valor es NaN o no
        - Es util ya que el valor NaN no puede ser probado correctamente con operadores de igualdad

    parseFloat()
        - Analiza un argumento (string) y devuelve un numero de coma flotante
        - Si el argumento no es una cadena se convierte automaticamente en una
        - Devuelve NaN si el primer caracter que no es un espacio en blanco no se puede convertir a number

    parseInt()
        - Convierte un argumento (string) y devuelve un entero

    encodeURI()
        - Reemplaza todos los caracteres excepto los siguientes
        - No puede formar solicitudes correctas HTTP GET y POST, porque "&", "+" y "=" no estan codificados

            ; : / ? @ & $
            + - = _ . , ! ~ * ' ( )
            A-Z a-z 0-9

    decodeURI()
        - Decodifica un URI previamente creado por encodeURI() o por una ruta similar
        - No decodifica secuencias de escape que no se puedan haber introducido por encodeURI

    encodeURIComponent()
        - Reemplaza todos los caracteres ecepto los siguientes
        - Se usa en los campos ingresados por el usuario desde formularios, enviados por POST al servidor

            - _ . ! ~ * ' ( )
            A-Z a-z 0-9

    decodeURIComponent()
        - Decodifica un URI previamente creado por encodeURIComponent() o por una ruta similar

# ERRORES

    EvalError
        - Ocurre con respecto a la funcion global eval()

    InternalError
        - Ocurre cuando se produce un error interno en el motor de javascript, por ejemplo "demasiada recursividad"

    ReferenceError
        - Ocurre cuando se quita la referencia a una referencia no valida

    SyntaxError
        - Error de sintaxis

    RangError
        - Cuando una variable numerica o parametro está fuera de su rango valido

    TypeError
        - Cuando una variable o parametro no es de un tipo de dato valido

    URIError
        - Cuando encodeURI() o decodeURI() pasan parametros no validos

    Error()
        - Crea un objeto error para excepciones definidas por el usuario
        - Normalmente se crea para generarlo utilizando la palabra clave throw
        - Se puede manejar el error usando try...catch

```js
            try {
                throw new Error("Error custom")
            } catch (e) {
                console.error(e.name + " : " + e.message)        //Devuelve "Error : Error custom"
            };
```

# RUTAS WEB

RUTAS ABSOLUTAS (Enlaces externos)

    Suelen tener protocolo HTTP o HTTPS, son unicas en la red
    Se usan para rutas externas, es decir que no estan en nuestro archivo

RUTAS RELATIVAS (Enlaces Internos)

    Tipo 1 : Dentro de una misma carpeta
    Tipo 2 : Entre diferentes carpetas (niveles)

URI

    (Uniform Resource Identifier)

    Puede ser URL, URN o ambos:

        URN
            Uniform Resource Name
            Identifica el nombre del recurso que se quiere recuperar
            Comienzan con el prefijo "urn:"

        URL
            Uniform Resource Locator
            Identifica la ubicacion del recurso que se quiere recuperar
            Estructura completa URL :

                Protocolo - AUTORIDAD - SERVIDOR - PUERTO - DIRECTORIO - RUTA - CONSULTA - FRAGMENTO

                https://www.aritmetrics.com/blog/

ENDPOINTS

    - Se refiere a la creacion de una nueva ruta para una web

# Arrays

ASIGNACION BASICA

```js
        const num = [1, 2, 3];
        const [red, yellow, green] = num;

        console.log(red);       // 1
        console.log(yellow);    // 2
        console.log(green);     // 3
```

ASIGNACION POR SEPARADO

```js
        let a,b ;

        [a,b] = [1, 2];
```

VALOR PREDETERMINADO

```js
            let a, b;
            [a=5, b=7] = [1,1]; //En caso de un resultado undefined
```

INTERCAMBIO DE VARIABLES

```js

    //Los valores de dos variables se pueden intercambiar en una expresión de desestructuración

    //Sin desestructurar la asignación, intercambiar dos valores requiere una variable temporal

        let a = 1;
        let b = 3;                              //b es la variable temporal
        [a, b] = [b, a];                        //Result = 3,1

        const x = [1,2,3];
        [x[2], x[1]] = [x[1], x[2]];            //Result = 1,3,2
```

Metodos de Array

    at()---Devuelve el elemento en dicha posicion, recibe positivos y negativos
    Array.isArray()---Comprueba si el valor pasado es un Array

    join([" "])---Devuelve un string representando el array y separa cada elemento por defecto con comas
    toString()---Devuelve un string representando el array especificado y sus elementos

    reverse()---Invierte el orden del array
    entries()---Devuelve un nuevo objeto Array que contiene los pares indice/valor de cada elemento

    filter()---Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada

    shift()---Elimina el primer elemento del array (el elmento eliminado se guarda tras la operacion)
    pop()---Elimina el ultimo elemento del array (el elmento eliminado se guarda tras la operacion)
    unshift()---Añade uno o mas elementos al inicio del array (la nueva longitud del array se guarda tras la operacion)
    push()---Añade uno o mas elementos al final del array (la nueva longitud del array se guarda tras la operacion)

    splice(a,[b],[...c])---Elimina y/o agrega elementos, crea u nuevo array modificado, si la posicion es mayor que lenght se toma añade al final, y si es menor a 0 se añade al principio

        - (a) posicion de inicio / (b) cantidad de elementos a eliminar / (c) Items para añadir
        - 1 valor, Elimina todos los elementos desde una posicion
        - 2 valores, Indica cuantos elementos debe eliminar, si es 0 solo añade los elementos
        - 3 valores, Agrega elementos luego de borrar los establecidos en el parametro b

    slice([a],[b])---Extrae elementos desde un punto A hasta B sin incluir al ultimo

        - Si no se indica ningun parametro, hace una copia del original
        - 1 valor, extrae elementos desde una posicion indicada hasta el final
        - 2 valores, extrae elementos desde una posicion inicial hasta donde se le indique sin incluir el ultimo

    from()
    reduce()

    sort()---Ordena numeros y strings alfabeticamente por defecto, puede recibir funciones

    forEach()
    map()

BUSCAR/COMPROBAR ELEMENTOS

    indexOf(a[,b])---Busca una ocurrencia desde el principio, parametro 2 indica desde que posicion buscar
    lastIndexOf(a[,b])---Busca una ocurrencia desde el final

    find()---Devuelve el primer elemento que cumple una funcion de prueba proporcionada
    findIndex()---Devuelve el indice de la primer ocurrencia que cumpla con una funcion proporcionada

    includes(e[b])---Comprueba si un array contiene el elemento, su segundo parametro indica donde inicia la busqueda

    every()---Comprueba si todos los elementos cumplen una condición, termina la iteracion en el momento que no se cumple la condicion
    some()---Comprueba si al menos un elemento cumple con la condición implementada por la función proporcionada, termina la iteracion cuando encuentra el primer elemento que cumpla la condicion

OTROS

    copyWithin(X,Y,Z)
        - X indica la posicion del elemento que sera remplazado
        - Y indica la posicion del elemento que sera el reemplazo
        - Z indica la posicion del elemento final de reemplazo sin incluir al ultimo
            - 1 valor = El remplazo empieza del elemento 0 hasta la posicion del que sera remplazado (parametro)
            - 2 valores = Prametro 1 es la posicion del elemento que se debe reemplazar, parametro 2 es la posicion del elemento que sera el reemplazo

# Keys

Map

Weak Map

Set

Weak Set

# SPREAD SYNTAX

    Permite expandir un elemento iterable donde cero o más argumentos/elementos son esperados
    Sirve como parametros de funciones, arrays, objetos y strings
    Se puede usar multiples veces como parametro o elemento

LLAMADAS DE FUNCIONES

```js
    myFunction(...iterableObj);
```

ARRAY LITERALES O STRINGS

```js
    let numbers = [2, 4, 6, 8];
    let names = ["juan", "carlos"];

    numbers = [...numbers,...names,"other element"];
```

OBJETOS LITERALES

```js
    let objClone = { ...obj };
```
# Datos Estructurados

JSON

    Es una sintaxis para serializar objetos, arreglos, números, cadenas, booleanos y nulos

Métodos

    JSON.parse()
        Analiza una cadena de texto JSON, opcionalmente transformando el valor producido y sus propiedades, retornando el valor.

    JSON.stringify()
        Devuelve un string JSON correspondiente al valor especificado, incluyendo opcionalmente ciertas propiedades o reemplazando valores de propiedades de la manera definida por el usuario.

JSONLD (Linked Data)

    Es un formato de datos ideal para entornos de programación, servicios web REST y bases de datos no estructuradas como Apache CouchDB y MongoDB

# ArrayBuffer

ArrayBuffer

    Se usa para representar un buffer genérico, de datos binarios brutos con una longitud específica

    Tiene una longitud fija, no podemos aumentarla ni disminuirla.
    Ocupa exactamente ese espacio en la memoria.
    Para acceder a bytes individuales, se necesita otro objeto "view", no buffer[index]

        Ejemplo:
```js
        const buffer = new ArrayBuffer(16); // crea un buffer de longitud 16
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

# Loops

WHILE

    while (condition){
        codigo
    }

DO WHILE

    Se ejecuta 1 vez minimo

    do {
        codigo
    } while (condition)

FOR

```js
    for (let i = 0; i > x.length; i++){
        console.log(i)
    }
```

    BREAK
        - Finaliza el bucle actual y ejecuta la siguiente sentencia
        - Incluye una etiqueta opcional que permite al programa salir de una sentencia etiquetada
        - Necesita estar anidada dentro de la sentencia etiquetada
        - La sentencia etiquetada puede ser cualquier tipo de sentencia; no tiene que ser una sentencia de bucle

    CONTINUE
        - Interrumpe el bucle y continua en la proxima iteracion
        - En un bucle while, salta de regreso a la condición
        - En un bucle for, salta a la expresión actualizada

    LABEL
        - Proporciona una sentencia con un identificador al que se puede referir al usar las sentencias break o continue
        - Por ejemplo, para identificar un bucle, y entonces usar break o continue para indicar si un programa debería interrumpir el bucle o continuar su ejecución.

FOR OF

```js
    //Se usa para recorrer cada elemento de un objeto iterable (string, array, map, set, parametros)
    //Devuelve los valores de cada posicion

        for (variable of iterable) {
            statement
        }
```

FOR IN

```js
//Se usa para recorres las key de objetos
//Se suele utilizar para comprobar si alguna clave cumple con un valor especifico

    const object = {
        a: 1,
        b: 2,
        c: 3
    };

    for (const key in object) {
        console.log(`${key}:${object[key]}`);         //Result= a:1, b:2, c:3
    }
```

# Condicionales

IF ELSE

    - Se pueden anidar Ifs y condiciones
    - Sintaxys :

        if (condition) {
            codigo
        } else if (condition) {
            codigo
        } else {
            codigo
        }

SWITCH

    - Una expresion es comparada ante varios valores posibles
    - Cada caso compara su valor con la expresion
    - Brake finaliza la ejecucion de switch al haber coincidencia en un caso
    - Default es opcional, se ejecuta si no se encuentra una coincidencia
    - Se pueden ejecutar operaciones únicas con múltiples casos
    - Sintaxys :

    switch (key) {
        case value: {
                codigo
            }
            break;
        default: {
                codigo
            }
            break;
    }

CONDICIONAL TERNARIO

    Si la condición es true, retorna el valor de la expr1; de lo contrario, devuelve el valor de expr2
    No se recomienda evaluaciones multiples, usar If else
    Obligatoriamente debe tener una expresion en caso de que sea true y false, no como ocurre en if

    EVALUACION SIMPLE

        condition ? expr1 : expr2;

    EVALUACION MULTIPLE

        condition1 ?
        expr1 : condition(expr2) ?
        expr3 : condition(expr4) ?
        expr5 : expr6;

# Exception Handling

Sentencia Trow



Try/Catch/Finally

Objetos de Error

# FUNCIONES

Function

```js
//Ejemplo
        function add (a,b) {
            console.log(a+b);
        }
        add(10,200); //210
```

Arrow Function

    Si hay solo 1 parametro no hacen falta parentesis
    Si hay solo una instruccion no hacen falta llaves
    No se debe usar como métodos de objetos ya que this hace referencia al ambito donde esta el objeto, y no al objeto en si
    No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
    No se puede utilizar como constructor
    No se puede utilizar yield dentro de su cuerpo

```js
        const functionName = (parameters) => {
            instructions
        };

    //EJEMPLO

        const otherAdd = (a,b) => console.log(a+b);
        otherAdd(100,34); //134
```

Función Anonima

    Es una funcion sin nombre
    Se debe escribir dentro de parentesis si esta aislada, para convertirla en una expresion valida
    Se pueden usar como parametros de otras funciones
    Se pueden asignar a variables

```js
//Sintaxis
        (function (){
            instruction
        });
```

IIFE

    Immediately Invoked Function Expression
    También conocido cómo función auto ejecutable
    Se debe escribir entre parentesis
    Asignar el IIFE a una variable almacena el resultado, no la definición de la función

```js
//Sintaxis
        (function (){
            console.log("Esta funcion se ejecuta inmediatamente")
        }());
```

Función Recursiva

    Se auto ejecuta como un bucle, requieren de una condicion

```js
//Sintaxis
        function loop(x) {
            if (x != 10) {
                loop(x + 1)
                console.log(x)
            }
        };

        loop(0);
```

Función Anidada

    Una funcion (A) que contiene una (B) que a su vez contiene una (C)
    (B) puede acceder a (A) y (C) puede acceder a (B)
    Ademas, como (B) puede acceder a (A), y (C) puede acceder a (B), (C) tambien puede acceder a (A)

    Si se define una variable en un ambito interno con el mismo nombre de una variable del ambito externo, estas son unicas y funcionan solo en su propio ambito

```js
//Sintaxis
        (function sayName() {
            const name = "juan";
            console.log(name),
            (function () {
                const name = "pepe";
                console.log(name)
            }())
        }())
```

Parametros Predeterminados

    Los parametros con un valor asignado son ignorados cuando la invocacion define los parametros
    Se puede usar cualquier valor primitivo,array u objeto como valor de un parámetro predeterminado
    Se pueden usar funciones como parametros predeterminados
    Los parametros se nombran segun el tipo de dato que guarda
    Los objetos que se creen con un parámetro predeterminado se crearán cada vez que se invoque la función
    Un uso común de los parámetros predeterminados es aprovechar este comportamiento para obtener valores de objetos
    Se recomienda dejar todos los parámetros predeterminados al final de la lista de parámetros
    Si primero usa un parámetro predeterminado, deberá pasar explícitamente undefined al llamar a la funcion

```js
    //EJEMPLO

        function text(string = "Hi") {
            console.log(string + " how are you")
        }

        showtText() //param empty

    //EJEMPLO 2 (mala practica)

        function defaultFirst(number = 1, b) {
            console.log(a + b)
        }

        defaultFirst(undefined, 2)
```

Parametros Rest

Objeto Argument

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
//Ejemplo:

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