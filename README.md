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
* [Further flex-container documentation here](docs/en/flex-container.md)
* [Further form documentation here](docs/en/form.md)