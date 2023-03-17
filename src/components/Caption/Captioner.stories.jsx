import React from "react";

import { Captioner } from "./Captioner";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Captioner App",
  component: Captioner,
};

export const Primary = () => <Captioner />;
