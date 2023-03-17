import { Grid } from '@mantine/core';
import React from 'react';

import { CaptionTemplateForm } from './CaptionTemplateForm';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Captioning Form',
  component: CaptionTemplateForm,
}

export const Primary = () => <CaptionTemplateForm />;
export const PrimaryWithColumn = () => (
  <Grid>
    <Grid.Col span={3}>
      <CaptionTemplateForm />
    </Grid.Col>
  </Grid>
)
