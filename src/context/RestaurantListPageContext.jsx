import { createContext, useState, useContext } from "react";
import { RestaurantDataContext } from "./RestaurantDataContext";
import { CATEGORY_ICONS } from "../constants/icons";

export const RestaurantListPageContext = createContext();

export function RestaurantListPageProvider({ children }) {
  const { restaurantsData, addRestaurantData } = useContext(
    RestaurantDataContext
  );
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState();

  const value = {
    restaurantsData,
    addRestaurantData,
    isAddModalOpen,
    setIsAddModalOpen,
    isDetailModalOpen,
    setIsDetailModalOpen,
    selectedRestaurant,
    setSelectedRestaurant,
  };

  return (
    <RestaurantListPageContext.Provider value={value}>
      {children}
    </RestaurantListPageContext.Provider>
  );
}
