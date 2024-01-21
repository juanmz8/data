# Validacion de datos en Servidor

    Verificacion de query params de la URL y el BODY (usar bibliotecas)
        - Verificacion de tipos de datos
        - Verificacion de longitud y formato

    Configurar encabezados HTTP
        - CORS, HSTS, X-CTO, X-FO, X-XSS
        - buscar : Solucionar error CORS

# ID vs UUID

    ID:
    - Identifica a un objeto dentro de un sistema especifico
    - Puede no ser globalmente unico
    - Generalmente se asigna en secuencia (auto incremental)

    UUID:
    - Es un identificar globalmente Unico (universal)
    - Siguen un estandar de generacion
    - Diseñados para evitar colisiones

# INYECCIONES SQL (Parametrizacion de consultas)

    - Ataque que utiliza una consulta SQL de una aplicacion para generar codigo SQL y manipular la Base de datos

    //Incorrecto :

        const userData = getUserData;
        connection.query(
            `INSER INTO table (columna1) VALUES ('${userData})'`
        )

    //Correcto :

        const userData = getUserData;
        connection.query(
            "INSER INTO table (columna1) VALUES (?)", [userData]
        )