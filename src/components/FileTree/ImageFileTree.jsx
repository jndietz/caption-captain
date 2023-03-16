/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect } from 'react';
import FolderTree from 'react-folder-tree';
import 'react-folder-tree/dist/style.css';
import { useFiles } from '../../hooks/useFiles';

export const ImageFileTree = () => {
  const { files, selectedImageIndex, setSelectedImageIndex } = useFiles();

  useEffect(() => {
    const folderTreeDiv = document.querySelector("div.FolderTree");    
    if (folderTreeDiv) folderTreeDiv.style.height = "200px";
    const fileNameSpans = [...document.querySelectorAll("span.displayName")];    
    fileNameSpans.forEach(span => span.style.fontWeight = "");
    const span = fileNameSpans[selectedImageIndex + 1]; // add one to account for the 'folder' in react-folder-tree
    if (span) span.style.fontWeight = "bold";
  }, [selectedImageIndex]);

  const mappedFiles = files ?
    {
      name: `Images (${files.total})`,
      children: files.files.map((file, index) => ({
        name: file.filename
      }))
    }
    : {}

  return (
    <div css={() => css({ maxHeight: "200px" })}>
      <FolderTree
        css={() => css({ height: "200px", overflowY: "scroll" })}
        data={mappedFiles}
        onChange={() => { }}
        readOnly
        showCheckbox={false}
        onNameClick={({ defaultOnClick, nodeData }) => {          
          if (!nodeData.name.startsWith("Images")) {
            const index = files.files.findIndex(file => file.filename === nodeData.name);
            setSelectedImageIndex(index);
          }
        }}        
      />
    </div>

  );
};