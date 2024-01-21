# JS 3 Bucles y Bloques Condicionales

- Bucles While
- Bucles For

- break, continue, label

- Condicional if
- Condicional Switch
- Condicional Ternario

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

# if, else if

    if (condicion) {
        sentencias
    } else if (condicion) {
        sentencias
    } else {
        sentencias
    }

# Switch

    switch (operacion) {
        case resultado1: {
            //sentencias
            break;
        }

        case resultado1: {
            //sentencias
            break;
        }

        default: {
            //sentencias
            break;
        }
    }

# Operador Ternario

    condition ? ifTrue : ifFalse ;