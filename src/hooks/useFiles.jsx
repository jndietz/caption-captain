import React, { useContext } from 'react'

const FilesContext = React.createContext('selectedImage');
export const FilesProvider = FilesContext.Provider

export const useFiles = () => {
  return useContext(FilesContext)
}
