import React from 'react';
import { testData } from 'react-folder-tree';

import { ImageFileTree } from './ImageFileTree';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'File Tree',
  component: ImageFileTree,
}

console.log(testData);

const Template = args => <ImageFileTree {...args} />
export const Primary = Template.bind({})
Primary.args = {
  files: testData
}