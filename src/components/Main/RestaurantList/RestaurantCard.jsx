import styles from '../../css/Restaurant.module.css';

const RestaurantCard = ({ category, image, name, description }) => {
  return (
    <li className={styles.restaurant}>
      <div className={styles.restaurant__category}>
        <img src={image} alt={category} className={styles['category-icon']} />
      </div>
      <div className={styles.restaurant__info}>
        <h3 className={`${styles.restaurant__name} text-subtitle`}>{name}</h3>
        <p className={`${styles.restaurant__description} text-body`}>{description}</p>
      </div>
    </li>
  );
};

export default RestaurantCard;
