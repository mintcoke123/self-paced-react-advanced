import styles from '../../css/Modal.module.css';
import { TEXT } from '../Constants/messages';

const RestaurantDetailModal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalBackdrop}></div>
      <div className={styles.modalContainer}>
        <h2 className={`${styles.modalTitle} text-title`}>
          {TEXT.MODAL_TITLE_PLACEHOLDER}
        </h2>
        <div className={styles.restaurantInfo}>
          <p className={`${styles.restaurantInfoDescription} text-body`}>
            {TEXT.MODAL_DESCRIPTION_PLACEHOLDER}
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={`${styles.button} ${styles.buttonPrimary} text-caption`}
          >
            {TEXT.MODAL_CLOSE_BUTTON}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailModal;