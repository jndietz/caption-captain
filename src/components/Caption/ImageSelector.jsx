/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Container, FileInput, Group, Input, createStyles } from "@mantine/core"
import { useState } from "react";

export const ImageSelector = () => {

    const [folder, setFolder] = useState("");
    const styles = createStyles();

    return (
        <Container fluid={true}>
            <Group>
                <form css={() => css({ display: "flex", alignItems: "flex-end" })}>
                    <Input.Wrapper
                        id="input-demo"
                        withAsterisk
                        label="Image Folder"
                    >
                        <Input id="input-demo" placeholder="C:\path\to\files" />
                    </Input.Wrapper>
                    <Button>Load Files</Button>
                </form>
            </Group>
        </Container>


    )
}