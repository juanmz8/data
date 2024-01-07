Parte 1 (Basico)

    Conceptos basicos
    Box model
    Position
    Display
    Selectores
    Unidades de medidas

Parte 2 (Intermedio)

    Metodologia BEM
    Background
    Object-position
    Object-fit
    Float
    CSS Variables
    CSS Objet Model
    Funcion calc()

Parte 3 (Decoracion)

    Colores
    Bordes
    Propiedades de Texto
    Box-shadow
    Filter

Parte 4 (Practicas y Consejos)

    Malas practicas
    Buenas practicas
    Fallback

# 1 Basico

### Conceptos basicos

    - Herencia
        - No todos los elementos heredan propiedades
        - Iinitial : Inicial del elemento
        - Inherit : Heredada del padre

    - Especificidad
        - 001 = etiquetas/pseudoElementos
        - 010 = clases/atributos/pseudoClases
        - 100 = ID
        - 1000 = estilos en linea

    - Prefijos
        - Se usan para que el archivo CSS sea compatible con otros navegadores y versiones antiguas.
        - En el index.html se usa el archivo auto-prefijado y en el style.css se escribe codigo normalmente

### Box model

Margin

    - Shorthand con 4 valores > margin:top | margin:right | margin:bottom | margin left

        - Si se usan 4 valores aplican en > top, right, left, bottom
        - Si se usan 3 valores aplican en > top, right/left, bottom
        - Si se usan 2 valores aplican en > top/bottom, right/left

    -Se debe declarar WIDTH para usar margin horizontales en elementos de bloque
    -Usar margin 0 en el body

    - Los margenes verticales COLAPSAN
    - Usar margin-bottom

    - Ante Colapsado de margenes entre padres e hijos. Usar cualquiera de estas opciones
         - overflow:hidden | padding-top:0.1px | border-top: 0.1px

Padding

    - Mismo shorthand que margin
    - Funciona igual con elementos INLINE y BLOCK

Box Sizing

    - Modifica padding y border
    - Utilizar el selector Global para establecer "box-sizing: border-box;"

        - content-box
            - Por defecto, suma el padding y borde a Height y Width
        - border-box
            - Respeta Height y Width asignado, recalculando el tamaño total de la caja

Overflow (desbordamiento)

    - visible > Por defecto
    - hidden > Esconde el contenido que se desborde
    - scroll > Añade un scroll
    - auto > añade scroll en caso de que sea necesario

### Position

static

    - Por defecto
    - No se puede mover

relative

    - Se mueve a partir de su propia posicion
    - Existe la superposicion de cajas, no se empujan

absolute

    - Pierde su espacio en el html
    - Ajusta el tamaño a su contenido si no tiene width y/o height
    - Usa el contenedor o el viewport como referencia (no es necesario que sea hijo directo)
    - Automaticamente los elementos se convierten en block
    - Para centrar un elemento con esta posicion se usa margin:auto e inset:0

fixed

    - Pierde su espacio en el html
    - Ajusta el tamaño a su contenido si no tiene width y/o height
    - Usa el viewport como refencia
    - Se queda pegado aunque se haga scroll

sticky

    - Los valores top, left, right, le indican en donde se quedara fijado
    - Se queda pegado a su contenedor (el contenedor debera tener position:relative)
    - La propiedad overflow no debe estar declarada

z-index

    - Es orden de apilamiento (superposicion de cajas)
    - Por defecto es auto, la ultima caja es la que predomina
    - Se pueden dar valores negativos (para posicionar al hijo detras del padre, pero el padre no debe tener z-index)

    ELEMENTOS QUE SE APILAN

            elementos con un valor opacity menor de 1
            elementos con un valor transform distinto de "none",
            elementos con un valor mix-blend-mode distinto de "normal",
            elementos con un valor filter distinto de "none",
            elementos con un valor perspective distinto de "none",
            elementos con un valor isolation igual a "isolate",
            elementos con un valor -webkit-overflow-scrolling igual a "touch"
            position: fixed

### Display (Contenedor)

    - none > No muestra el elemento
    - block > convierte al elemento en bloque
    - inline > convierte al elemento en linea (no admite width y height)
    - inline-block > convierte al elemento en linea pero admite tamaños y margenes verticales

### Selectores

Selectores Simples

    - Selector global (*)

    - Selector etiquetas (etiqueta)

    - Selector ID (#id)

    - Selector clases (.class)

    - Selector Atributo
        [atributo]              selecciona todos los atributos del tipo
        [atributo="valor"]      selecciona el atributo que tenga ese valor
        [atributo^="valor"]     selecciona el atributo que empieza por ese valor
        [atributo*="valor"]     selecciona el atributo que contenga el valor
        [atributo$="valor"]     selecciona cuando es el ultimo valor del atributo
        [atributo|="valor"]     selecciona atributos con o sin guiones

Selectores Compuestos

    (,) Se usa una coma para agruparlos selectores
    ( ) Se usa un espacio entre el padre y el hijo para seleccionar ese hijo unicamente
    (+) Selecciona solo un hermano siguiente
    (~) Selecciona todos los hermanos siguientes
    (>) Selecciona todos los hijos directos de un contenedor

PseudoClases

    :first-child > Primer elemento en un grupo de hermanos
    :firt-of-type > Primer elemento de su tipo en un grupo de hermanos

    :last-child > Ultimo elemento en un grupo de hermanos
    :last-of-type > Ultimo elemento de su tipo en un grupo de hermanos

    :nth-child() > Eleccion de elementos por numero
    :nth-last-child() > Eleccion de elementos por numero, contando desde el final

    :nth-of-type() > Eleccion de elementos de un tipo
    :nth-last-of-type() > Eleccion de elementos de un tipo, contando desde el final

    :only-child > Elemento que es hijo unico
    :only-of-type > Elemento que es hijo unico en su tipo

    :hover > Usarlo en media queries,solo para escritorio.Aplica estilos cuando este el cursor encima del elemento
    :focus > Representa un elemento que recibio el foco
    :active > Representa un elemento que se encuentra activado

    :link > Cuando un link no se ha visitado
    :visited > Cuando un link se ha visitado

    :checked > Representa cualquier radio, checkbox, option cuando es checkeado
    :valid > Representa cualquier elemento input cuyo contenido se valide

PseudoElementos

    ::after > Crea un elemento que es el último hijo del elemento seleccionado

    ::before > Crea un elemento que es el primer hijo del elemento seleccionado

    ::first-letter > Primera letra de la primera línea un elemento de bloque

    ::first-line > Primera línea del elemento

    ::placeholder > Texto provisional en un elemento input o un elemento textarea.

### Unidades de medidas

Absolutas

    px > pixeles
    cm > centimetros
    mm > milimetros
    Q  > 1/4 de milimetro
    in > pulgadas
    pc > picas
    pt > puntos

Relativas

    - em
        - Tamaño de letra del elemento padre
        - Para tamaños proporcionales al tamaño del texto
    - rem
        - Tamaño de letra del elemento html (16px)
        - Para tamaños de fuente

    - Porcentajes %
        - equivale al porcentaje del padre (debe tener medidas establecidas)

    - vh
        - equivale a % de viewport height
    - vw
        - equivale a % de viewport width

    - vmin
        - equivale a 1% del valor mas pequeño del viewport
    - vmax
        - equivale a 1% del valor mas grande del viewport

    - min-width | max-width | min-height | max-height

# 2 Intermedio

### Metología BEM

Sintaxys (Común y bloques dentro de bloques)

    <header class="header">
		<h1 class="header__h1"> Texto de la pagina </h1>
		<nav class="header__nav nav">
			<ul class="nav__ul">
				<li class="nav__li"> Item de lista </li>
				<li class="nav__li"> Item de lista </li>
				<li class="nav__li"> Item de lista </li>
				<li class="nav__li"> Item de lista </li>
			</ul>
		</nav>
	</header>

Explicación

	- Header es un bloque
	- Nav es un elemento dentro del bloque header
	- Nav se convierte en bloque (creando una nueva clase mediante un espacio)
	- Los elementos dentro de nav ahora pertenecen a ese nuevo bloque

### Background

	- background-color
		- a color al fondo

	- background-image
		- Usa una url para cargar una o varias imagenes

	- background-attachment
		- scroll > La imagen se mueve junto al contenido
		- fixed > Fija el fondo al contenedor

	- background-repeat
		- Repite el fondo o no lo hace

	- background-size
		- Funciona con cover|contain

	- background-position
		- Especifica la zona donde estara la imagen dentro de la caja
		- (top|left|right|bottom|center)

	- background-clip
		- border-box > El fondo se extiende hasta el borde exterior del contenedor
		- padding-box > El fondo se extiende hasta el borde exterior del padding
		- content-box > El fondo se dibuja desde donde inicia el contenido.

### Object-position

	- Determina la posicion del elemento de reemplazo dentro de la caja.

		- Se puede usar 1 o 2 valores
		- Top / Bottom
		- Right / Left
		- Se pueden usar unidades de medida

		- Ejemplos

			object-position: top;
			object-position: 50% 50%;
			object-position: bottom 10px right 20px;

### Objet-fit

Indica como el contenido de un elemento de reemplazo debería redimensionarse para ajustarse a su contenedor

	-Para imagenes y videos

	- none > Por defecto

	- contain > Mantiene su relacion de aspecto pero modifica su tamaño para entrar en la caja
	- cover > Mantiene su relacion de aspecto pero no modifica su tamaño

	- fill > Rellena toda la caja
	- scale-down > Usa el tamaño mas grande que puede en la caja sin pero sin exeder la caja

### Float (obsoleto)

	- left
		- El elemento debe flotar a la izquierda de su bloque contenedor

	- right
		- El elemento debe flotar a la derecha de su bloque contenedor

	- none
		- El elemento no deberá flotar

	- inline-start
		- El elemento debe flotar en el inicio de su bloque contenedor

	- inline-end
		- El elemento debe flotar en el fin de su bloque contenedor

### Sliders con scroll

scroll-snap-type

    - Establece puntos de anclaje al hacer scroll
    - Se usa en el contenedor de los elementos

    none: Cuando se hace scroll en el contenedor, se ignoran los puntos de ajuste.
    x: Los puntos de ajuste son horizontales.
    y: Los puntos de ajuste son verticales.
    both: Los puntos de ajuste son horizontales y verticales

    mandatory:
        - Solo hara scroll hacia el proximo elemento cuando se encuentre cerca de su punto de anclaje, de otro modo no avanzara y nunca quedara entre medio de dos elementos

    proximity:
        - Puede quedar a mitad del scroll si no esta cerca de su punto de anclaje

scroll-snap-align

    - Se aplica esta propiedad en los elementos del contenedor
    - Tambien se usa X o Y

    none: La caja no tiene ningún punto de ajuste en su eje.
    start: La caja tiene como punto de ajuste su inicio.
    end: La caja tiene como punto de ajuste su final.
    center: La caja tiene como punto de ajuste su centro.

### CSS Variables

Global

    :root {
        --variable: valor;
    }

    .div {
        propiedad: var(--variable);
    }

Local

    .div {
        color: var(--variable)
    }

### CSS Objet Model

Es una API igual que DOM en html

Permite manipular CSS desde Javascript

### Calc()

    Calcula 2 valores (+ - / *)
    Pueden ser anidadas

Usos:

    Cambiar los valores de las propiedades a varios elementos (por ejemplo color) En base a una variable

    :root {
        --r:5;
        --g:81;
        --b:255;
    }

    .button{
        background-color: rgb(var(--r),var(--g),var(--b));

    }

    .siguiente{
        background-color: rgb(calc(var(--r) - 40), calc(var(--g) - 40), calc(var(--b) - 40));
    }

# 3 Decoracion

### Colores

rgb (Actualizado 1/11/2023)

    (0-255 0-255 0-255)

    (0-255 0-255 0-255 / 30%)

hexadecimal

    - Valores 0 1 2 3 4 5 6 7 8 9 A B C D E F

    - #rrggbb con 6 digitos

    - #rgb con 3 digitos

    - #rgb + alpha 8 digitos (los ultimos 2 son opacidad)

hsl

    - tono
        - 0 rojo | 60 amarillo | 120 verde | 180 cyan | 240 azul | 300 magenta

    - saturacion
        - 0% gris | 100% color puro

    - luminosidad
        - 0% negro | 100% blanco

### Bordes

border

    - Shorthand con 3 valores
        - border-width | border-style | border-color

    - Cada uno es un shorthand de las direcciones
        - border-top-width/style/color
        - border-right-width/style/color
        - border-left-width/style/color
        - border-bottom-width/style/color

outline

    - Shorthand de 3 valores
        - border-width | border-style | border-color

    - No ocupa lugar (no es parte del box-model)
    - No se puede redondear
    - No se pueden controlar los lados independientes

    - outline-offset
        - distancia de separacion entre la caja y el outline

border-radius

    - Shorthand de 4 valores
        - border-top-left-radius | border-top-right-radius | border-bottom-right-radius | border-bottom-left-radius

    - Orden
        - ARRIBA izquierda | ARRIBA derecha | ABAJO derecha | ABAJO izquierda

    -Si se especifican 2 o 3 valores, los que falten toman de referencia a su diagonal

border-radius para elípses

    - Mismo shorthand pero se le agregan 2 valores por esquina

        - Primer valor radio en eje X
        - Segundo valor radio en eje Y

    - Cuando no se usan los shorthands se usa una /
        - Del lado izquierdo los valores en X
        - Del lado derecho los valores en Y

            - border-radius: 20px 50px 100px 65px / 40px 100px 200px 130px

### Propiedades del texto

text-align

    - Alinea horizontalmente
    - Debe ser elemento de bloque (no inline, no inline-block)
    - No debe tener width

    - text-align-left   > por defecto
    - text-align-right  > Alinea todo a la derecha
    - text-align-center > Alinea todo al centro

Otras propiedades

    - font-size
        - Tamaño de Letra

    - font-family
        - Fuente de letra

    - letter-spacing
        - Espacio entre letras

    - word-spacing
        - Espacio entre palabras

    - line-height
        - Tamaño del espacio entre líneas
        - Cuando el valor es igual al alto del contenedor y solo hay una linea de texto, se centra verticalmente

    - text-overflow
        - Determina que hace con el texto desbordado y que es oculto por overflow hidden
            - clip > corta el texto en el borde
            - ellipsis > mostrara 3 puntos suspensivos

    - text-shadow
        - Eje X, Eje Y

    - text-decoration
        - Efectos de subrayado, tachado

    - text-indent
        - Desplazamiento de la primera línea del texto

    - ltr o rtl
        - texto desde la izquierda o desde la derecha

    - user-select:none
        - No permite seleccionar texto

    - Scroll-behavior:smooth
        - Scroll con smooth

### box-shadow

    - Contiene 6 valores
        - Eje X / Eje Y / blur-radius / spread-radius / color

    - inset
        - sombra por dentro de la caja

    - Se pueden crear sombras ilimitadas

### Filter

Se pueden aplicar varios a la vez, se usa en imagenes, fondos o bordes

    - filter: blur(5px);
    - filter: brightness(0.4);
    - filter: contrast(200%);
    - filter: drop-shadow(16px 16px 20px blue);
    - filter: grayscale(50%);
    - filter: hue-rotate(90deg);
    - filter: invert(75%);
    - filter: opacity(25%);
    - filter: saturate(30%);
    - filter: sepia(60%);

# 4 Practicas y Consejos

### Malas practicas

*{
    margin: 0;
    padding: 0;
}

.article{
    margin: 0 auto;
}

### Buenas practicas

    *{
        box-sizing: border-box;
    }

    body{
        margin: 0px;
    }

    .article{
        margin-left: auto;
        margin-right: auto;
    }

    - Position relative en el padre y relative en sus hijos
    - Usar "aspect-ratio: ;" para arreglar imagenes

### FALLBACK

Hacer fallback es utilizar la cascada de CSS para asegurar la compatibilidad de una propiedad en todos los navegadores:

    .article{
        background-color: #fa1919;  //propiedad por defecto si la siguiente no es compatible
        background-color: hwb(0 10% 2%);    //primera opcion
    }