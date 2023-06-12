# Form
The form consists of the components laid out below.

## General Properties
```scss
$component-form-properties:(
  borderColor: #cccccc,
  labelColor: #cccccc,
  fieldSpacing: getThemeProperty(layoutSpace),
  validationErrorTextColor: #ffffff,
  validationErrorBackgroundColor: #cc0000,
  validationSuccessTextColor: #000000,
  validationSuccessBackgroundColor: #00cc00,
  validationWarningTextColor: #000000,
  validationWarningBackgroundColor: #ffcc00
);
```

## Checkbox Properties
Adds Font Awesome icon checkbox
```scss
$component-form-checkbox-properties:(
  backgroundColor: getThemeProperty(backgroundColorLight),
  checkedIcon: "\f14a",
  checkedTextColor: getThemeProperty(textColorDark),
  notCheckedIcon: "\f0c8",
  notCheckedTextColor: getThemeProperty(textColorDark),
  iconFontFamily: getThemeProperty(formInputIconFontFamily),
);
```


## Numeric Properties
Adds Font Awesome icon buttons to increase / decrease quantity
```scss
$component-form-numeric-properties:(
  backgroundColor: getThemeProperty(backgroundColorLight),
  iconBackgroundColor: getThemeProperty(backgroundColorDark),
  iconTextColor: getThemeProperty(textColorLight),
  iconHoverBackgroundColor: getThemeProperty(primaryColor),
  borderColor: getThemeProperty(formInputBorderColor),
  readonlyIconBackgroundColor: #cccccc,
);
```

## Radio Properties
Adds Font Awesome icon radio
```scss
$component-form-radio-properties:(
  backgroundColor: getThemeProperty(backgroundColorLight),
  checkedIcon: "\f192",
  checkedTextColor: getThemeProperty(textColorDark),
  notCheckedIcon: "\f111",
  notCheckedTextColor: getThemeProperty(textColorDark),
  iconFontFamily: getThemeProperty(formInputIconFontFamily),
);
```

## Select Properties
Positions the label with `for="input-element-id"` inside of select dropdown and adds Font Awesome icon for dropdown
```scss
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

## Text / Textarea Properties
Positions the label with `for="input-element-id"` inside of field to animate on input
```scss
$component-form-text-properties:(
  borderColor: getThemeProperty(formInputBorderColor),
  shiftingLabelColor: getThemeProperty(formInputShiftingLabelColor),
);

$component-form-textarea-properties:(
  borderColor: getThemeProperty(formInputBorderColor),
  shiftingLabelColor: getThemeProperty(formInputShiftingLabelColor),
);
```

## Text With Button Properties
Postitions a button inside of a text input. This is common is search forms and newsletter sign-up forms.
```scss
$component-form-text-with-button-properties: (
  backgroundColor: getThemeProperty(backgroundColorLight),
  borderColor: getThemeProperty(borderColor, $component-form-properties),
  borderRadius: 10px,
  borderWidth: 2px,
  buttonBorderRadius: 0 6px 6px 0,
  textPadding: 20px,
);
```

## Form Process Animation
When a form is submitted all fields are disabled including the submit button. An animated icon is added next to the submit button as well.
You must opt-in for this to take effect, the form element must contain the following class: `fw-form-process-event` as well as the `fw-form` class.
