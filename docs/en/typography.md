# Typography
The typograhy consists of the following elements: h1, h2, h3, h4, h5, h6, p, ul and ol. We use `em` for font sizing, where `1em` is the default browser font size, which should equal 16px, 12pt or 100%.

Each element's font size can be set per device breakpoint.

Font Family's are passed in to the framewerk by name reference and should be loaded outside of the framewerk.

## Headings: h1-h6

The default heading properties apply `HeadingColor` and `HeadingMargin` to all headings (h1-h6)
```
// Default form checkbox Properties
$default-component-typography-properties:(
    "HeadingColor": getThemeProperty(textColorDark),
    "HeadingMargin": 0 0 getThemeProperty(layoutSpace)/2 0
);
```

All headings (h1-h6) can be individually customized, example for h1:
```
$default-element-h1-properties:(
    color: getThemeProperty(HeadingColor, $component-typography-properties),
    fontFamily: getThemeProperty(fontHeader),
    fontWeight: 700,
    fontSizes: (
        desktop: (2.5em, 1),
        tablet: (2.5em, 1),
        phone: (2.5em, 1)
    ),
    margin: getThemeProperty(HeadingMargin, $component-typography-properties)
);
```

## Paragraph Properties:
```
$default-element-p-properties:(
    color: getThemeProperty(textColorDark),
    fontFamily: getThemeProperty(fontText),
    fontWeight: 400,
    fontSizes: (
        desktop: (1em, 1.4),
        tablet: (1em, 1.4),
        phone: (1em, 1.4)
    ),
    margin: 0 0 getThemeProperty(layoutSpace)/2 0 
);
```

## Ordered List Properties:
```
// Default ol Properties
$default-element-ol-properties:(
    listStyle: decimal outside,
    color: getThemeProperty(textColorDark),
    fontFamily: getThemeProperty(fontText),
    fontWeight: 400,
    fontSizes: (
        desktop: (1em, 1.4),
        tablet: (1em, 1.4),
        phone: (1em, 1.4)
    ),
    margin: 0 0 getThemeProperty(layoutSpace) getThemeProperty(layoutSpace)
);
```

## Unordered List Properties:
```
// Default ul Properties
$default-element-ul-properties:(
    listStyle: disc outside,
    color: getThemeProperty(textColorDark),
    fontFamily: getThemeProperty(fontText),
    fontWeight: 400,
    fontSizes: (
        desktop: (1em, 1.4),
        tablet: (1em, 1.4),
        phone: (1em, 1.4)
    ),
    margin: 0 0 getThemeProperty(layoutSpace) getThemeProperty(layoutSpace)
);
```

## Content Spacing

All elements have a "content spacing" class (`fw-typography-spacing`) which defines how the spacing for this element should be rendered in "regular" html page content. It requires the class to be applied to a parent container. Paragraph ex:
```
.fw-typography-spacing{
  p{
    margin: getThemeProperty(margin, $element-p-properties);
  }
}
```