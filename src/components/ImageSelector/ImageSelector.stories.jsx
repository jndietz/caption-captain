import React, { useEffect } from 'react';
import { useFiles } from '../../hooks/useFiles';

import { ImageSelector } from './ImageSelector';

import testFileData from '../../test-utils/testFileData';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Image Carousel',
  component: ImageSelector,
}

const Template = args => {

  const { setFiles } = useFiles();

  useEffect(() => {
    setFiles(testFileData);
  }, [])

  return <ImageSelector {...args} />;
}

export const Primary = Template.bind({});