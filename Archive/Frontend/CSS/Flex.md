# flex-direction

    Column | Column-Reverse
    Row    | Row-Reverse

# Proporciones de items (para rellenar el contenedor)

    - flex-grow (default:0)
        - Por defecto el item NO crece
        - Un valor alto hace crecer al item si en el contenedor hay espacio disponible

    - flex-basis (default:auto)
        - Se usa para establecer el tamaño base del item
        - Usar valor 0 hace que todos tengan el mismo tamaño (sin importar el contenido)

    - flex-shrink(default:1)
        - Se encarga de contraer el item si no hay espacio suficiente en el contenedor

        - flex
            - Shorthand: Grow, Shrink, Basis

# Gap (contenedor) y Order (item)

    Gap > Añade espacio solo entre los items (usa medidas relativas y absolutas)

    Order > indica el orden en el que aparecen los item (Usar html en lo posible para ordenar los elementos)

# flex-wrap

    nowrap > (Default) Si no hay espacio en el contenedor, contrae a los items
    wrap > Si no hay espacio en el contenedor, los items saltan a la siguiente linea
    wrap-reverse > Se reparten en forma invertida
        flex-flow > ShortHand para flex-direction y flex-wrap

# justify-content (EJE PRINCIPAL, CONTENEDOR)

    - Alinea los items y los separa

        - flex-start > (DEFAULT) Alinea todos al inicio sin separacion
        - flex-end > Alinea todos al final sin separacion
        - center > Centra los items sin separacion entre ellos

        - space-around > Espacio equitativo entre cada item y suma los espacios de cada uno
        - space-between > Espacio equitativo entre cada item, no los separa de los extremos
        - space-evenly > Espacio equitativo entre items y los extremos

# align-content (EJE CRUZADO, CONTENEDOR)

    - Alinea los items entre ellos en su eje cruzado
    - No funciona si solo hay una linea de items o elementos (es decir necesita haber desbordamiento con wrap o wrap reverse)

        - flex-start > Alinea las lineas al inicio, cada línea siguiente es unida a su predecesora.
        - flex-end > Alinea las lineas al final, cada línea que predece es unida a la siguiente
        - center > Se alinean al centro

        - space-between > Deja un espacio equitativo entre cada linea, pero no los separa de los extremos
        - space-around > Deja un espacio equitativo entre cada item y suma los espacios de cada uno
        - strech > Se alinean en base a la mas grande

# align-items (contenedor)

    - Alinea los ítems sobre el eje cruzado
    - Necesita height para funcionar

        - stretch > se ajustan a la altura de aquel mas alto
        - flex-start > Se alinean al comienzo
        - flex-end > Se alinean al final
        - center > Se alinean al centro
        - baseline > Alinea en base a la linea del texto

# align-self (ITEMS)

    - Alinea los items individualmente
        - stretch > Ocupa todo el espacio disponible
        - center > Se alinea en el centro
        - start > Se alinea al inicio
        - end > Se alinea al final
        - baseline > Alinea en base a la linea del texto