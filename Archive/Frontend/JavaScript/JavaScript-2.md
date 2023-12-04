# JS 2 (Estructuras de Datos)

- Arrays
- Metodos de Array

- Funcion Tradicional
- Objeto arguments
- Parametros Rest
- Operador Spread
- Funcion flecha

- Bucles While
- Bucles For
- break, continue, label

- Condicional if
- Condicional Switch
- Condicional Ternario

- Objetos
- Getter y Setter
- Metodos de Object

- Clases
- Herencia
- Campos Estaticos
- Campos Privados
- Metodos Estaticos Privados

- Map
- WeakMap
- Set
- WeakSet

# Array

Constructor

    const frutas = new Array("manzana","naranja")

Literal

    const frutas = ["manzana","naranja"]

Propiedad length

    console.log(frutas.length) //2

# Metodos de Array

Poco usados

    Ivertir el orden del array
        edades.reverse()

    Obtener todos los elementos unidos por espacios
        edades.join([" "])

    Obtener el elemento de x posicion
        edades.at(8)

    Obtener el primer indice donde se encuentre el elemento
        edad.indexOf(25)

    Obtener el ultimo indice donde se encuentre el elemento
        edad.lastIndexOf(25)

    Comprobar si es un array
        Array.isArray(edades)

Metodos simples

    Obtener el primer elemento que cumple la funcion
        edades.find(numero => numero > 20)

    Obtener el indice del primer elemento que cumple la funcion
        edades.findIndex(numero => numero > 35)

    Obtener todos los elementos que pasaron el filtro
        edades.filter(numero => numero >= 60)

    Obtener todos los indices y elementos
        edades.entries()

    Comprobar si un elemento cumple con la funcion
        edades.some(numero => numero == 21)

    Comprobar todos los elemento cumplen con la funcion
        edades.every(numero => numero < 100 )

    Comprobar si un elemento se encuentra dentro del array
        edades.includes(99)

    Eliminar el primer elemento del array
        edades.shift()

    Eliminar el ultimo elemento del array
        edades.pop()

    Agregar elementos al inicio del array
        edades.unshift(45,23)

    Agregar elementos al final del array
        edades.push(76)

Metodos complejos

    Reemplazar elementos, devuelve el nuevo array (value, start, end)
        edades.fill(40);

    Modificar cada elemento con una funcion, devuelve un nuevo array
        edades.map(numero => numero*2);

    Aplicar una funcion sobre cada elemento, no guarda este nuevo array
        edades.forEach(numero => numero*2);

    Obtener un array de un objeto iterable
        Array.from("hello");              // ["h","e","l","l","o"]
        Array.from([5,20],(x) => x + x)   // [10,40]

    Ordenar un objeto ordenado por numero o alfabeto
        objeto.sort( (a,b) => a.propiedad - b.propiedad);

        objeto.sort( (a,b) => {
            if (a.propiedad > b.propiedad) {
                return 1;
            }
            if (a.propiedad < b.propiedad) {
                return -1;
            }
            return 0;
        });

    Reducir el objeto a un solo array usando funciones
        objeto.reduce((acc, e) => acc + e.propiedad, 0);

            Ejemplo
                [2,8].reduce((acc,element) => acc + element, 0);
                // Iteracion 1º: 0+2
                // Iteracion 2º: 2+8
                // Iteracion 3º: 10
            Explicacion
                // acc vale 0
                // element vale 2

    Copiar un tramo del array con la posicion de inicio y fin (el elemento final no incluido)
        array.slice(inicio,fin)

        //Si incio es negativo, empieza desde el final del array
        //Si inicio se omite, el valor default es 0
        //Si inicio es mayor a length, devuelve un array vacio

        //Si fin es negativo, termina en el penultimo elemento
        //Si fin se omite, termina en el final del array
        //Si fin es mayor a length, termina en el final del array

    Eliminar y/o Agregar elementos de en array
        splice(inicio, borrarPosicion, "elemento")

        //Si borrar se omite o es mayor a length, elimina todos los elementos despues de inicio
        //Si borrar es 0 o negativo, no se elimina ningun elemento
        //Si elemento se omite, solo se eliminaran elementos

# Funcion Tradicional

Sintaxis

    function f (parametroOpcional) {
        funcionalidad
    };

Funcion en Variable

    const f = function (parametroOpcional) {
        funcionalidad
    };

Funcion con parametros por defecto

    function f (parametro = valor) {
        funcionalidad
    };

# Objeto arguments

Que es?

    - Arguments hace refencia a los argumentos que se envian a la funcion como parametro
    - Solo disponible en las funciones nombradas
    - Puede usar la propiedad length
    - Usar argument en parametros predeterminados devuelve Undefined

    - Los parametros REST, no se pueden redefinir
        x = 20  //Cambiar el valor de x no cambia el valor de arguments
        argument[0] = 20  // Cambiar el valor de argument no cambia el valor de x

    - Los parametros NO REST, se pueden refdefinir
        x = 20  //Cambiar el valor de x tambien cambia el valor arguments
        argument[0] = 20  // Cambiar el valor de argument, tambien cambia el valor x

Ejemplo

    function f (a, b) {
        console.log(arguments[0]);
    }
    f(5,10)
    // Devuelve 5

# Parametros Rest ...

Que es?

    - Representa una cantidad indefinida de argumentos
    - Solo el parametro final puede ser REST
    - Los parametros REST son almacenados en un array incluso si llega vacio
    - Puede usar la propiedad length y metodos de array

# Operador Spread ...

Copiar un objeto

    const myCar = {
        make: "Ford",
        year: 1969,
    };

    const myCar2 = {...myCar};

# Funcion Flecha

    - Las funciones flecha no tienen el objeto this ni argument

Funcion Flecha normal

    const f = (parametroOpcional) => {
        Funcionalidad
    };

Funcion flecha Resumida

    const f = param1 => Funcionalidad;

    //No es necesario (parentesis) para 1 parametro
    //No es necesario {llaves} para 1 funcionalidad
    //No es necesario return para devolver el resultado
    //Si no se piden parametros usar ()

# Bucles While

WHILE

    while (condicion con operador logico){
        Funcionalidad
    }

DO WHILE

    do {
        Funcionalidad
    } while (condicion con operador Logico)


# Bucles For

For: itera sobre cada elemento

    for (inicio ; condicion ; actualizacion) {
        Funcionalidad que se ejerce en cada elemento
    }

    for (let i=0 ; i < array.length; i++) {
        const element = array[i];
    }

For of: itera sobre los valores de cada objeto

    for (elemento of objeto) {
        Funcionalidad que se ejerce en cada elemento
    }

    for (const x of array) {
        return x
    }

For of en MAP

    for (elemento of miMap) {
        console.log(elemento)
    }
    // Devuelve cada par de clave:valor del Map

    for ([key,value] of miMap) {
        console.log(key)
    }
    // Devuelve cada clave del Map, sin su valor

For of en SET

    for (const elemento of miSet) {
        console.log(elemento)
    }
    // Devuelve todos los elementos de set sin repetirse

For in: itera sobre las propiedades de cada objeto y las que hereda

    for (const key in object) {
        console.log(key) //Devuelve cada key del objeto
        console.log(`key + object[key]`) //Devuelve cada key:value
    }

# break, continue, label

BREAK

    - Finaliza el bucle y ejecuta el siguiente bloque de codigo
    - Incluye una etiqueta opcional que permite al programa salir de una sentencia etiquetada

        function testBreak(x) {
          let i = 0;
          while (i < 6) {
            if (i == 3) break; //Rompe el bucle cuando i=3, aunque la condicion sea i=6
            i++;
          }
          return i * x;
        }

CONTINUE

    - Interrumpe el bucle y continua en la proxima iteracion
    - En un bucle while, salta de regreso a la condición
    - En un bucle for, salta a la expresión actualizada

        a = 0;
        b = 0;

        while (a < 5) {
            a++;
            if (a == 3) {
            continue;
          }
          b += a;
        }

LABEL

    - Proporciona una sentencia con un identificador al que se puede referir al usar las sentencias break o continue
    - Por ejemplo, para identificar un bucle, y entonces usar break o continue para indicar si un programa debería interrumpir el bucle o continuar su ejecución.

# Condicionales

if, else if

    if (condicion) {
        sentencias
    } else if (condicion) {
        sentencias
    } else {
        sentencias
    }

Switch

    switch (operacion) {
    case resultado1:
        //sentencias
        break;

    case resultado2:
        //sentencias
        break;

    default:
        //sentencias
        break;
    }

Operador Ternario

    condition ? ifTrue : ifFalse ;

# Objetos

- Se pueden usar variables globales como propiedades
- This es el objeto actual
- Notacion de punto y Notacion de Corchetes para llamar propiedades/metodos
- Crear Objetos con literales y con su Constructor :

    const OBJETO = {
        keyOne : value1,
        globalVariable,
        method = function (){
            this.keyOne
        }
    }
    console.log(OBJETO.keyOne)


    const OBJETO = new Object(),
        keyOne : value1,
        globalVariable,
        method = function (){
            this.keyOne
        }
    ;
    console.log(OBJETO[keyOne])

## Getter y Setter

- GET funcion (SIN parametro) que devuelve su resultado
- SET funcion (CON un parametro) que modifica otras propiedades

    const CALC = {
        n : 1,
        get multiplicar() {
            this.n * 5;
        },
        set modificarPositivo(x) {
            this.n = x + 100;
        }
    }

¿Como definir propiedades get y set despues de crear el objeto?

- Usando el metodo de Object.defineProperties()

    Object.defineProperties(CALC, {
        sumar : {
            get : function () {
                this.n + 5;
            }
        },
        modificarNegativo : {
            set : function (x) {
                this.n = x - 100;
            }
        }
    })

Borrar una propiedad no heredada
    - delete CALC.modificarNegativo;

Comprobar si existe una propiedad
    - console.log("sumar" in CALC);

## Metodos de Object

- Object.keys() //Obtiene un array de todas las key del objeto

- Object.values() //Obtiene un array de todos los valores del objeto

- Object.entries() //Obtiene un array de cada par key:value

- Object.fromEntries() //Obtiene un objeto con los pares key:value

- Object.create() //Crear un objeto a partir de otro (prototipo)

    const X = {
        a : 1;
    };
    const Y = Object.create(X);

- Object.assign(destino,origen)
    //Copia las propiedades (no anidadas) de uno o mas objetos
    //Las Pega en el objeto destino
    //Si hay keys con el mismo nombre, sus valores se sobreescriben
    //Las propiedades no enumerables y heredadas no se pueden copiar

    const objOne = { a: 1, b: 2 };
    const objTwo = { b: 4, c: 5 };
    console.log(Object.assign(objOne, objTwo)); // objOne =+ objTwo

- Object.freeze()
    //Impide crear propiedades
    //Impide eliminar propiedades
    //Impide modificar todo tipo de propiedades
    //Impide modificar su prototipo

- Object.isFrozen() //Determina si un objeto se congeló o no

- Object.seal()
    //Impide crear propiedades
    //Impide eliminar propiedades
    //Impide modificar las propiedades de DATOS en propiedades ACCESORAS y viceversa

- Object.isSealed() //Determina si un objeto se selló o no

- Object.getOwnPropertyDescriptors() //Obtiene la descripcion de todas las propiedades propias del objeto

## Tipos de DESCRIPCION de las PROPIEDADES

- Dato //Sus key son: configurable, enumerable, value, writable

- Accesor //Sus key son: configurable, enumerable, get, set

# Clases

Sintaxys

    class Persona {

        constructor (nombre, edad) {
            this._nombre = nombre;
            this._edad = edad;
            }
        get datos() {
            return this.nombre + this.edad
        }
    }

- En constructor se definen los parametros
- Los metodos van fuera del constructor
- Las propiedades se declaran con _ para diferenciar los parametros

Instanciar Clases

    const Juan = new Persona ("Juan",19);
    console.log(Juan.datos);

## Herencia

- Las SubClass heredan propiedades y metodos de su SuperClass general

    class Policia extends Persona {
        constructor(nombre, edad, dni) {
            super(nombre, edad);
            this._dni = dni;
        }
    }

- extends habilita la herencia de Persona
- super invoca al constructor de la clase principal (sus parametros)

## Campos estaticos

- Los metodos estáticos son llamados sin Instanciar su clase
- No se pueden acceder desde una sub clase

    class Ejemplo {
        static SUMAR (n1,n2){
            return n1 + n2;
        }
    }
    const objeto = new Ejemplo()

    console.log(objeto.SUMAR(5,5)) //Error
    console.log(Ejemplo.SUMAR(10,90)) //Devuelve 100

## Campos Privados

- Solo son accesibles desde dentro de la propia declaracion de la clase
- Se usa el #hash tanto para declarar y para acceder

    class PropiedadPrivada {
      #private;
    }

    class MetodoPrivado {
      #private() {
        return "hello world";
      }
    }

    class PropiedadEstatica {
      static #PRIVATE;
    }

## Metodos Estaticos Privados

    class SuperClase {
        static #MetodoPrivado() {
            return 42;
        }
        static MetodoPublico1() {
            return SuperClase.#MetodoPrivado(); //Origen
        }
        static MetodoPublico2() {
            return this.#MetodoPrivado(); //Objeto actual
        }
    }

    class subClase extends SuperClase {}

    console.log(subClase.MetodoPublico1()); // 42, el metodo llama al Origen SuperClase
    console.log(subClase.MetodoPublico2()); // TypeError, el metodo llama al objeto actual subClase

# Map

- La estructura Map guarda pares key:value
- Sirve para buscar y obtener valores mediante una clave única

Instanciar el objeto Map

    let newMap = new Map([[key, value]]);
    console.log(newMap);

Propiedades

    .size
        - Devuelve la cantidad de propiedades que tiene el mapa

Metodos

    .clear()
        - Vacia el mapa completamente

    .delete(key)
        - Devuelve true si logra eliminar la propiedad dicha, si no existe devuelve false

    .entries()
        - Devuelve los pares key:value

    .set(key, value)
        - Define una nueva propiedad o la actualiza

    .get(key)
        - Devuelve el valor asociado a la clave

    .has(key)
        - Devuelve true o false dependiendo de la existencia de la clave

    .keys()
        - Devuelve todas las claves

    .values()
        - Devuelve todos los valores

## Clonar estructuras y convertirlas en Array

- Usar la funcion global structuredClone()
- Clona estructuras de datos con anidamientos
- A diferencia de el spread operator común, esta forma no modifica el objeto original

    const nuevaEstructura = [...structuredClone(estructura)]

# WeakMap

- No se puede convertir a array, no es iterable
- No permite utilizar datos primitivos como key
- Si el elemento no se usa, se elimina del WeakMap

- Solo estan disponibles los metodos

    .set()
    .get()
    .has()
    .delete()

# Set

- La estructura Set guarda valores unicos
- Los elementos no se pueden repetir

Instanciar el objeto Set

    let set = new Set([1,2,3])

Propiedades

    .size
        - Devuelve el numero de elementos

Metodos

    .add(value)
        - Añade elementos

    .clear()
        - Vacia la estructura

    .delete(value)
        - Devuelve true si logra eliminar el valor especificado, sino, false

    .has(value)
        - Devuelve true si el elemento existe

# WeakSet

- No se puede convertir a array, no es iterable

- No guarda datos primitivos:

    String
    Number
    Bolean

    Null
    Undefined

    Symbol
    bigInt

- Si no se usa el elemento, se elimina del set

    let object = {
        name: "Juan"
    };

    const SET = new WeakSet([object]);
    console.log(SET);  //Devuelve el objeto que guarda set

    object = null;
    console.log(SET);  // Devuelve el set Vacio

- Solo disponebles los metodos:

    .add()
    .has()
    .delete()