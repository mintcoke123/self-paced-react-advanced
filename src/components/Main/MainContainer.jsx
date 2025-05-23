import { useState, useContext } from "react";
import RestaurantList from "./RestaurantList/RestaurantList";
import CategoryFilter from "./CategoryFilter";
import { RestaurantListPageContext } from "../../context/RestaurantListPageContext";

function MainContainer() {
  const { restaurantsData } = useContext(RestaurantListPageContext);

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
      <RestaurantList filteredRestaurants={filteredRestaurants} />
    </main>
  );
}

export default MainContainer;
