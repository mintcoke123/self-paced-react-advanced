import { useState } from "react";
import RestaurantList from "./RestaurantList/RestaurantList";
import CategoryFilter from "./CategoryFilter";


function MainContainer({
  setIsDetailModalOpen,
  selectClickedRestaurant,
  restaurantsData,
}) {

  const [selectedCategory, setSelectedCategory] = useState("");
  const filteredRestaurants =
    selectedCategory === "" || selectedCategory === "전체"
      ? restaurantsData
      : restaurantsData.filter(

          (restaurant) => restaurant.category === selectedCategory
        );

  return (
    <main>
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <RestaurantList
        setIsDetailModalOpen={setIsDetailModalOpen}
        filteredRestaurants={filteredRestaurants}
        selectClickedRestaurant={selectClickedRestaurant}
      />
    </main>
  );
}

export default MainContainer;
