import styles from "../../../css/Restaurant.module.css";
import RestaurantComponent from "./RestaurantComponent";

function RestaurantList({ filteredRestaurants, openDetailModal }) {
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
            openDetailModal={openDetailModal}
          />
        )
      )}
    </ul>
  );
}

export default RestaurantList;
