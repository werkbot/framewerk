# SASS Configuration

The sass is built to be configurable per project, we do this by having a default properties map which we refer to as the "theme", its located here: `sass\variables\_theme.scss`. 

```
$default-theme-properties: (
  // Colors
  primaryColor: #999999,
  secondaryColor: #000000,
  tertiaryColor: #cccccc,
  backgroundColorLight: #ffffff,
  backgroundColorDark: #333333,
  textColorLight: #ffffff,
  textColorDark: #333333,

  // Fonts
  fontHeader: "Montserrat",
  fontText: "Roboto",
  fontIcon: "Font Awesome 5 Pro",

  // Layout
  layoutSpace: 20px,
  layoutContainerWdth: 1366px,

  // Breakpoints
  breakpointDesktop: (
    desktop: 1366px
  ),
  breakpointResponsive: (
    desktopsmall: 1366px,
    tablet: 1024px,
    phone : 600px
  )
);
```

Furthermore, there are individual components that have their own property maps.

The theme and component properties can be completely overridden or added to in your project.

To override a theme or component property, define the override before you include the fw-bundle.scss in your project.
```
@import 'your-override-maps';
@import 'framewerk/sass/fw-bundle';
```

The following example updates the primary color of the site and defines a new breakpoint to be included:
```_theme.scss
$theme-properties:(
  primaryColor: #362636,
  breakpointResponsive: (
    tabletLarge: 2024px
  )
);
```

Components are also configurable, see a [list of components](components.md)

To retrieve a theme property in your sass `getThemeProperty(PROPERTY);` an example:
```
 color: getThemeProperty(textColor);
```

To retrieve a component property in your sass `getThemeProperty(PROPERTY, MAP);` an example:
```
getThemeProperty(textHoverColor, $component-button-properties);
```