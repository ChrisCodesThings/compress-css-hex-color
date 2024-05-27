# compress-css-hex-color &middot; [![Test workflow status](https://github.com/ChrisCodesThings/compress-css-hex-color/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/compress-css-hex-color)](https://www.npmjs.com/package/@chriscodesthings/compress-css-hex-color) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Convert a CSS hex color code to short form**

## Description

Compresses a CSS hex color code. 

If the string passed is already a short form color code or it is a long form color code that cannot be shortened, the color is returned unmodified. 

If a long form color code is passed and can be shortened, the short form of the color is returned.

If the alpha value is F or FF then it is removed.

Example hex color codes:
```
#000      // black short form
#000000   // black long form
#663399   // rebeccapurple
#66449988 // ... with 53% transparency
#6498     // ... in short form
```

### See...
- [Install/Usage](#install "Install and Usage")
- [Types](#types "Types")
- [Syntax](#syntax "Syntax")
- [Examples](#examples "Examples")
- [See Also](#see-also "See Also")

---

## Install

```sh
npm install --save @chriscodesthings/compress-css-hex-color
```

## Use

```js
import compressCSSHexColor from '@chriscodesthings/compress-css-hex-color';

console.log(compressCSSHexColor("#ff0000dd"));
// => #f00d
```

## Types

This package uses types from:
- [**basic-color-types**: Defines named types for common color formats](https://github.com/ChrisCodesThings/basic-color-types "Defines named types for common color formats")

## Syntax

```js
compressCSSHexColor(color);
```

### Parameters

- *color*: a CSS hex color string

### Return Value

Returns the short form of the CSS color code, or the original string if it can't be compressed.

## See Also...

- [**is-css-hex-color**: Determine if a string is a hex color code](https://github.com/ChrisCodesThings/is-css-hex-color "Determine if a string is a hex color code")
- [**random-css-hex-color**: Generates a random color in CSS hex format](https://github.com/ChrisCodesThings/random-css-hex-color "Generates a random color in CSS hex format")
- [**rgba-color-to-css-hex**: Converts an RGB or RGBA color to a CSS hex color code](https://github.com/ChrisCodesThings/rgba-color-to-css-hex "Converts an RGB or RGBA color to a CSS hex color code")
- [**color-object**: Simple, lightweight class to store and manipulate a color, and convert between formats](https://github.com/ChrisCodesThings/color-object "Simple, lightweight class to store and manipulate a color, and convert between formats")