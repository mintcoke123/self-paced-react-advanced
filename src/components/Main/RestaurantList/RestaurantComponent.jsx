import styles from "../../../css/Restaurant.module.css";

function RestaurantComponent({
  id,
  category,
  categoryIcon,
  name,
  description,
  openDetailModal,
}) {
  function handleButtonClick() {
    openDetailModal(id);
  }

  return (
    <li className={styles.restaurant} onClick={handleButtonClick}>
      <div className={styles.restaurantCategory}>
        <img
          src={categoryIcon}
          alt={category}
          className={styles.categoryIcon}
        />
      </div>
      <div className={styles.restaurantInfo}>
        <h3 className={`${styles.restaurantName} textSubtitle`}>{name}</h3>
        <p className={`${styles.restaurantDescription} textBody`}>
          {description}
        </p>
      </div>
    </li>
  );
}

export default RestaurantComponent;
