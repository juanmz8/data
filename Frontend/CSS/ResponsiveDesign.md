# Breakpoints

    Basicos
        0px-480px movíl
        480px-960px tablet
        960px-1328px Ordenador

    Completos
        0px-320px movil pequeño
        320px-480px movil normal
        480px-768px tablet pequeña
        768px-960px tablet normal
        960px-1024px laptop
        1024px-1328px ordenador

# Media Queries

    Son declaraciones que ejecutan un cambio mediante una condicion
    Sobrescriben las propiedades CSS
    Calcular bien los anchos usando margin
    Se puede usar el atributo media en etiquetas picture(source)

Media Types:

    all: Apto para todos los dispositivos.
    print: Vista previa de impresión.
    screen: Destinado principalmente a las pantallas.
    speech: Destinado a sintetizadores de voz.

operator:

    and > Se activa solo si se cumple un breakpoint
    or > Funciona si se cumple uno u otro breakpoint especificado, usar comas en vez de or cumple el mismo efecto
    not > Funciona si no se cumple la condicion
    only > Previene que navegadores antiguos sin soporte de "queries" con funciones apliquen los estilos asignados

Sintaxys teorica:

    .selector{
        background-color: red;
    }

    @media MediaType operator (breakpoint) {
        .selector{
            background-color: blue;
        }
    }

# Formas de maquetacion Responsive

>Usar un @media con muchos selectores dentro

>Usar un @media por cada selector

>Usar atributo media en html con la etiqueta picture

    <picture>
        <source srcset="imagen-version-movil.webp" media="screen and (max-width:340px)">
        <img src="imagen-normal" alt="descripcion">
    </picture>

*Consejos*

>Tener un buen Reset de CSS
>Usar flex o grid
>Usar siempre los mismos selectores
>Usar siempre medidas de %, vw, vh

>No usar alturas en las etiquetas
>Pensar bien los Breakpoints
>Comprobar la web en un movil real
>Se colocan al final del CSS