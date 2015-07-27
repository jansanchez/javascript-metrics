/*
* Dependencias
*/

var gulp = require('gulp'),
    complexity = require('gulp-complexity');


/*
* Configuración de la tarea 'demo'
*/

gulp.task('default', function () {
    gulp.src(['source/**/*.js'])
        .pipe(complexity);
});

