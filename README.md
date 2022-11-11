# Framewerk
A framework of css and javascript that Werkbot uses as a foundation to build websites.

## Installation
`npm i werkbot-framewerk --save-dev`

---

## Setup
There are two options to install to your project:

### Use distributed files

#### Import JS and Styles together
`require('framewerk'); // node_modules/framewerk/dist/framewerk.js`

#### Import JS and Styles together with initialized settings
```
const framewerk = require('framewerk');
framewerk({
	primaryColor: '#999999',
	backgroundColorDark: '#333333',
});
```

#### Import JS and Styles separately
`require('framewerk/js/form.js') // node_modules/framewerk/js/form.js`\
`@import url('framewerk/dist/fw-bundle.css'); // node_modules/framewerk/dist/fw-bundle.css`

### Incorporate into your build
#### SASS Setup
Include this at the top of your main sass file:

`@import 'werkbot-framewerk/sass/fw-bundle';`

> *Depending on your setup, you may need to include `node_modules` in your build path. For example, we include: `importPath: 'node_modules'` for compass*

If you define your own `$theme-properties` and extend the `breakpointResponsive` property with additional breakpoints, you will need to include the [postcss-sort-media-queries](https://github.com/yunusga/postcss-sort-media-queries) plugin. The order in which `@media` queries are defined in the CSS **does** matter. This CSS library uses a "desktop-first" approach for media queries, so be sure to configure the plugin accordingly:

```js
require('postcss-sort-media-queries')({
    sort: 'desktop-first',
})
```

#### Javascript Setup
Include this in your main js file:

`require('werkbot-framewerk');`

---

## Further Documentation
* [Layout documentation](docs/en/layout.md)
* [SASS documentation](docs/en/sass-setup.md)
* [Components documentation](docs/en/components.md)

