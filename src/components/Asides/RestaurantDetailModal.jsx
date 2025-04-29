import styles from '../../css/Modal.module.css';
import { TEXT } from '../Constants/messages';

const RestaurantDetailModal = ({closeModal}) => {
  

  return (
    <div className={styles.modalOpen}>
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
            onClick={closeModal}
            className={`${styles.button} ${styles.buttonPrimary} text-caption`}
          >
            {TEXT.CLOSE_BUTTON_TEXT}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailModal;