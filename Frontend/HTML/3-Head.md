# Elementos que se usan dentro de <head>

- <base>
   - Especifica la URL base que se utilizará para todas las direcciones URL relativas contenidas dentro de un documento

- <link>
   - Carga un recurso externo en la pagina como archivos CSS o Favicon
   - Atributos:

      href="" //Url del recurso
      hreflang="" //Idioma del recurso
      rel="" //Valores: stylesheet/alternate/license/icon/ etc
      type="" //Valores: image/png image/jpg , etc

      Combinaciones:

         <link rel="icon" type="image/jpg" href="./images/miIcon.jpg"> <!-- Icono de la pestaña -->
         <link rel="alternate" href="https://paginaAlternativa.com"> <!-- Redireccion a una pagina alternativa -->
         <link rel="canonical" href="https://paginaPrincipal.com"> <!-- Especifica la pagina principal de la web -->

- <meta>
   - Provee al documento de informacion
   - Atributos:

      name="" //Nombre asociado a la metainformacion
      content="" //Datos asociados al atributo [name]

      Combinaciones:

         name="robots" content="index, follow" <!-- Motor google indexa la pagina y sigue los enlaces -->
         name="theme-color" content="#222" <!-- Un color para la pestaña -->
         name="description" content="Descripcion de la pagina" <!-- Descripcion que aparece en la busqueda de la pagina -->

         property="og:title" content="Titulo de open graph" <!-- Titulo de la card open graph -->
         property="og:description" content="Descripcion de open graph" <!-- Descripcion de la card open graph -->
         porperty="og:image" content="url/imagen.png" <!-- Imagen de la card -->
         porperty="og:image:alt" content="Descripcion de la imagen" <!-- Description si la img no carga -->

- <title></title> //Contiene el titulo de la pestaña