import { createContext, useState } from "react";

export const RestaurantListPageContext = createContext();

export function RestaurantListPageProvider({ children }) {
  const [restaurantsData, setRestaurantsData] = useState();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");

  const value = {
    state: {
      restaurantsData,
      isAddModalOpen,
      isDetailModalOpen,
      selectedRestaurant,
      selectedCategory,
    },
    actions: {
      setRestaurantsData,
      setIsAddModalOpen,
      setIsDetailModalOpen,
      setSelectedRestaurant,
      setSelectedCategory,
    },
  };

  return (
    <RestaurantListPageContext.Provider value={value}>
      {children}
    </RestaurantListPageContext.Provider>
  );
}
