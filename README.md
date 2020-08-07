# Commander Gulp Styles Dynamic

<p>This project is created to compile css </p>
 
![MIT License](https://img.shields.io/badge/lincense-MIT-yellow?style=for-the-badge) 
![npm: version (tag)](https://img.shields.io/badge/npm-v6.4.3-blue?style=for-the-badge)
![gulp: version (tag)](https://img.shields.io/badge/gulp-v3.9.1-orange?style=for-the-badge)
![node License](https://img.shields.io/badge/node-v8.16.0-green?style=for-the-badge) 


## Installation

```bash
$ npm install commander-gulp-styles
```


#### Command to Compile

```bash
$ commander-styles scss 'entry' --sc 'ouput' 
```

```bash
$ commander-styles stylus 'entry' --st 'ouput' 
```

#### Example

```bash
 "scripts": {
    "styles": "commander-gulp-styles scss \"frontend/src/static/styles/*.scss\" \"frontend/src/static/styles/**/*.scss\" --sc \"docs/styles\" && commander-gulp-styles stylus \"frontend/src/static/styles/*.styl\" \"frontend/src/static/styles/**/*.styl\" --st \"docs/styles\""
  }
```
