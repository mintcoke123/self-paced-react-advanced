import { useContext, useState, createContext } from "react";
import { RestaurantListPageContext } from "./RestaurantListPageContext";

export const MainContext = createContext();

export function MainProvider({ children }) {
  const { restaurantsData, setSelectedRestaurant, setIsDetailModalOpen } =
    useContext(RestaurantListPageContext);

  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredRestaurants =
    selectedCategory === "" || selectedCategory === "전체"
      ? restaurantsData
      : restaurantsData.filter(
          (restaurant) => restaurant.category === selectedCategory
        );

  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  function selectClickedRestaurant(id) {
    const clickedRestaurant = restaurantsData.find(
      (restaurant) => restaurant.id === id
    );

    setSelectedRestaurant(clickedRestaurant);
    setIsDetailModalOpen(true);
  }

  const value = {
    filteredRestaurants,
    selectedCategory,
    setSelectedCategory,
    selectClickedRestaurant,
    handleChangeCategory,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
