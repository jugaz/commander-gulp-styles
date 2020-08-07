var
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    debug = require('gulp-debug'),
    gulp = require('gulp'),
    reload = browserSync.reload,
    util = require('gulp-util');


var config = {
    jsIndex: {
        entry: ['./frontend/src/static/scritps/index.js'],
        watch: [
            './frontend/src/static/scripts/**/*.js',
            './frontend/src/static/scripts/*.js'
        ],
        output: './docs/scripts'
    },

    /*----------------------------------------------------------------------------------*/
    /* PLUGINS
    /*----------------------------------------------------------------------------------*/

    plugins: {
        entry: [
            './frontend/src/static/plugins/**/*.min.css',
            './frontend/src/static/plugins/**/*.min.js'
        ],
        watch: [
            './frontend/src/static/plugins/**/*.css',
            './frontend/src/static/plugins/**/*.js',
            './frontend/src/static/plugins/**/*.min.css',
            './frontend/src/static/plugins/**/*.min.js'
        ],
        output: './docs/plugins/'
    }
};




/*----------------------------------------------------------------------------------*/
/* Scripts
/*----------------------------------------------------------------------------------*/

gulp.task('jsIndex', function () {
    gulp.src(config.jsIndex.entry)
        .pipe(debug({title: 'scripts:'}))
        .pipe(concat('index.js'))
        .on('error', function (error) { 
            // tenemos un error 
            util.log("Error Name:" ,error.name);
            util.log("Error Code:",error.code);
            util.log("Error Filename:",error.filename);
            util.log("Error Line:",error.line);
            util.log("Error Column:",error.column);
            util.log("Error Msg",error.Msg);

    
        }) 
        .pipe(gulp.dest(config.jsIndex.output))
        .pipe(browserSync.stream())
        .on('end', function () { 
            util.log('Done!');
        });
});


gulp.task('plugins', function () {
    gulp.src(config.plugins.entry)
        .pipe(debug({title: 'plugins:'}))
        .on('error', function (error) { 
            // tenemos un error 
            util.log("Error Name:" ,error.name);
            util.log("Error Code:",error.code);
            util.log("Error Filename:",error.filename);
            util.log("Error Line:",error.line);
            util.log("Error Column:",error.column);
            util.log("Error Msg",error.Msg);


        }) 
        .pipe(gulp.dest(config.plugins.output))
        .on('end', function () { 
            util.log('Done!');
        });
});


gulp.task('scripts', ['jsIndex']);