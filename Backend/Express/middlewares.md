# Archivos JSON

- Analiza el cuerpo de las peticiones de formato JSON
- Los datos son accesibles usando el objeto req.body

   app.use(express.json())

# Codificacion URL

- Analiza datos de peticiones codificados en URL
- Formularios HTML con metodo POST y codificacion "aplication/x-www-form-urlencoded"
- Los datos son accesibles usando el objeto req.body

   app.use(express.urlencoded( {extended : true} ))

# Archivos estaticos

- Sirve archivos estaticos como CSS, JavaScript, HTML
- Se debe especificar una carpeta para enviar estos archivos como respuesta

   app.use(express.static("public"))

# Registro con Morgan

- Genera un registro de peticiones que recibe el servidor

   import morgan from "morgan"
   app.use(morgan("dev"))

# Seguridad con Helmet

- Agrega automaticamente headers HTTP de seguridad
- Lista de headers que incluye helmet:

   (CSP) Content-Security-Policy
   - Previene ataques de scripts y otras inyecciones entre sitios

   (COOP) Cross-Origin-Opener-Policy
   - Previene ataques relacionados entre ventanas y pestañas para acceder a informacion

   (CORP) Cross-Origin-Resource-Policy
   - Controla el acceso a recursos especificos desde el DNS origen hasta el DNS destino

   (OAC) Origin-Agent-Cluster
   - Impide el acceso de scripts sincronos entre páginas de origen cruzado del mismo sitio

   (RP) Referrer-Policy
   - Limita la informacion que se comparte entre diferentes paginas web

   (HSTS) HTTPS-Strict-Transport-Security
   - Indica que todas las interacciones deben realizarse utilizando HTTPS incluso si se accede desde HTTP

   (XCTO) X-Content-Type-Options
   - Evita que navegadores rastreen una respuesta mediante MIME

   (XDPC) X-DNS-Prefetch-Control
   - Controla si el navegador debe pre-cargar la resolucion DNS

   (XDO) X-Download-Options
   - Previene descargas inseguras en IE8

   (XFO) X-Frame-Options
   - Previene el Clickjacking; engañar a un usuario para que haga clic en algo imperceptible

   (XPODP) X-Permitted-Cross-Domain-Policies
   - Indica al navegador la politica de dominio para cargar contenido cruzado

   (XPB) X-Powered-By
   - Especifica con que software se ha generado la respuesta por parte del servidor

   (XXP) X-XSS-Protection
   - Impide la carga de una página cuando detecta ataques del tipo Cross-Site (XSS)

      import helmet from "helmet"
      app.use(helmet())

# Cross-Origin Resource Sharing

- Evita problemas de seguridad al realizar peticiones de recursos entre dominios distintos

   import CORS from "cors"
   app.use(CORS())

# Cookie Parser

- Facilita la manipulacion de coockies en peticiones y respuestas

   import cookieParser from "cookie-parser"
   app.use(cookieParser())

# Compression

- Facilita la compresion de las respuestas tipo JSON, CSS, HTML y otros

   import compression from "compression"
   app.use(compression())