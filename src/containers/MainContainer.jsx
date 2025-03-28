import { useState } from "react";
import RestaurantList from "../components/Main/RestaurantList/RestaurantList";
import CategoryFilter from "../components/Main/CategoryFilter";
import { RESTAURANTS_DATA } from "../components/Constants/restaurantData";

const MainContainer = () => {
  const [category, setCategory] = useState("");
  const filteredRestaurants =
    category === "" || category === "전체"
      ? RESTAURANTS_DATA
      : RESTAURANTS_DATA.filter(
          (restaurant) => restaurant.category === category
        );

  return (
    <main>
      <CategoryFilter category={category} onChangeCategory={setCategory} />
      <RestaurantList restaurants={filteredRestaurants} />
    </main>
  );
};

export default MainContainer;
