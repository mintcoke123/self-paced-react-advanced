import RestaurantList from "../components/Main/RestaurantList/RestaurantList";
import CategoryFilter from "../components/Main/CategoryFilter";

const MainContainer = () => {
  return (
    <main>
      <CategoryFilter category={category} onChangeCategory={setCategory} />
      <RestaurantList restaurants={filteredRestaurants} />
    </main>
  );
};

export default MainContainer;
