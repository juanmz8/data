# Atajos de teclado

(ctrl + Intro) para ejecutar las consultas en sql

    --Comentario sql--

>Crear la base de datos
    create database myDataBase;

>Inidicar que base de datos usar
    use myDataBase;

>Mostrar todas las bases de datos
    show databases;

# Tablas

- Tipos de datos :
    - int       //numeros enteros
    - float     //numeros con coma
    - varchar() //string, su parametro indica un numero de caracteres maximos que puede recibir

>Crear Tablas

    CREATE TABLE myDataBase (
        identificador int,                     //Nombre del campo y tipo de dato
        usuario varchar (255),      //Nombre del campo y tipo de dato
        estado varchar (255),       //Nombre del campo y tipo de dato
        PRIMARY KEY (id)            //Su parametro es el campo ID para usar el id como una llave primaria
        )

>Insertar datos en las tablas

    INSERT INTO myDataBase(usuario, estado)   //Se indica que campo se quiere llenar
    VALUES("Juanx1234","feliz")               //Se indican los valores para los campos anteriores

>ALTER TABLE

- Se usa para agregar, eliminar o modificar columnas en una tabla existente

    ALTER TABLE myDataBase MODIFY COLUMN identificador int auto_increment;
    SHOW CREATE TABLE myDataBase;