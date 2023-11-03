# FLUJOS DE TRABAJO CSS SOBRE COMPATIBILIDAD

Progressive Enhancement

    Se empieza con diseños basicos para soportar navegadores antiguos, luego soporte a navegadores estandar y por ultimo a soporte a navegadores en versiones punta, con conceptos experimentales

Graceful Degradation

    Se empieza con diseños para versiones de navegadores punta y se degrada (metodo inverso a PE)

# TIPOS DE WEBS

**WEB ESTATICA**

    Las páginas webs estáticas son aquellas en las que el contenido que se muestra es informativo y no suele cambiar. El usuario no puede apenas influir en ella. Es un tipo de página web muy básico, y que en muchos casos no tiene ni siquiera una base de datos.

**WEB DINAMICA**

    Este tipo de páginas permite incluir en ellas elementos o aplicaciones con las que el usuario puede interactuar, como un calendario, una encuesta, una reserva… A diferencia de las páginas estáticas, para crearlas es necesario implementar una base de datos y utilizar un lenguaje de programación que trabaje del lado del servidor web.

**BLOG**

    Este tipo de página nace con un objetivo muy claro: mostrar información de valor actualizada a los usuarios. Se podría ver como un periódico online en el que se van publicando noticias regularmente.

**WEB CORPORATIVA (DE PRESENTACION)**

    El objetivo que persiguen este tipo de webs es el branding de la marca y mostrar al usuario todo lo que ofrecen (productos o servicios), así como su misión, visión y valores.

**LANDING PAGE**

    Son simples y de una sola pagina.El objetivo de estas páginas es dirigir las campañas de atracción de tráfico a un espacio web concreto donde únicamente se habla de dicho producto/servicio o recurso para maximizar el número de solicitudes de compra, descarga o peticiones de información relacionadas con ello.

**ECOMERCE**

    El objetivo de un ecommerce o tienda online normalmente es tener el mayor número de ventas posible, pero cambiará la forma de plantearlo según muchos factores: qué quiere conseguir la empresa, el tamaño, la popularidad de la marca, etc.

**REDES SOCIALES**

    Las redes sociales son servicios prestados a través de Internet que permiten a los usuarios generar un perfil desde el que hacer públicos datos e interactuar con otros usuarios y localizarlos en la Red en función de las características publicadas en sus perfiles.

**FOROS**

    Permite la discusión de temas diversos: tanto de temáticas lógico-científicas como de temas más cotidianos como el deporte, la política, etc. El tema del foro es de interés para todos los participantes o la discusión revierte en su beneficio. Por norma general, son espacios informales.

**PORTALES DE NOTICIAS**

    Su función principal radica en informar y entretener al lector, además de ser promotor de diversos movimientos sociales a través de la historia. A pesar de que su tiraje se sirve de manera diaria, siempre encontrarás diferentes noticias o topicos.

**VIDEO WEB**

    Los portales de vídeo son sitios web que ofrecen a sus usuarios contenido de vídeo producido profesionalmente o realizado por los propios usuarios.

**BUSCADORES**

    Los buscadores son sistemas informáticos que los usuarios emplean cuando navegan por la web para buscar las páginas que les pueden proporcionar la información que desean. Ejemplos de buscadores son Google, Bing, Yahoo, Baidu, DuckduckGo.

# Evitar el error 404 not found

    Ocurre cuando se cambia la estructura de la URL de la web y el motor de busqueda no la encuentra indexada
    Solucion, redireccionamiento 301 y 302 (estados HTTP)

Ejemplos donde que podemos recurrir a una redirección 301:

    - Cuando debemos hacer un cambio de dominio.
    - Cuando hemos de realizar un cambio en las URL para que sean semánticas (o amigables).
    - Aprovechar el posicionamiento de un post antiguo ya obsoleto para crear un artículo nuevo con un contenido de mayor calidad y actualizado.
    - Para hacer un cambio de estructura de la arquitectura web. Ejemplo: noticias.inboundcycle.com/blog/posts-tips a inboundcycle.com/blog.
    - Para resolver o prevenir problemas por contenido duplicado (algo muy común cuando hacemos un cambio del nombre de dominio).
    - Para solucionar canibalizaciones entre dos o más páginas que, por tener contenido muy similar o competir por las mismas keywords, están mal posicionadas.
    - Para implementar las SSL y hagas una migración de ‘http’ a ‘https’.

## Redirecciones

NO SON RECOMENDABLES REDIRECCIONES CON HTML Y JAVASCRIPT

Redirección PHP

    <?php
    Header( "HTTP/1.1 301 Moved Permanently" );
    Header( "Location: http://dominio.com" );
    ?>

Redirección ASP

    <%@ Language=VBScript %>
    <%
    Response.Status="301 Moved Permanently"
    Response.AddHeader "Location","http://dominio.com/"
    %>

Redirección ASP .NET

    <script runat="server">
      private void Page_Load(object sender, System.EventArgs e) {
        Response.Status = "301 Moved Permanently";
        Response.AddHeader("Location","http://dominio.com/");
      }
    </script>

Redirección JSP

    <%
    response.setStatus(301);
    response.setHeader( "Location", "http://dominio.com/" );
    response.setHeader( "Connection", "close" );
    %>

Redirección CGI Perl

    $q = new CGI;
    print $q->redirect("http://dominio.com/");

Redirección en Ruby On Rails

    def old_action
    headers["Status"] = "301 Moved Permanently"
    redirect_to "http://dominio.com/"
    end

Servidores Apache

    <VirtualHost *:443>
      ServerName dominio.com
      Redirect 301 / https://www.dominio.com
    </VirtualHost>

Servidores Nginx

    En este caso lo que se hace es generar un bloque específico en el servidor para especificar lo que se quiere redirigir. Como se hace a continuación:

    server {
      listen 80;
      server_name dominio.com;
      return 301 $scheme://www.dominio.com$request_uri;
    }