# Hamburgers

We make use of the following library for hamburger usage: https://github.com/jonsuh/hamburgers which is a collection of CSS-animated hamburger icons.

This can be configured by overriding `$component-hamburger-properties` which is located here: `sass\components\hamburger\_hamburger.scss`

In your HTML code you can specify the hamburger you would like to use by including the class name, ex:
```
<button class="hamburger hamburger--slider" type="button">
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</button>
```