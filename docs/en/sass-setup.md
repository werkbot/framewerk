# SASS Configuration

The default properties, located here: `sass\variables\_theme.scss`, are congifurable in your project.

To override a theme or component property define the override before include the fw-bundle.scss in your project.

The following example updates the primary color of the site and defines a new breakpoint to be included:
```_theme.scss
$theme-properties:(
  primaryColor: #362636,
  breakpointResponsive: (
    tabletLarge: 2024px
  )
);
```

Components are also configurable, currently these are:
- `sass\components\button\_button.scss`
- `sass\components\form\_form.scss` - Form has further configuration options for the different input types
- `sass\components\hamburger\_hamburger.scss`

The next example updates the button colors:
```
$component-button-properties:(
  backgroundColor: #ff0000,
  backgroundHoverColor: #ffff00,
);
```