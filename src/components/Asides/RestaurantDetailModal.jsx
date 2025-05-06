import styles from '../../css/Modal.module.css';
import { TEXT } from '../Constants/messages';

const RestaurantDetailModal = ({closeModal,selectedRestaurant}) => {
  

  return (
    <div className={styles.modalOpen}>
      <div className={styles.modalBackdrop} onClick={closeModal}></div>
      <div className={styles.modalContainer}>
        <h2 className={`${styles.modalTitle} text-title`}>
          {selectedRestaurant?.name || '식당 이름 등록 안됨'}
        </h2>
        <div className={styles.restaurantInfo}>
          <p className={`${styles.restaurantInfoDescription} text-body`}>
            {selectedRestaurant?.description || '식당 설명 없음'}
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