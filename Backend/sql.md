- Conceptos de SQL
- Comandos de Terminal SQL
- Introduccion
- Tablas

# Conceptos de SQL

    - Tables
        Estructura de columnas filas que representan informacion
        Cada fila de informacion se llama Registro

    - Views
        Representan datos obtenidos mediante consultas de otras tablas
        Permite simplificar consultas complejas
        Permite reutilizar consultas frecuentes
        Permiten optimizar el rendimiento almacenando en cache resultados de una vista
        Dar acceso a una vista en lugar de una tabla mejora la seguridad restringiendo el acceso

    - Stored Procedures
        Instrucciones SQL predefinidas que realizan operaciones en la base de datos
        No necesariamente devuelve algun valor
        Puede realizar operaciones de modificacion de datos

    - Functions
        Realizan operaciones especificas y devuelven un valor
        No puede afectar la base de datos
        Se utilizan para operaciones de solo lectura

# Comandos de Terminal

    ctrl + C //Cancelar comandos actuales
    ctrl + Q //Salir de la terminal
    \W       //Activar las alertas en cada sentencia
    \w       //Desctivar las alertas en cada sentencia
    \status  //Mostrar informacion del servidor

# Introduccion (Crear, Eliminar, Usar y Mostrar)

- Crear una base de datos
    CREATE DATABASE myData;

- Ver todas las bases de datos
    SHOW DATABASES;

- Usar una base de datos
    USE myData;

- Eliminar una base de datos
    DROP DATABASE myData;

# Comandos para Tablas

- Tipos de datos SQL

    - CHAR(n)    //String con una longitud fija de n
    - VARCHAR(n) //String con longitud maxima de n

    - BOOL       //Boleano

    - INT        //Numeros enteros
    - FLOAT      //Numeros con coma

    - DATE       //Fecha
    - TIME       //Hora
    - DATETIME   //Combinacion fecha + hora


- Crear Tablas (2 opciones)

    CREATE TABLE users (
        userId [tipo-de-dato],
        userName [tipo-de-dato],
        PRIMARY KEY (userId)
    );

    CREATE TABLE users (
        userId [tipo-de-dato] PRIMARY KEY,
        userName [tipo-de-dato]
    );


- Asociar una columna entre tablas

    CREATE TABLE departamentos (
        departamentoID [tipo-de-dato] PRIMARY KEY,
        departamentoNombre [tipo-de-dato],
    );

    CREATE TABLE empleados (
        empleadoID [tipo-de-dato] PRIMARY KEY,
        empleadoNombre [tipo-de-dato],
        departamentoID [tipo-de-dato],
        FOREING KEY (departamentoID) REFERENCES departamentos(departamentoID)
    );

    CREATE TABLE acceso (
        empleadoID [tipo-de-dato],
        contraseña [tipo-de-dato],
        FOREING KEY (empleadoID) REFERENCES empleados(empleadoID)
    );


- Insertar Datos en una tabla
    INSERT INTO [tabla] ([columna1],[columna2])
    VALUES ([dato1],[dato2]);


- Ver estructura de tabla (2 Opciones)
    DESC [tabla];
    DESCRIBE [tabla];


- Ver informacion de una tabla
    SELECT [columnas-de-tabla] FROM [tabla];


- Ver Registros de una tabla
    SELECT COUNT([columnas]) FROM [tabla];


- Cambiar el nombre a una columna
    ALTER TABLE [tabla] RENAME COLUMN [columna-vieja] TO [columna-nueva]


- Cambiar el Tipo de Dato de una columna
    ALTER TABLE [tabla] MODIFY COLUMN [columna] [nuevo-tipo-de-dato]