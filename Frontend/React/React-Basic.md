__Estructura de carpetas__
__Componentes__
__Renderizado Condicional__
__Hooks__
__Ciclo de vida del Componente__

# Estructura de carpetas

Por defecto:

   app/
      node-modules/
      public/
         index.html
         manifest.json
      src/
         components/
            componente.jsx
         App.css
         App.js
         index.css
         index.js
      gitignore
      README.md
      package.lock.json
      package.json

Otras estructuras:

   - Atomic Design
   - Hexagonal
   - File type
   - Feature

# Componentes

- Existen 2 Tipos de componentes : Function / Class

- Los componentes RECIBEN OBJETOS como argumentos : Props
- Los componentes RETORNAN ELEMENTOS que son renderizados
- Los componentes SON TRANSPILADOS con Babel o SWC para traducirlos a HTML

- Las Props son DATOS que se aplican al renderizado o INFORMACION para inicializar el state
- Las Props se pasan de un componente padre a un componente hijo
- Las Props SON INMUTABLES, es decir solo para lectura

- El objeto especial "prop" contiene todas las propiedades definidas en el comoponente padre
- El objeto especial "children" es el hijo de cada componente, lo que envuelve la etiqueta

- El state es un contenedor donde se establece el estado inicial de un componente
- El state puede cambiar durante el ciclo de vida del componente

- Los eventos suelen actualizar los estados mediante funciones
- Se utilizan eventos tipo "on" en lugar de "addEventListener"
- Los eventos "on" reciben una funcion a ejecutar cuando este mismo ocurra

RESUMEN:

   component = Funcion que devuelve tags html
   prop = Objeto que contiene todos los atributos
   state = Valor inicial del componente
   event = Funcion que se dispara al escuchar un evento

# Renderizado Condicional

- Se refiere a mostrar elementos en base a una condicion determinada
- La UI se actualiza dinamicamente al cambiar el estado de la aplicacion
- Se utiliza "If else" u "Operador Ternario"

- Por ejemplo;
   si la aplicacion se encuentra "onLoad" mostrar el componente <App>
   de lo contrario mostrar el componente <LoadingSpinner>

# Hooks

- Los hooks son funciones que acceden al estado y al ciclo de un componente
- Los hooks se pueden usar en cualquier lugar de un componente
- Para usar un hook se debe importar al archivo

- Los hooks sirven para:
   - Acceder al estado de un componente
   - Escuchar cambios del estado de un componente
   - Ejecutar codigo cuando se crea un componente
   - Ejecutar codigo cuando se actualiza un componente
   - Ejecutar codigo cuando se destruye un componente

# Ciclo de vida del Componente

 - Es el conjunto de eventos que se producen durante la vida util de un componente

Eventos que se incluyen:

- Antes de que se renderice el componente por primera vez (componentWillMount)
   - Ejemplo: Realizar tareas como inicializar variables de estado o peticiones

- Cuando se renderiza el componente (render)
   - Ejemplo: Generar codigo HTML que representa el componente

- Después de que se renderiza el componente por primera vez (componentDidMount)
   - Ejemplo: Realizar tareas como subscribirse a eventos del navegador o actualizar el estado

- Cuando se reciben nuevas propiedades para el componente (componentWillReceiveProps)
   - Ejemplo: Actualizar el estado u realizar tareas de preparacion

- Cuando se reciben nuevas propiedades o estado para el componente (shouldComponentUpdate)
   - Ejemplo: Determinar si el componente debe actualizarse o no

- Después de que se actualiza el componente (componentDidUpdate)
   - Ejemplo: Realizar tareas como limpiar el estado temporal o actualizaciones de UI

- Antes de que se destruya el componente (componentWillMount)
   - Ejemplo: Realizar tareas de limpieza como cancelar subscripciones a eventos o liberar recursos