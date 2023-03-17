/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import { Button, Stack, TextInput } from "@mantine/core";

import { api } from "../../api/api";
import { useFiles } from "../../hooks/useFiles";
import toast from "react-hot-toast";

export const FolderInput = () => {
  const { setFiles, path, setPath } = useFiles();
  const [isLoading, setIsLoading] = useState();

  const handleLoadFilesClick = async () => {
    setIsLoading(true);
    const { data } = await api.get(`/api/images`, { params: { path } });
    setFiles(data);
    setIsLoading(false);
    toast.success(`Loaded ${data.total} images!`);
  };

  return (
    <div css={() => css({ display: "flex", alignItems: "flex-end" })}>
      <Stack w="100%">
        <TextInput
          value={path}
          onChange={(event) => setPath(event.target.value)}
          mx="lg"
          mt="sm"
          label="Image folder path"
          placeholder="C:\path\to\files"
        />
        <Button
          disabled={!path}
          loading={isLoading}
          mx="lg"
          onClick={handleLoadFilesClick}
        >
          Load Files
        </Button>
      </Stack>
    </div>
  );
};
