# Framewerk
Werkbot's framework for building websites.

## Installation
`npm i framewerk --save-dev`

## Setup
#### Include JS and Styles
`require('framewerk')`

#### Or include source files in your build
##### JS
JS\
`require('./node_modules/framewerk/js/form.js');`

##### SASS
Define configuration options (colors, component properties, etc...) before the `fw-bundle` in your sass build:
```
/* Config */
@import 'theme';

/* Framewerk */
@import 'framewerk/sass/fw-bundle';
...
...
...
```

## Build
#### Creates a new distribution file (./dist/framewerk.js)
- `npm run build`
- `npm run watch`

### Further Documentation
* [Further SASS documentation here](docs/en/sass-setup.md)
* [Further flex-container documentation here](docs/en/flex-container.md)
* [Further form documentation here](docs/en/form.md)
