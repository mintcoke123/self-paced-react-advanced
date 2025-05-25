import { createContext, useState, useContext } from "react";
import { RestaurantListPageContext } from "./RestaurantListPageContext";
import { CATEGORY_ICONS } from "../constants/icons";

export const AddModalContext = createContext();

export function AddModalProvider({ children }) {
  const { addRestaurantData } = useContext(RestaurantListPageContext);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleSubmitRestaurantData = (event) => {
    event.preventDefault();

    const category = event.target.category.value;
    const name = event.target.name.value;
    const description = event.target.description.value;

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
