import React, { useEffect } from "react";
import { useFiles } from "../../hooks/useFiles";
import { ImageFileTree } from "./ImageFileTree";
import testFileData from "../../test-utils/testFileData";
import { Grid } from "@mantine/core";
import { FilesContextWrapper } from "../../test-utils/FilesContextWrapper";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "File Tree",
  component: ImageFileTree,
};

const Template = (args) => {
  const { setFiles } = useFiles();

  useEffect(() => {
    setFiles(testFileData);
  }, []);

  return <ImageFileTree {...args} />;
};
export const Primary = Template.bind({});

export const Testing = () => {
  const { setFiles } = useFiles();

  useEffect(() => {
    setFiles(testFileData);
  }, []);

  return (
    <Grid>
      <Grid.Col span={2}>
        <ImageFileTree />
      </Grid.Col>
    </Grid>
  );
};
