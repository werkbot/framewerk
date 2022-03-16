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
  borderRadius: 5px,
  textTransform: initial,
  fontWeight: 400,
  fontFamily: getThemeProperty(fontText),
  fontSize: 1rem,
  variants: (
    white-btn: (
      background-color: getThemeProperty(backgroundColorLight),
      color: getThemeProperty(textColorDark),
      hoverStyle: (
        background-color: getThemeProperty(primaryColor),
        color: getThemeProperty(textColorLight),
      )
    )
  )
);
```

This example shows how to update the colors of a button:
```
$component-button-properties:(
  backgroundColor: #ff0000,
  backgroundHoverColor: #ffff00,
);
```

### Variants
Button style variations can be defined using the `variants` property:
```
$component-button-properties: (
    variants: (
        // This will define a .button.orange-btn class with the provided styles
        orange-btn: (
          background-color: orange,
          color: white,
          // This property defines the button styles when hovered over
          hoverStyle: (
            background-color: black,
            color: orange,
          )
        )
    )
);
```
Use the variant with the `.button` class:
```
<button class="button orange-btn">Orange Button</button>
```