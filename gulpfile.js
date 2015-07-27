/*
*
* javascript-metrics
*
* Dependencias
*/
var gulp = require('gulp'),
    complexity = require('gulp-complexity');


/*
* Configuración de la tarea 'default'
*/
gulp.task('default', function () {
    gulp.src(['source/**/*.js'])
        .pipe(complexity({breakOnErrors: false}));
});


/*
* options: halstead: [10, 13, 20]
*/

