# Button
The button class is applied with the `.button` class. By default it is applied to the following tags:
- `a.button`
- `input.button`
- `button.button`

Default Properties:
```
$default-component-button-properties:(
  backgroundColor: getThemeProperty(backgroundColorDark),
  textColor: getThemeProperty(textColorLight),
  backgroundHoverColor: getThemeProperty(backgroundColorLight),
  textHoverColor: getThemeProperty(textColorDark),
  padding: 10px 40px,
  margin: 5px 0,
  borderRadius: 5px
);
```

This example shows how to update the colors of a button:
```
$component-button-properties:(
  backgroundColor: #ff0000,
  backgroundHoverColor: #ffff00,
);
```

