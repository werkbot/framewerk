# Framewerk
Werkbot's css framework.

## Installation
`npm i framewerk --save-dev`

## Setup
#### Include JS and Styles
`require('framewerk')`

#### Or include source files in your build
JS\
`require('./node_modules/framewerk/js/form.js');`\
Sass\
`@import './node_modules/framewerk/sass/fw-variables';`\
`@import './node_modules/framewerk/sass/fw-bundle';`

## Build
#### Creates a new distribution file (./dist/framewerk.js)
- `npm run build`
- `npm run watch`

## Documentation

### Setup
Include `fw-bundle` in your sass build, preferably at the top:
`@import '../../vendor/werkbot/framewerk/sass/fw-bundle';`

#### Configure
Define configuration options (colors, component properties, etc...) before the `fw-bundle` in your sass build:
```
/* Config */
@import 'colors';

/* Framewerk */
@import '../../vendor/werkbot/framewerk/sass/fw-bundle';
...
...
...
```

### Further Documentation
* [Further documentation here](docs/en/README.md)
