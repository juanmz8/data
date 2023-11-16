# JS Nivel 2

- Arrays
- Metodos de Array

- Funcion nombrada
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
- Class y Constructor

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

# Funcion Nombrada

Funcion Nombrada

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



# Objetos
# Class y Constructor