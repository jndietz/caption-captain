import { useState } from "react"
import { FilesProvider } from "../hooks/useFiles"

export const FilesContextWrapper = ({ children }) => {

    const [files, setFiles] = useState();
    const [selectedImageIndex, setSelectedImageIndex] = useState();

    return (
        <FilesProvider  value={{ files, setFiles, selectedImageIndex, setSelectedImageIndex }}>
            {children}
        </FilesProvider>
    )
}