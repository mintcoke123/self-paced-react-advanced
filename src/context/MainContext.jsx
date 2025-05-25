import { useContext, useState, createContext } from "react";
import { RestaurantDataContext } from "./RestaurantDataContext";

export const MainContext = createContext();

export function MainContextProvider({ children }) {
  const { restaurantsData } = useContext(RestaurantDataContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const filteredRestaurants =
    selectedCategory === "" || selectedCategory === "전체"
      ? restaurantsData
      : restaurantsData.filter(
          (restaurant) => restaurant.category === selectedCategory
        );

  const value = {
    filteredRestaurants,
    selectedCategory,
    setSelectedCategory,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
