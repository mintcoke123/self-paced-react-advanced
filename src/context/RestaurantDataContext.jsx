import { createContext, useEffect, useState } from "react";
import { getRestaurants, addRestaurant } from "../api/api";

export const RestaurantDataContext = createContext();

export function RestaurantDataProvider({ children }) {
  const [restaurantsData, setRestaurantsData] = useState();

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

  async function addRestaurantData(newRestaurant) {
    await addRestaurant(newRestaurant);
    const refreshedRestaurant = await getRestaurants();
    setRestaurantsData(refreshedRestaurant);
  }

  const value = {
    restaurantsData,
    setRestaurantsData,
    addRestaurantData,
  };

  return (
    <RestaurantDataContext.Provider value={value}>
      {children}
    </RestaurantDataContext.Provider>
  );
}
