import styles from '../../../css/Restaurant.module.css';

const RestaurantCard = ({ category, image, name, description }) => {
  return (
    <li className={styles.restaurant}>
      <div className={styles.restaurantCategory}>
        <img src={image} alt={category} className={styles.categoryIcon} />
      </div>
      <div className={styles.restaurantInfo}>
        <h3 className={`${styles.restaurantName} text-subtitle`}>{name}</h3>
        <p className={`${styles.restaurantDescription} text-body`}>{description}</p>
      </div>
    </li>
  );
};

export default RestaurantCard;
