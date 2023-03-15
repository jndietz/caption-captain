/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container, Grid } from '@mantine/core';
import { CaptionTemplateForm } from './CaptionTemplateForm';

export const Captioner = () => {
  return (
    <Container fluid={true}>
      <Grid cols={2}>
        <Grid.Col span={3}>
          <CaptionTemplateForm />
        </Grid.Col>
        <Grid.Col span={9}>
          <Container bg={"blue"}>
            Hello, world!
          </Container>
        </Grid.Col>
      </Grid>
    </Container>
  )
}