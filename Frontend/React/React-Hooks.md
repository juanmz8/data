__useState__
__useEffect__
__useRef__
__useContext__
__useReducer__
__useMemo__
__useCallback__

# useState

- Sirve para : Crear y Actualizar el estado
- Parametros : Variable state , funcion que actualiza la variable

   Ejemplo

      const [myColor, setColor] = useState("red");
      <!-- En este caso, "red" es el valor de myColor -->

      onClick= { () => setColor("gren") }
      <!-- Se crea este handler en el elmento html -->
      <!-- Es decir; <button "Aqui va ese codigo">Triger</button> -->

      style={{ color: myColor }}
      <!-- La propiedad CSS color recibe como valor la variable "color" -->
      <!-- ¡Diferenciar entre estilos inline y la etiqueta <style></style>! -->

# useEffect

- Se ejecuta luego de que el componente se haya renderizado y cada vez que se actualiza
- Sirve para : Subscribirse a eventos, peticiones api y actualizaciones DOM
- Parametros : Funcion de efecto, lista de dependencias(opcional)

   - Lista de dependencias = array que especifica dependencias del efecto
   - Si el array está vacio, el efecto se ejecuta solo una vez despues del render
   - Si el array tiene valores, el efecto se ejecuta cada vez que algun valor cambie

   Ejemplo

      const [scrollY, setScrollY] = useState(0);
      <!-- Establecemos el estado del componente -->

      useEffect(() => {
         const handleScroll = () => {
            setScrollY(window.scrollY);
         };
      <!-- Creamos la funcion que va a ejecutar "useEffect" -->

         window.addEventListener("scroll", handleScroll);
      <!-- Creamos una subscripcion al evento "scroll" de window -->

         return () => {
            window.removeEventListener("scroll", handleScroll);
         };
      <!-- Este return de la funcion de efecto elimina la subscripcion al evento -->
      <!-- La "funcion de efecto" es el parametro 1 de useEffect -->
      }, []);

# UseRef
# UseContext
# UseReducer
# UseMemo
# UseCallback