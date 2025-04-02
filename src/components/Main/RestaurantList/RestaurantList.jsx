
import styles from "../../../css/Restaurant.module.css";
import RestaurantComponent from "./RestaurantComponent";

const RestaurantList = ({ restaurants }) => {
  return (
    <ul className={styles.restaurantList}>
      {restaurants?.map(({ category, categoryIcon, name, description }) => (

        <RestaurantComponent
          key={name}
          category={category}
          categoryIcon={categoryIcon}
          name={name}
          description={description}
        />
      ))}
    </ul>
  );
};

export default RestaurantList;
