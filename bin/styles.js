#!/usr/bin/env node

'use strict';

var
    autoprefixer = require('autoprefixer'),
    debug = require('gulp-debug'),
    less = require('gulp-less'),
    postcss = require('gulp-postcss'),
    program = require('commander'),
    sass = require('gulp-sass'),
    stylus = require('gulp-stylus'),
    util = require('gulp-util'),
    { src, dest, series, parallel } = require("gulp");


/* ######################## PLUGINS ######################## */
var Plugins = [
    autoprefixer({
        overrideBrowserslist: ['last 20 version']
    })
];


/* ######################## OPTIONS ######################## */
var options = {};


/* ######################## VERSION ######################## */
program

    .version(
        'commander-gulp-templates version: ' + require('../package.json').version + '\n'
    )

/* ######################## COMMANDER SCSS ######################## */
/*"node ./bin/styles.js scss \"frontend/src/static/styles/*.scss\" \"frontend/src/static/styles//*.scss\" --sc \"docs/styles/\""*/

program
    .command('scss <input>')
    .option("--sc [options]")
    .action((input, options) => {
        var input = options.input || options.parent.rawArgs;
        var ouput = options.ouput || options.sc;
        input = input.filter(function (index, value) {
            if (index.slice((index.lastIndexOf(".") - 1 >>> 0) + 2) == "scss") {
                return index;
            }
        });


        return src(input, { allowEmpty: true })
            .pipe(debug({
                title: 'commader-gulp-styles:'
            }))
            .pipe(sass({
                outputStyle: 'compressed'
            }))
            .on('error', function (error) {
                // tenemos un error 
                util.log("Error Name:", error.name);
                util.log("Error Code:", error.code);
                util.log("Error Filename:", error.filename);
                util.log("Error Line:", error.line);
                util.log("Error Column:", error.column);
                util.log("Error Msg", error.Msg);


            })
            .pipe(postcss(Plugins))
            .pipe(dest(ouput))
            .on('end', function () {
                util.log('Done!');
            });




    })

/* ######################## COMMANDER STYLUS ######################## */
/* "node ./bin/styles.js stylus \"frontend/src/static/styles/*.styl\" \"frontend/src/static/styles//*.styl\" --st \"docs/styles/\"" */
program
    .command('stylus <input>')
    .option("--st [options]")
    .action((input, options) => {
        var input = options.input || options.parent.rawArgs;
        var ouput = options.ouput || options.st;
        input = input.filter(function (index, value) {
            if (index.slice((index.lastIndexOf(".") - 1 >>> 0) + 2) == "styl") {
                return index;
            }

        });

        return src(input, { allowEmpty: true })
            .pipe(debug({
                title: 'commader-gulp-styles:'
            }))
            .pipe(stylus({
                compress: true
            }))
            .on('error', function (error) {
                // tenemos un error 
                util.log("Error Name:", error.name);
                util.log("Error Code:", error.code);
                util.log("Error Filename:", error.filename);
                util.log("Error Line:", error.line);
                util.log("Error Column:", error.column);
                util.log("Error Msg", error.Msg);


            })
            .pipe(poststylus(Plugins))
            .pipe(dest(ouput))
            .on('end', function () {
                util.log('Done!');
            });



    })
/* ######################## COMMANDER LESS ######################## */
/* "node ./bin/styles.js less \"frontend/src/static/styles/*.styl\" \"frontend/src/static/styles//*.styl\" --lss \"docs/styles/\"" */
program
    .command('less <input>')
    .option("--lss [options]")
    .action((input, options) => {
        var input = options.input || options.parent.rawArgs;
        var ouput = options.ouput || options.st;
        input = input.filter(function (index, value) {
            if (index.slice((index.lastIndexOf(".") - 1 >>> 0) + 2) == "less") {
                return index;
            }

        });

        return src(input, { allowEmpty: true })
            .pipe(debug({
                title: 'commader-gulp-styles:'
            }))
            .pipe(less())
            .on('error', function (error) {
                // tenemos un error 
                util.log("Error Name:", error.name);
                util.log("Error Code:", error.code);
                util.log("Error Filename:", error.filename);
                util.log("Error Line:", error.line);
                util.log("Error Column:", error.column);
                util.log("Error Msg", error.Msg);


            })
            .pipe(postcss(Plugins))
            .pipe(dest(ouput))
            .on('end', function () {
                util.log('Done!');
            });



    })
program.parse(process.argv);