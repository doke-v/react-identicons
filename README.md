<h1 align="center">react-identicons</h1>
<div align="center">
  <strong>React component for generating and displaying github-style identicons.</strong>
</div>
</br>
<div align="center">
  <a href="https://www.npmjs.com/package/react-identicons"><img src="https://img.shields.io/bundlephobia/min/react-identicons.svg"/></a>
  <a href="https://www.npmjs.com/package/react-identicons"><img src="https://img.shields.io/npm/v/react-identicons.svg"/></a>
  <a href="https://www.npmjs.com/package/react-identicons"><img src="https://img.shields.io/npm/l/react-identicons.svg"/></a>
</div>

## Live demo

[tuhnik.github.io/identicon-live (old)](https://tuhnik.github.io/identicon-live/)

[tuhnik.github.io/react-identicons (storybook)](https://tuhnik.github.io/react-identicons/)

## Setup

```bash
npm install react-identicons --save
```

## Basic usage

```javascript
import React from 'react';
import Identicon from 'react-identicons';

const App = () => {
  return <Identicon string="randomness" />;
};
export default App;
```

Code above should result in the following identicon:

![Identicon](https://github.com/tuhnik/react-identicons/blob/master/img/identicon.png?raw=true)

## Props

> Note: all color values should use hexadecimal notation (i.e. #ebebeb)

- `string`: (String) Value used for identicon pattern generation.
- `size`: (Number) Single number to represent width and height of identicon image. Defaults to 400.
- `padding` (Number) Padding around blocks. Defaults to 0.
- `bg` (String) Override color for background blocks. Transparent by default.
- `fg` (String) Override color for foreground blocks. Generated randomly from hash by default.
- `palette` (Array) Provide an array of colors to be used as foreground block colors.
- `count` (Number) Block count, can't be higher than 5. Useful for generating smaller (i.e. 3x3 identicons).
- `getColor` (Function) Callback function which returns current foreground color value.
