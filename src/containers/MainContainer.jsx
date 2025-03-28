import RestaurantList from "../components/Main/RestaurantList/RestaurantList";
import CategoryFilter from "../components/Main/CategoryFilter"

const MainContainer = () => {
  return(
    <main>
      <CategoryFilter/>
      <RestaurantList/>
    </main>
  )
}

export default MainContainer;