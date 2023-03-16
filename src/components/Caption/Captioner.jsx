/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Container, Grid, Stack, Card, Group, Text } from '@mantine/core';
import { FolderInput } from './FolderInput';
import { CaptionTemplateForm } from './CaptionTemplateForm';
import { ImageSelector } from '../ImageSelector/ImageSelector';
import { ImageFileTree } from '../FileTree/ImageFileTree';
import { FilesProvider } from '../../hooks/useFiles';

export const Captioner = () => {

  const [path, setPath] = useState();
  const [selectedImageIndex, setSelectedImageIndex] = useState();
  const [files, setFiles] = useState();

  return (
    <FilesProvider value={{ path, setPath, selectedImageIndex, setSelectedImageIndex, files, setFiles }}>
      <Container size="xl" fluid={true} mih="100vh">
        <Grid cols={12}>
          <Grid.Col bg="teal" span={3}>
            <CaptionTemplateForm />
          </Grid.Col>
          <Grid.Col bg="gray" span={6}>
            <ImageSelector />
          </Grid.Col>
          <Grid.Col span={3}>
            <Card withBorder shadow="sm" radius="md">
              <Card.Section withBorder inheritPadding py="xs">
                <Text weight={500}>Review pictures</Text>
              </Card.Section>
              <Card.Section>
                <FolderInput />
                <Card.Section py="xl">
                  <ImageFileTree />
                </Card.Section>
              </Card.Section>
            </Card>

          </Grid.Col>
        </Grid>
      </Container>
    </FilesProvider >
  )
}