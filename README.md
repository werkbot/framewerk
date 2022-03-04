# Framewerk
A framework of css and javascript that Werkbot uses as a foundation to build websites.

## Installation
`npm i framewerk --save-dev`

---

## Setup
There are two options to install to your project:

### Use distributed files

#### Import JS and Styles together
`require('framewerk'); // node_modules/framewerk/dist/framewerk.js`

#### Import JS and Styles separately
`require('framewerk/js/form.js') // node_modules/framewerk/js/form.js`
`@import url('framewerk/dist/fw-bundle.css'); // node_modules/framewerk/dist/fw-bundle.css`

### Incoproprate into your build
#### SASS Setup
Include this at the top of your main sass file:

`@import 'framewerk/sass/fw-bundle';`

> *Depending on your setup, you may need to include `node_modules` in your build path. For example, we include: `importPath: 'node_modules'` for compass*

#### Javascript Setup
Include this in your main js file:

`require('./node_modules/framewerk/js/form.js');`

---

## Build Process
Generate new dist files using the following:
- `npm run build`
- `npm run watch`

---

## Further Documentation
* [Layout documentation](docs/en/layout.md)
* [SASS documentation](docs/en/sass-setup.md)
* [Components documentation](docs/en/components.md)

