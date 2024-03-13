# compress-css-hex-color &middot; [![Test workflow status](https://github.com/ChrisCodesThings/compress-css-hex-color/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/compress-css-hex-color)](https://www.npmjs.com/package/@chriscodesthings/compress-css-hex-color) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Convert a CSS hex color code to short form if possible**

## Install

```sh
npm install --save @chriscodesthings/compress-css-hex-color
```

## Use

```js
import compressCSSColor from '@chriscodesthings/compress-css-hex-color';

console.log(compressCSSColor("#ff0000dd"));
// => #f00d
```

## Syntax

```js
compressCSSColor(color);
```

### Parameters

- *color*: a CSS hex color string

### Return Value

Returns the short form of the CSS color code.

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