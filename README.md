# Framewerk
A framework of css and javascript that Werkbot uses as a foundation to build websites.

## Installation
`npm i framewerk --save-dev`

---

## Setup
Include this at the top of your main sass file:

`@import 'framewerk/sass/fw-bundle';`

> *Depending on your setup, you may need to include `node_modules` in your build path. For example, we include: `importPath: 'node_modules'` for compass*

#### Javascript Setup
Include this in your main js file:

`require('./node_modules/framewerk/js/form.js');`

---

## Further Documentation
* [Layout documentation](docs/en/layout.md)
* [SASS documentation](docs/en/sass-setup.md)
* [Components documentation](docs/en/components.md)

