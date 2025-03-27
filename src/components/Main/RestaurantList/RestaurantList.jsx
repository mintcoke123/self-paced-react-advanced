import styles from '../../../css/Restaurant.module.css';
import RestaurantCard from './RestaurantCard';
import { RESTAURANTS_DATA } from '../../Constants/restaurantData';


const RestaurantList = () => {
  return (
    <ul className={styles.restaurantList}>
      {RESTAURANTS_DATA?.map(({ category, categoryIcon, name, description }) => (
        <RestaurantCard
          key={name}
          category={category}
          image={categoryIcon}
          name={name}
          description={description}
        />
      ))}
    </ul>
  );
};

export default RestaurantList;
