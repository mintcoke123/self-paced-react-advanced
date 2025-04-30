
import { useState } from "react";
import RestaurantList from "../components/Main/RestaurantList/RestaurantList";
import CategoryFilter from "../components/Main/CategoryFilter";

const MainContainer = ({openDetailModal, restaurantsData}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const filteredRestaurants =
    selectedCategory === "" || selectedCategory === "전체"
      ? restaurantsData
      : restaurantsData.filter(
          (restaurant) => restaurant.category === selectedCategory
        );

  return (
    <main>
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <RestaurantList filteredRestaurants={filteredRestaurants} openDetailModal ={openDetailModal} />
    </main>
  );
};

export default MainContainer;

