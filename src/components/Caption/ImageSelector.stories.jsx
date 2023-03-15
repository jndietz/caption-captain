import React from 'react';

import { ImageSelector } from './ImageSelector';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Image Carousel',
  component: ImageSelector,
}

export const Primary = () => <ImageSelector />