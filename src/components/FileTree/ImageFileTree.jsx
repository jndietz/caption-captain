import FolderTree from 'react-folder-tree';
import 'react-folder-tree/dist/style.css';
import { useFiles } from '../../hooks/useFiles';

export const ImageFileTree = () => {    
  const { files, setSelectedImageIndex } = useFiles();

  const mappedFiles = files ?
    {
      name: `Images (${files.total})`,
      children: files.files.map((file, index) => ({
        name: file.filename
      }))
    }
    : {}

  return (
    <FolderTree
      data={mappedFiles}
      onChange={() => {}}
      readOnly
      onNameClick={({ defaultOnClick, nodeData }) => {        
        const index = files.files.findIndex(file => file.filename === nodeData.name)
        setSelectedImageIndex(index);
      }}
      showCheckbox={false}
    />
  );
};