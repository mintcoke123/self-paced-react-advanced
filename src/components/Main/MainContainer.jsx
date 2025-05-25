import RestaurantList from "./RestaurantList/RestaurantList";
import CategoryFilter from "./CategoryFilter";

function MainContainer() {
  return (
    <main>
      <CategoryFilter />
      <RestaurantList />
    </main>
  );
}

export default MainContainer;
