import { rest } from 'msw'
import React from 'react';

import { CaptionEditor } from './CaptionEditor';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Caption Editor',
  component: CaptionEditor,
}

export const Primary = () => <CaptionEditor />;
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