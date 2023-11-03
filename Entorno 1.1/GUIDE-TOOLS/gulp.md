# Instalacion de Gulp

Instalar gulp por unica vez :

- npm install --global gulp-cli

# Preparar el entorno

1 Crear el archivo package.json :
- npm init

2 Crea la carpeta node-modules y archivo package-lock.json :
- npm install --save-dev gulp

3 Dependencias de babel crea un archivo :
- npm install --save-dev @babel/core @babel/register @babel/preset-env


# Transpilar JavaScript

gulp-babel: Este es el modulo que usara para convertir el codigo a ES5

- npm install --save-dev gulp-babel

gulp-terser: Es la nueva version de uglify, sirve para ofuscar codigo

- npm install --save-dev gulp-terser

gulp-concat: Une todos nuestros archivos en uno solo

- npm install --save-dev gulp-concat

# Archivos necesarios

Archivo **.babelrc** donde pondremos la configuracion de babel :

    {
    "presets": ["@babel/preset-env"]
    }

Archivo **gulpfile.babel.js** donde pondremos la configuracion de gulp (si es babel 6 debe llamarse gulpfile.js) :

# Minificar HTML

Minificar nuestro html
- npm install --save gulp-htmlmin

# CSS

Para usar autoprefixer  hay dos opciones, añadir los navegadores a los que queres dar soporte al package.json o hacerlo en un archivo separado (.browserList)
- npm install --save-dev gulp-postcss cssnano autoprefixer

limpia el codigo (que no se usa)
- npm install --save-dev gulp-purgecss

# PUG

- npm install --save-dev gulp-pug

# SASS

- npm install --save-dev gulp-sass

# Limpiar cache del navegador

- npm install --save-dev gulp-cache-bust

# Comprimir imagenes

- npm install --save-dev gulp-imagemin

# Sincronizacion del navegador

- npm install --save-dev browser-sync

import gulp from "gulp"
import babel from "gulp-babel"
import terser from "gulp-terser"
import concat from "gulp-concat"
import htmlmin from "gulp-htmlmin"
import pug from "gulp-pug"

const production = false;

//ImagenMin
gulp.task("imgmin", () => {
    return gulp.src("./dev/images/*")
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 30, progressive: true}),
        imagemin.optipng({optimizationLevel: 1})
    ]))
    .pipe(gulp.dest("./public/images"))
})

//HTML
gulp.task("html-min", () => {
    return gulp
        .src("./dev/*.html")
        .pipe(htmlmin({
            collapseWhitespace:true,
            removeComments:true
        }))
        .pipe(gulp.dest("./public"))
})

//JavaScript
gulp.task("babel", () => {
    return gulp
        .src("./dev/js/*.js")
        .pipe(concat("scripts-min.js"))
        .pipe(babel())
        .pipe(terser())
        .pipe(gulp.dest("./public/js"))
})

//PUG
gulp.task("views", () => {
    return gulp.src("./dev/views/pages/*.pug")
    .pipe(pug({
        pretty: production ? false : true
    }))
    .pipe(gulp.dest("./public"))
})

//Default
gulp.task("default", () => {
    gulp.watch("./dev/*.html", gulp.series("html-min"))
    gulp.watch("./dev/js/*.js", gulp.series("babel"))
    gulp.watch("./dev/views/**/*.pug", gulp.series("views"))
    gulp.watch("./dev/scss/**/styles.scss", gulp.series("sass"))
})