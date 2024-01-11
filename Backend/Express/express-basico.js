/*Indice:
1. Como crear un servidor express       (app)
2. Como manejar peticiones HTTP         (routing)
3. Como devolver informacion al cliente (response)
4. Manipular datos que envia el cliente (request)
5. Middlewares, que son y como usarlos  (middleware)
6. Secciones de una URL                 (url path)
7. Configuracion de express             (set, get)
8. Servir HTML Estaticos                (express.static())
9. Router, modularizacion               (express.router())
10.Servir HTML dinamicos EJS            (View engine/Template engine)
11.Concetar Express a una DB            (Bases de datos sql)
. Organizacion de codigo
*/

//1 CREAR UN SERVIDOR

   import express from "express";
   const app = express();

   app.get("/", (req, res) => {
     res.send("Respuesta");
   });

   app.listen(3000);

//2 ROUTING

   //Manejar peticiones en distintas rutas y metodos HTTP

      app.get("/user", (req, res) => {
         res.send("Perfil de usuario");
      });

      app.get("/about", (req, res) => {
         res.send("Informacion de la web");
      });

   //Manejar peticiones a rutas inexistentes independientes de su metodo HTTP

      app.use((req, res, next) => {
         res.status(404).send("Pagina no encontrada")
         next()
      })

   //Aceptar cualquier metodo HTTP
      app.all((req, res) => {
         res.status(204)
      })

//3 Metodos para manejar respuestas

   res.end()//Finaliza la respuesta del servidor, es una forma de finalizar el middleware

   res.send() //Envia diferentes tipos de respuesta detectados automaticamente (text, html, json)
   res.sendFile()//Responde al cliente con archivos estaticos o descargables como pdf o html estatico
   res.sendStatus()//Envia solamente un codigo de estado al cliente

   res.json() //Envia especificamente respuestas en formato json, automaticamente parsea un objeto con JSON.stringify()
   res.render()//Devuelve una view, comunmente motores de plantillas como PUG, EJS o HandleBars

   res.download()//Envia un archio estatico sugiriendo al navegador descargarlo en lugar de mostrarlo
   res.redirect()//Se utiliza para redireccionar al cliente a otra URL, por ejemplo despues de completar un Loggin

   res.status()//Configura el codigo de respuesta que se enviara al cliente respecto a una url personalizada
   res.type()//Configura el tipo de contenido de la respuesta antes de enviarla (text, html, css, json, pdf, jpeg, javascript, archivo descargable)

//4 Manejo de informacion recibida por el servidor

   req.body //Contiene los datos enviados en el cuerpo de la request
   req.headers //Objeto que contiene las cabeceras de la request
   req.method //String que contiene el nombre del metodo HTTP de la request
   req.query //Objeto que contiene propiedades de cada consulta en la ruta
   req.params //Objeto que contiene parametros de la ruta

//5 Middlewares

/*Que son?

   Son funciones que tienen acceso a:
   - Objeto request
   - Objeto response
   - Siguiente middleware

   - Se ejecutan cuando se recibe una peticion HTTP
   - Luego la peticion es procesada en el router
   - Finalmente se responde al cliente
   - opcionalmente se pude ejecutar a continuacion otro middleware con next()*/

//Como usarlos?

   //Sirve para establecer un middleware
   app.use((req, res, next) => {
      next()
   })

      //middleware global para todas las rutas
         app.use(middleware)

      //middleware especifico para una ruta particular
         app.use("/rutaEspecifica", middleware)

//Tipos de middlewares en express.js

   app.use(express.json()) //Analiza el cuerpo de la request que cuando está en formato JSON

   app.use(express.text()) //Analiza el cuerpo de la request cuando ésta no tiene formato

   app.use(express.urlencoded({extended:true})) //Analiza el cuerpo de la request cuando éste contienen datos codificados en formato de URL como formularios

   /* Middleware "Morgan":

      Sirve para generar logs (registros) de peticiones HTTP
      Facilita el seguimiento de las peticiones registrando informacion
      Util para desarrollo, monitoreo de rendimiento y depuracion
   */

//6 Secciones de una URL con ejemplos

   "https://youtube.com/watch?v=1dws2a3"
      // https://       => Protocolo
      // youtube.com    => Dominio (DNS)
      // /watch         => Ruta (path)
      // ?              => Consulta (query)
      // v=1dws2a3      => Variable (por ejemplo; "v" contiene como valor el id del video)

   "/toppeliculas.html#puesto-1"
      // #puesto-1      => Enlace ancla (<a href=""/>)

   "/user:userName"
      // :userName      => Parametro (req.param.userName)

//7 Configuracion de express

   //Crear una variable de app y usarla
   app.set("NombreDeVariable", "valor de Variable");
   app.get("NombreDeVariable");

   app.set("case sensitive routing", true)//Configuracion para paths case sensitive
   app.set("view engine", "ejs" ); //Habilitar el uso del motor ejs
   app.set("view", path.join(__dirname,"viewsFolder")); //Indicar la carpeta de vistas

//8 Servir Archivos Estaticos

   //Guardar los archivos estaticos en la carpeta "/public"
      //Usando modulo Path de Node
      app.use("/rutaPublica", express.static(path.join(__dirname,"./public")))

//9 Router, modularizacion de rutas

   //A- Crear una carpeta "/router"
   //B- Importar express para utilizar "express.Router()"
   //C- Crear y exportar el router
      export const router = express.Router()
   //D- Usar el router como middleware en la app principal (app.use(exampleRouter))

//10 Usar motor de vistas EJS (MODULO)

   //Instalar ejs con NPM e importar al archivo
   //Habilitar EJS y configurar la carpeta a usar
   //Al responder una solicitud se usa => res.render("Archivo de la carpeta views")

   //Reutilizar componentes html en distintas views
      //Utilice la siguiente sintaxis para integrar un parcial de EJS en otro archivo
      //<% - include('RELATIVE/PATH/TO/FILE') %>

/*Otros view engine = Pug, Handle Bars, Mustache

Consejos:

1.Elección del motor de plantillas adecuado
2.Mantener las plantillas sencillas y legibles (Evitar la sobrecarga de lógica)
3.Evitar lógica compleja en las plantillas (realizar el procesamiento de datos en el servidor)
4.Reutilización de plantillas y parciales (reduce la duplicación de código)
5.Seguridad y prevención de ataques XSS (Cross-Site Scripting)
6.Optimización del rendimiento con estrategias de caching*/

//11 Concetar Express a una DB



// Organizacion de codigo

   //1º Configuracion de servidor
   //2º Middleware
   //3º Rutas de peticiones
   //4º Archivos estaticos