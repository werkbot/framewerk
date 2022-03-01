## General
```
$component-form-properties:(
  borderColor: #cccccc,
  labelColor: #cccccc,
);
```

## Checkbox
Adds Font Awesome icon checkbox
```
$component-form-checkbox-properties:(
  backgroundColor: getThemeProperty(backgroundColorLight),
  checkedIcon: "\f14a",
  checkedTextColor: getThemeProperty(textColorDark),
  notCheckedIcon: "\f0c8",
  notCheckedTextColor: getThemeProperty(textColorDark),
  iconFontFamily: getThemeProperty(formInputIconFontFamily),
);
```


## Numeric
Adds Font Awesome icon buttons to increase / decrease quantity
```
$component-form-numeric-properties:(
  backgroundColor: getThemeProperty(backgroundColorLight),
  iconBackgroundColor: getThemeProperty(backgroundColorDark),
  iconTextColor: getThemeProperty(textColorLight),
  iconHoverBackgroundColor: getThemeProperty(primaryColor),
  borderColor: getThemeProperty(formInputBorderColor),
  readonlyIconBackgroundColor: #cccccc,
);
```

## Radio
Adds Font Awesome icon radio
```
$component-form-radio-properties:(
  backgroundColor: getThemeProperty(backgroundColorLight),
  checkedIcon: "\f192",
  checkedTextColor: getThemeProperty(textColorDark),
  notCheckedIcon: "\f111",
  notCheckedTextColor: getThemeProperty(textColorDark),
  iconFontFamily: getThemeProperty(formInputIconFontFamily),
);
```

## Select
Positions label inside of select dropdown and adds Font Awesome icon for dropdown
```
$component-form-select-properties:(
  backgroundColor: getThemeProperty(backgroundColorLight),
  textColor: getThemeProperty(textColorDark),
  icon: "\f078",
  iconFontFamily: getThemeProperty(formInputIconFontFamily),
  iconTextColor: getThemeProperty(textColorDark),
  borderColor: getThemeProperty(formInputBorderColor),
  shiftingLabelColor: getThemeProperty(formInputShiftingLabelColor),
);
```

## Text / Textarea
Positions label inside of field to animate on input
```
$component-form-text-properties:(
  borderColor: getThemeProperty(formInputBorderColor),
  shiftingLabelColor: getThemeProperty(formInputShiftingLabelColor),
);

$component-form-textarea-properties:(
  borderColor: getThemeProperty(formInputBorderColor),
  shiftingLabelColor: getThemeProperty(formInputShiftingLabelColor),
);
```