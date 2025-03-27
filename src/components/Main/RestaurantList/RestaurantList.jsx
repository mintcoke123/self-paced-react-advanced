import styles from '../../css/Restaurant.module.css';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ restaurants }) => {
  return (
    <ul className={styles.restaurantList}>
      {restaurants.map(({ category, image, name, description }) => (
        <RestaurantCard
          key={name}
          category={category}
          image={image}
          name={name}
          description={description}
        />
      ))}
    </ul>
  );
};

export default RestaurantList;
