/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Container, Grid, Stack, Card, Text, ActionIcon } from "@mantine/core";
import { FolderInput } from "./FolderInput";
import { CaptionTemplateForm } from "./CaptionTemplateForm";
import { ImageSelector } from "../ImageSelector/ImageSelector";
import { ImageFileTree } from "../FileTree/ImageFileTree";
import { FilesProvider } from "../../hooks/useFiles";
import { IconArrowsMinimize, IconArrowsMaximize } from "@tabler/icons-react";
import { Toaster } from "react-hot-toast";

export const Captioner = () => {
  const [path, setPath] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState();
  const [files, setFiles] = useState();

  const [showFilePicker, setShowFilePicker] = useState(true);

  const handleFileWindowResize = () => setShowFilePicker(!showFilePicker);

  return (
    <FilesProvider
      value={{
        path,
        setPath,
        selectedImageIndex,
        setSelectedImageIndex,
        files,
        setFiles,
      }}
    >
      <Toaster />
      <Container px="lg" py="lg" size="xl" fluid={true}>
        <Grid mah="100px" cols={12}>
          {/* Caption Column */}
          <Grid.Col span={3}>
            <Stack>
              <Card withBorder shadow="sm" radius="md">
                <Card.Section withBorder inheritPadding py="xs" display="flex">
                  <Text fw={700}>Files</Text>
                  <ActionIcon ml="auto">
                    {showFilePicker && (
                      <IconArrowsMinimize onClick={handleFileWindowResize} />
                    )}
                    {!showFilePicker && (
                      <IconArrowsMaximize onClick={handleFileWindowResize} />
                    )}
                  </ActionIcon>
                </Card.Section>

                {showFilePicker ? (
                  <>
                    <Card.Section>
                      <FolderInput />
                    </Card.Section>
                    <Card.Section px="lg" py="lg">
                      {files && <ImageFileTree />}
                    </Card.Section>
                  </>
                ) : null}
              </Card>
              <Card withBorder shadow="sm" radius="md">
                <Card.Section withBorder inheritPadding py="xs">
                  <Text fw={700}>Captions</Text>
                </Card.Section>
                <Card.Section px="lg" py="lg">
                  <CaptionTemplateForm />
                </Card.Section>
              </Card>
            </Stack>
          </Grid.Col>

          {/* Image Column */}
          <Grid.Col span={9}>{files && <ImageSelector />}</Grid.Col>
        </Grid>
      </Container>
    </FilesProvider>
  );
};
