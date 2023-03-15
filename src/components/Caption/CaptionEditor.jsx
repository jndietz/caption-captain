/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Container, Grid, Group, TextInput } from "@mantine/core"

export const CaptionEditor = () => {
    return (
        <Container fluid={true}>
            <Grid justify="center">
                <Grid.Col span={6}>
                    <Group>
                        <form css={() => css({ display: "flex", alignItems: "flex-end", width: "100%" })}>
                            <TextInput label="Image folder path" px="sm" id="input-demo" placeholder="C:\path\to\files" />
                            <Button px="sm">Load Files</Button>
                        </form>
                    </Group>
                </Grid.Col>
                <Grid.Col>
                    
                </Grid.Col>
            </Grid>

        </Container>
    )
}