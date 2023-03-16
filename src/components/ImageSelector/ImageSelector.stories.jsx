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

const Template = args => <ImageSelector {...args} />

export const Primary = Template.bind({})
Primary.args = {
  images: [
    "https://m.media-amazon.com/images/M/MV5BZGM0YjhkZmEtNGYxYy00OTk0LThlNDgtNGQzM2YwNjU0NDQzXkEyXkFqcGdeQXVyMTU3ODQxNDYz._V1_FMjpg_UX1000_.jpg",
    "https://ntvb.tmsimg.com/assets/assets/516020_v9_bc.jpg?w=270&h=360"
  ]
}