# Documentation
## Breakpoints
A breakpoint is the width at which we need to adjust the css for that width.

We define two possible arrays of breakpoints, one for desktop breakpoints and one for all responsive breakpoints (phones, tablet, etc...).

More breakpoints can be added by overriding $fw-responsive-breakpoints variable, by either adjusting the widths or adding new breakpoints all together. *It is recommended to leave the default breakpoints as is and either adjust the widths or add new ones altogether.*

## Classes
**.flex-container**
A flex container has default flexbox settings which can easily be overridden. All breakpoint widths should be wrapped in this class.

**.{breakpoint}-{width}**
*desktop-1, tablet-1, phone-1...desktop-100, tablet-100, phone-100*
For each breakpoint the width of the element, 1-100

**.{breakpoint}-hide**
*desktop-hide, tablet-hide, phone-hide*
The element would be hidden at the breakpoint defined

**.{breakpoint}-show**
*desktop-show, tablet-show, phone-show*
The element would be shown at the breakpoint defined

**.space**
The space class is an attempt to have a uniform base padding option. It has several variant classes which can adjust the spacing amount per element.

## Examples

Two columns 50% on desktop, One Column 100% on phone
```css
<div class="flex-container">
  <div class="desktop-50 phone-100">
    <div class="space">
      [ CONTENT GOES HERE ]
    </div>
  </div>
  <div class="desktop-50 phone-100">
    <div class="space">
      [ CONTENT GOES HERE ]
    </div>
  </div>
</div>
```
