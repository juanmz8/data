# CREAR Filas y columnas

grid-template-columns

    - cantidad de columnas
    - grid-template-columns: 1fr 1fr 1fr; => [] [] []

grid-template-rows

    - cantidad de filas
    - grid-template-rows: 1fr 1fr; => []
                                      []

grid-template-areas

    grid-template-areas:"header header header"
                        "main main aside"
                        "footer";

# ESPACIO Enter Filas y Columnas

columns-gaps
    - Espacio entre columnas

rows-gaps
    - Espacio entre filas

# Alinear la Cuadricula dentro de su contenedor

aling-content Y

    start / end / center;
    space-around;
    space-between;
    space-evenly;

justify-content X

    start / end / center;
    space-around;
    space-between;
    space-evenly;

# Alinear TODOS los items dentro de sus celdas

align-items Y

    Alinear los items dentro de su celda
    start / end / center;

justify-items X

    Alinear los items dentro de de su celda
    start / end / center;

# Alinear individualmente los ITEMS

grid-column: 1 / 3;
        El item empieza en la linea 1 y termina en la 3

grid-row: 1 / span 3;
        El item empieza en la linea 1 y termina 2 lineas despues

grid-area:header ;
        El elemento se posiciona y ocupa las lineas que le fueron establecidas

# justify-self X
    start / end / center

# align-self Y
    start / end / center