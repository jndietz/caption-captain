/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import { Button, TextInput } from "@mantine/core"

import { api } from "../../api/api";
import { useFiles } from "../../hooks/useFiles";

export const FolderInput = () => {

    const { setFiles } = useFiles();

    const [path, setPath] = useState();

    const handleLoadFilesClick = async () => {
        const { data } = await api.get(`/api/images`, { params: { path }});                
        setFiles(data);
    }

    return (
        <div css={() => css({ display: "flex", alignItems: "flex-end" })}>
            <TextInput onChange={event => setPath(event.target.value)} px="lg" label="Image folder path" placeholder="C:\path\to\files" />
            <Button onClick={handleLoadFilesClick} css={() => css({ marginTop: "auto", marginLeft: "auto", marginRight: "auto" })}>Load Files</Button>
        </div>
    )
}