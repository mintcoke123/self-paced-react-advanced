
import styles from "../../../css/Restaurant.module.css";
import RestaurantComponent from "./RestaurantComponent";


const RestaurantList = ({ filteredRestaurants,openModal}) => {
  return (
    <ul className={styles.restaurantList}>
      {filteredRestaurants?.map(({ category, categoryIcon, name, description }) => (


        <RestaurantComponent
          key={name}
          category={category}
          categoryIcon={categoryIcon}
          name={name}
          description={description}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default RestaurantList;
