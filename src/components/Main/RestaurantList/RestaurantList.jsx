import RestaurantCard from './RestaurantCard';
import styles from '../../css/Restaurant.module.css';

const RestaurantList = ({ restaurants }) => {
  return (
    <ul className={styles['restaurant-list']}>
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
