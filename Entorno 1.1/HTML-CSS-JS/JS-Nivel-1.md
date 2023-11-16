# JS Nivel 1

- Variables
- Tipos de datos
- Conversion de Tipos
- Math y Number
- Operadores
- Template literals
- Metodos de string

# Variables

DECLARACIONES

- var:
    - Global
    - Se pueden redefinir
    - Se cargan antes que cualquier otra linea de codigo

- let
    - Bloque
    - Se pueden redefinir
    - Puede existir sin valor

- const
    - Bloque
    - No se pueden redefinir en el mismo bloque
    - No puede existir sin valor

SYNTAXYS

    - Nunca se usa guion para separar palabras
    - Las funciones y metodos se nombran como verbos
    - Las clases se nombran con PascalCase
    - Las variables con valores pero sin declarar son globales al momento de llamarse
    Las variables se nombran con lowerCase
        let unoDos = "ejemplo";

    Las constantes se nombran con UPPER_CASE
        const UNO_DOS = "ejemplo"; //Valor constante

    Las variables de valor boolean se nombran como prefijos
        const EXALUMNO = true;

    Las variables de valores privados se nombran con guion bajo al inicio
        const _CONTRASEÑA = "icnn63if"

# Tipos de Datos

DATOS PRIMITIVOS

    Sin valor = undefined

    Valor nulo = null

    Valor Boleano = true

    Valor number = 7356

    Valor string = "Texto ejemplo"

    Valor bigInt = 874520987n

    Valor symbol = symbol("valor unico e inmutable")

    Operador typeof = typeof(CAR, "texto", 52 )

# Conversion de Tipos

COERCION

JavaScript elige los tipo de datos para hacer sus operaciones, de estas maneras:

    Automatica
        Devuelve strings si uno de los tipos es string
        Devuelve numbers si uno de los tipos es number
        Devuelve boolean si se usan operadores logicos

    Explicita
        Se usan funciones para definir la conversion de datos

            string()
            number()
            boolean()

# Math y Number

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

METODOS DE NUMBER

    Number.isNaN()
        Determina si es NaN

    Number.isFinite()
        Determina si es un numero infinito

    Number.isInteger()
        Determina si es un numero entero

    Number.isSafeInteger()
        Determina si es un entero seguro (número entre -(253 - 1) y 253 - 1)

    Number.parseFloat()
        El valor es el mismo que parseFloat() del objeto global

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

# Operadores

 ASIGNACION

    Asignación	                    x = y     es decir  x = y
    Asignación de suma	            x += y    es decir  x = (x + y)
    Asignación de resta	            x -= y    es decir  x = (x - y)
    Asignación de multiplicación    x *= y    es decir  x = (x * y)
    Asignación de división	        x /= y    es decir  x = (x / y)
    Asignación de residuo	        x %= y    es decir  x = (x % y)
    Asignación de exponenciación	x = y     es decir  x = (x  y)

COMPARACION

    Igual valor             ==
    Igual valor y tipo      ===
    Distinto valor          !=
    Distinto valor y tipo   !==
    Mayor                   >
    Mayor o igual           >=
    Menor                   <
    Menor o igual           <=

ARITMETICO

    Post Incremento     a++
    Pre Incremento      ++a
    Post Decremento     a--
    Pre  Decremento     --a

LOGICO

    AND (&&)
    OR (||)
    NOT (!)

# Template literals

- Junta todas las operaciones y devuelve un string
- Permite la interpolacion de expresiones
- Se pueden anidar en mas expresiones literales

    const X = 1
    console.log(`X 900 Texto ${900+X}`) //1 900 Texto 901

# Metodos de string

    lenght         //Obtener longitud del string
    charAt()    //Obtener caracter en dicha posicion, por defecto es 0
    replace(x,y)   //Eliminar primer coicidencia y la reemplaza
    toLowerCase()  //Obtener el string en minúsculas. No la cambia
    toUpperCase()  //Obtener el string en mayúsculas. No la cambia

    search(a)   //Obtener posicion de la primer coincidencia
    match(x)    //Obtener posicion de la primer coincidencia

    indexOf(a,[b])
        //a = elemento buscado
        //b = posicion donde empezara a buscar
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

    repeat(a)       //Repite la cadena cuantas veces le indiquemos
    trim()          //Elimina los espacios del principio y final del String
    concat(a[,b])   //Concatena dos o mas strings mediante el uso de comas

    charCodeAt(x)    //Devuelve el valor unicode del caracter en determinada posicion
    fromCharCode(x)  //Convierte valores unicode en caracteres