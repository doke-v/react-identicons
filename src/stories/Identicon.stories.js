import React from 'react';
import { withKnobs, text, color, number, select } from '@storybook/addon-knobs';
import Identicon from '../index';
import paletteOptions from './paletteOptions';

export default {
  title: 'Identicon',
  decorators: [withKnobs],
  component: Identicon
};

export const RandomColor = () => (
  <Identicon string={text('string', 'randomness')} />
);

export const CustomColors = () => (
  <Identicon
    string={text('string', 'randomness')}
    fg={color('fg (foreground)', '#D0021B')}
    bg={color('bg (background)', '#FFAFB8')}
  />
);

export const CustomPalette = () => (
  <Identicon
    string={text('string', 'custom palettes!')}
    palette={select('palette (array)', paletteOptions, paletteOptions.blue)}
    bg={color('bg (background)', 'TRANSPARENT')}
    padding={number('padding (px)', 1, {
      range: true,
      min: 0,
      max: 10,
      step: 1
    })}
  />
);

export const CustomSize = () => (
  <Identicon
    string={text('string', 'randomness')}
    size={number('size (px)', 200, {
      range: true,
      min: 25,
      max: 400,
      step: 1
    })}
    padding={number('padding (px)', 1, {
      range: true,
      min: 0,
      max: 10,
      step: 1
    })}
  />
);
