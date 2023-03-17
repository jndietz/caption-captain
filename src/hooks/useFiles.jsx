import React, { useContext } from "react";

const FilesContext = React.createContext();
export const FilesProvider = FilesContext.Provider;

export const useFiles = () => {
  return useContext(FilesContext);
};
