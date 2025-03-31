import { useState } from "react";
import RestaurantList from "../components/Main/RestaurantList/RestaurantList";
import CategoryFilter from "../components/Main/CategoryFilter";
import { RESTAURANTS_DATA } from "../components/Constants/restaurantData";

const MainContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const filteredRestaurants =
    selectedCategory === "" || selectedCategory === "전체"
      ? RESTAURANTS_DATA
      : RESTAURANTS_DATA.filter(
          (restaurant) => restaurant.category === selectedCategory
        );

  return (
    <main>
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <RestaurantList restaurants={filteredRestaurants} />
    </main>
  );
};

export default MainContainer;
