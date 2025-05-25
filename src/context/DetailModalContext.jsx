import { createContext, useState, useContext } from "react";
import { RestaurantDataContext } from "./RestaurantDataContext";

export const DetailModalContext = createContext();

export function DetailModalProvider({ children }) {
  const { restaurantsData } = useContext(RestaurantDataContext);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState();

  function selectClickedRestaurant(id) {
    const clickedRestaurant = restaurantsData.find(
      (restaurant) => restaurant.id === id
    );
    setSelectedRestaurant(clickedRestaurant);
    setIsDetailModalOpen(true);
  }

  const value = {
    isDetailModalOpen,
    setIsDetailModalOpen,
    selectedRestaurant,
    selectClickedRestaurant,
  };

  return (
    <DetailModalContext.Provider value={value}>
      {children}
    </DetailModalContext.Provider>
  );
}
