# Commander Gulp Styles Dynamic

<p>Compilación de estilos dinámicamente</p>
 
![commander: version (tag)](https://img.shields.io/badge/commander-v3.0.2-blue?style=for-the-badge)
![gulp: version (tag)](https://img.shields.io/badge/gulp-v3.9.1-orange?style=for-the-badge)
![MIT License](https://img.shields.io/badge/lincense-MIT-yellow?style=for-the-badge) 
![npm: version (tag)](https://img.shields.io/badge/npm-v7.4.15-red?style=for-the-badge)
![node: version (tag](https://img.shields.io/badge/node-v15.4.0-green?style=for-the-badge)


## Installation

```bash
$ npm install commander-gulp-styles
```


#### Command to Compile

```bash
$ commander-gulp-styles scss 'entry' --sc 'ouput' 
$ commander-gulp-styles stylus 'entry' --sc 'ouput'
```

```bash
$ commander-gulp-styles prod:scss 'entry' --sc 'ouput' 
$ commander-gulp-styles prod:stylus 'entry' --sc 'ouput'
```

#### Example

```bash
"scripts": {
   "scss": "commander-gulp-styles scss \"frontend/src/static/styles/*.scss\" \"frontend/src/static/styles/**/*.scss\" --sc \"docs/styles\"",
   "stylus": "commander-gulp-styles stylus \"frontend/src/static/styles/*.stylus\" \"frontend/src/static/styles/**/*.stylus\" --st \"docs/styles\""
   "prod:scss": "commander-gulp-styles prod:scss \"frontend/src/static/styles/*.scss\" \"frontend/src/static/styles/**/*.scss\" --sc \"docs/styles\"",
   "prod:stylus": "commander-gulp-styles prod:stylus \"frontend/src/static/styles/*.stylus\" \"frontend/src/static/styles/**/*.stylus\" --st \"docs/styles\""
```
