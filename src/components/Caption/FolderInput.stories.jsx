import { Grid } from '@mantine/core';
import { rest } from 'msw'
import React from 'react';

import { FolderInput } from './FolderInput';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Folder Input',
  component: FolderInput,
}

export const Primary = () => (
  <Grid>
    <Grid.Col span={3}>
      <FolderInput />
    </Grid.Col>
  </Grid>

);
Primary.parameters = {
  msw: {
    handlers: [
      rest.get('/v1/images', (req, res, ctx) => {
        return res(
          ctx.json({
            firstName: 'Neil',
            lastName: 'Maverick',
          })
        )
      }),
    ]
  },
}