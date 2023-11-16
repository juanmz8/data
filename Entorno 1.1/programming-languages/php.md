# Cosas basicas

> Etiqueta del lenguaje (como <html> </html>)

    <?php

    ?>

>Comentarios

    //comentario de php
    # comentario de php
    /*comentario de php*/

>Variables y Arrays

    $nombre = "Juan";
    $nombres = array("jose","juan","pablo");

>>Otra manera de definir arrays

    $apellidos = array();
    $apellidos[0] = "Miguez";
    $apellidos[1] = "Passini";

>Constantes

    define("APELLIDOS","Miguez Passini");

>Imprimir

    echo $nombre;
    echo APELLIDOS;

# GET

>Muestra los valores en la url, se puede marcar la pagina

    $color = $_GET["inputName"];

# POST

>No muestra los valores por la url

    $color = $_POST["inputName"];

# Funciones de PHP

json_encode()
    - Traduce cualquier cosa codificada en UTF-8, se convierte en un objeto : key-value

isset()
    - Evalua si una variable o array está definida o no.

filter_var()
    - Esta función se utiliza para validar y desinfectar los datos, sus parametros son la $variable y el ID del filtro (palabra clave del filtro)
https://manuales.guebs.com/php/filter.filters.html

strpos()
    - Devuelve la posición de la primera coincidencia. Recibe 2 parametros, la variable donde se busca y lo que se debe encontrar

strrpos() y strripos()
    - Devuelven la ultima coincidencia, la segunda no diferencia enter mayusculas y minusculas

# Try Throw Catch

>Se ejecuta el codigo try, si no hubo errores se ignora catch
>Si hay error la ejecucion del codigo try se detiene y el flujo continua en catch

>Cada bloque Try debe tener al menos un bloque catch o finally correspondiente
>Pueden usarse varios Catch para capturar distintas clases de excepciones
>El objeto lanzado debe ser siempre una instancia de la clase Exception o una subclase de Exception

Ejemplo Exepcion Throw:

    $miLado = -3;

    function areaCuadrado($lado){
        if ($lado < 0){
            throw new Exception ('Debes insertar un número positivo');
        } else {
            return $lado * $lado;
        }
    }
    areaCuadrado($miLado);     // Devuelve: Uncaught exception 'Exception' with message 'Debes insertar un número positivo'

# PDO (objeto de Datos de PHP)

Define una interfaz ligera para poder acceder a bases de datos en PHP.
Primero se establece la conexion, utilizaremos la clase PDO que necesita los siguientes parámetros :

    $pdo = new PDO($dsn, $username, $password, $options);

__dsn__
    "DataBaseManejador:host=hostDeBasedeDatos; port=0000 opcional; nombreBasedeDatos=archivoDB; charset=utf8"

__username__
    "root"

__password__
    "" //Null

__options__
Array con parámetros adicionales para la conexión
    PDO::MYSQL_ATTR_INIT_COMMAND //especificar un comando inicial para la conexión
    PDO::ATTR_DEFAULT_FETCH_MODE //establecer el formato en que se devuelven los datos

>Ejemplo

    $pdo = new PDO("mysql:host=localhost; dbname=sqlfile; charset=utf8","root", "");

> Otro ejemplo