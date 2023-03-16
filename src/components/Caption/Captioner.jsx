/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Container, Grid, Stack, Card, Group, Text } from '@mantine/core';
import { FolderInput } from './FolderInput';
import { CaptionTemplateForm } from './CaptionTemplateForm';
import { ImageSelector } from '../ImageSelector/ImageSelector';
import { ImageFileTree } from '../FileTree/ImageFileTree';
import { FilesProvider } from '../../hooks/useFiles';
import { css } from '@emotion/react';

export const Captioner = () => {

  const [path, setPath] = useState();
  const [selectedImageIndex, setSelectedImageIndex] = useState();
  const [files, setFiles] = useState();

  return (
    <FilesProvider value={{ path, setPath, selectedImageIndex, setSelectedImageIndex, files, setFiles }}>
      <Container px="lg" py="lg" size="xl" fluid={true}>
        <Grid mah="100px" cols={12}>
          {/* Caption Column */}
          <Grid.Col span={3}>
            <Stack>
              <Card withBorder shadow="sm" radius="md">
                <Card.Section withBorder inheritPadding py="xs">
                  <Text weight={500}>Files</Text>
                </Card.Section>
                <Card.Section>
                  <FolderInput />
                </Card.Section>
                <Card.Section px="lg" py="lg">
                  {files && <ImageFileTree />}
                </Card.Section>
              </Card>
              <Card withBorder shadow="sm" radius="md">
                <Card.Section withBorder inheritPadding shadow="sm" radius="md">
                  <Text weight={500}>Captions</Text>
                </Card.Section>
                <Card.Section px="lg" py="lg">
                  <CaptionTemplateForm />
                </Card.Section>
              </Card>
            </Stack>
          </Grid.Col>

          {/* Image Column */}
          <Grid.Col span={9}>
            {files && <ImageSelector />}
          </Grid.Col>

        </Grid>
      </Container>
    </FilesProvider >
  )
}