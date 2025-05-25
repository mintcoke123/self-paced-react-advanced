import { createContext, useContext, useState } from "react";
import { RestaurantListPageContext } from "./RestaurantListPageContext";

export const DetailModalContext = createContext();

export function DetailModalProvider({ children }) {
  const { selectedRestaurant, setIsDetailModalOpen, isDetailModalOpen } =
    useContext(RestaurantListPageContext);

  const value = {
    isDetailModalOpen,
    setIsDetailModalOpen,
    selectedRestaurant,
  };

  return (
    <DetailModalContext.Provider value={value}>
      {children}
    </DetailModalContext.Provider>
  );
}
