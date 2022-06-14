# `<a>` Tag

```
// Default link Properties
$default-element-link-properties:(
  linkColor: getThemeProperty(textColorDark),
  linkColorVisited:getThemeProperty(textColorDark),
  linkColorActive: getThemeProperty(textColorDark),
  linkColorHover: getThemeProperty(textColorDark),
  linkDecoration: underline,
  linkDecorationHover: none
);
```

## Mixin
A mixin is provided to override the default link properties.
```
@mixin fw-mixin-link($properties) {
    ...
```

For example, consider a section where all the links need to be white text instead of the default dark text color:
```
.dark-section a{
      $properties:(
        linkColor: getThemeProperty(textColorLight),
        linkColorVisited:getThemeProperty(textColorLight),
        linkColorActive: getThemeProperty(textColorLight),
        linkColorHover: getThemeProperty(textColorLight),
        linkDecoration: none,
        linkDecorationHover: none
      );
      @include fw-mixin-link($properties);
}
```
All links in this section would then be updated.