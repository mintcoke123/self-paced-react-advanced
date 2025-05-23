import { createContext, useEffect, useState } from "react";
import { getRestaurants, addRestaurant } from "../api/api";

export const RestaurantListPageContext = createContext();

export function RestaurantListPageProvider({ children }) {
  const [restaurantsData, setRestaurantsData] = useState();
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRestaurants();
        setRestaurantsData(data);
      } catch (error) {
        alert("레스토랑 데이터를 불러오는 데 실패했습니다.");
      }
    };
    fetchData();
  }, []);

  function selectClickedRestaurant(id) {
    const clickedRestaurant = restaurantsData.find(
      (restaurant) => restaurant.id === id
    );
    setSelectedRestaurant(clickedRestaurant);
    setIsDetailModalOpen(true);
  }

  async function addRestaurantData(newRestaurant) {
    await addRestaurant(newRestaurant);
    const refreshedRestaurant = await getRestaurants();
    setRestaurantsData(refreshedRestaurant);
  }

  const value = {
    restaurantsData,
    setRestaurantsData,
    isDetailModalOpen,
    setIsDetailModalOpen,
    selectedRestaurant,
    setSelectedRestaurant,
    isAddModalOpen,
    setIsAddModalOpen,
    selectClickedRestaurant,
    addRestaurantData
  };

  return (
    <RestaurantListPageContext.Provider value={value}>
      {children}
    </RestaurantListPageContext.Provider>
  );
}
