import { createContext, useState } from "react";

export const AddModalContext = createContext();

export function AddModalProvider({ children }) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleSubmitRestaurantData = (event) => {
    event.preventDefault();

    const newRestaurant = {
      id: Date.now(),
      category,
      name,
      description,
      alt: category,
      categoryIcon: CATEGORY_ICONS[category],
    };

    addRestaurantData(newRestaurant);
    setIsAddModalOpen(false);
  };

  const value = {
    isAddModalOpen,
    setIsAddModalOpen,
    handleSubmitRestaurantData,
  };

  return (
    <AddModalContext.Provider value={value}>
      {children}
    </AddModalContext.Provider>
  );
}
