import styles from "../../../css/Restaurant.module.css";
import RestaurantComponent from "./RestaurantComponent";

function RestaurantList({
  filteredRestaurants,
  selectClickedRestaurant,
  setIsDetailModalOpen,
}) {
  return (
    <ul className={styles.restaurantList}>
      {filteredRestaurants?.map(
        ({ id, category, categoryIcon, name, description }) => (
          <RestaurantComponent
            id={id}
            key={name}
            category={category}
            categoryIcon={categoryIcon}
            name={name}
            description={description}
            setIsDetailModalOpen={setIsDetailModalOpen}
            selectClickedRestaurant={selectClickedRestaurant}
          />
        )
      )}
    </ul>
  );
}

export default RestaurantList;
