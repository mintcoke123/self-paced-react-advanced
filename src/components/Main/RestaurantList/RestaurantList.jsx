
import styles from "../../../css/Restaurant.module.css";
import RestaurantComponent from "./RestaurantComponent";

const RestaurantList = ({ filteredRestaurants,openDetailModal}) => {
  return (
    <ul className={styles.restaurantList}>
      {filteredRestaurants?.map(({ category, categoryIcon, name, description }) => (

        <RestaurantComponent
          key={name}
          category={category}
          categoryIcon={categoryIcon}
          name={name}
          description={description}
          openDetailModal={openDetailModal}
        />
      ))}
    </ul>
  );
};

export default RestaurantList;
