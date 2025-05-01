import styles from '../../css/Modal.module.css';
import { TEXT } from '../Constants/messages';
import Modal from '../Common/Modal';

const RestaurantDetailModal = ({closeDetailModal,selectedRestaurant}) => {
  

  return (
    <Modal closeModal={closeDetailModal} modalTitle={selectedRestaurant?.name}>
        <div className={styles.restaurantInfo}>
          <p className={`${styles.restaurantInfoDescription} text-body`}>
            {selectedRestaurant?.description || '식당 설명 없음'}
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button
            type="button"
            onClick={closeDetailModal}
            className={`${styles.button} ${styles.buttonPrimary} text-caption`}
          >
            {TEXT.CLOSE_BUTTON_TEXT}
          </button>
        </div>
        </Modal>
  );
};

export default RestaurantDetailModal;