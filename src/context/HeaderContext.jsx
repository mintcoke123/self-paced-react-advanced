import { createContext, useContext } from "react";
import { AddModalContext } from "./AddModalContext";

export const HeaderContext = createContext();

export function HeaderProvider({ children }) {
  const { setIsAddModalOpen } = useContext(AddModalContext);

  const value = {
    setIsAddModalOpen,
  };

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
}
