# Layout
To layout the overall structure and content on a page a mixture of flex properties with device breakpoints is used.

`.flex-container`<br />
A flex container has default flexbox settings which can easily be overridden. All device breakpoint widths should be wrapped in this class.

`.fw-space`<br />
The space class is an attempt to have a uniform base padding option. It has several variant classes which can adjust the spacing amount per element.

`.fw-space-{breakpoint}-{class}`<br />
*fw-space-tablet-double, fw-space-phone-triple*
The default spacing is overriden by breakpoint

`.fw-typography-spacing`<br />
This class is used to apply default spacing to typography elements, intended to be applied to a container class.


## Device Breakpoints
A device breakpoint is the width at which we need to adjust the css for that width.

We define two possible arrays of device breakpoints, one for desktop breakpoints and one for all responsive breakpoints (phones, tablet, etc...).

`.{breakpoint}-{width}`<br />
*desktop-1, tablet-1, phone-1...desktop-100, tablet-100, phone-100*<br />
For each breakpoint, set the width of the element to 1-100%

`.{breakpoint}-hide`<br />
*desktop-hide, tablet-hide, phone-hide*<br />
The element would be hidden at the device breakpoint defined

`.{breakpoint}-show`<br />
*desktop-show, tablet-show, phone-show*<br />
The element would be shown at the device breakpoint defined

`.{breakpoint}-auto`<br />
*desktop-auto, tablet-auto, phone-auto*<br />
The width of the element would be set to auto at the device breakpoint defined

## Examples
Two columns 50%, double spacing on desktop, One Column 100%, default spacing on phone
```html
<div class="flex-container">
  <div class="desktop-50 phone-100">
    <div class="fw-space double fw-space-phone-default">
      [ CONTENT GOES HERE ]
    </div>
  </div>
  <div class="desktop-50 phone-100">
    <div class="fw-space double fw-space-phone-default">
      [ CONTENT GOES HERE ]
    </div>
  </div>
</div>
```
