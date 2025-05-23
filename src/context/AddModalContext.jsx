import { createContext, useState } from "react";

export const AddModalContext = createContext();

export function AddModalProvider({ children }) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const value = {
    isAddModalOpen,
    setIsAddModalOpen
  };

  return (
    <AddModalContext.Provider value={value}>
      {children}
    </AddModalContext.Provider>
  );
}