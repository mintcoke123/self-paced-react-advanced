import styles from '../../../css/Restaurant.module.css';
import RestaurantComponent from './RestaurantComponent';
import { RESTAURANTS_DATA } from '../../Constants/restaurantData';


const RestaurantList = () => {
  return (
    <ul className={styles.restaurantList}>
      {RESTAURANTS_DATA?.map(({ category, categoryIcon, name, description }) => (
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
