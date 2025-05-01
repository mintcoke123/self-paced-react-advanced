import styles from '../../css/Modal.module.css';
import { TEXT } from '../Constants/messages';
import Modal from '../Common/Modal';
import ModalButton from '../Common/ModalButton';

const RestaurantDetailModal = ({closeDetailModal,selectedRestaurant}) => {
  

  return (
    <Modal closeModal={closeDetailModal} modalTitle={selectedRestaurant?.name}>
        <div className={styles.restaurantInfo}>
          <p className={`${styles.restaurantInfoDescription} text-body`}>
            {selectedRestaurant?.description || '식당 설명 없음'}
          </p>
        </div>
        <ModalButton buttonOnClick={closeDetailModal} buttonType={'button'} buttonText={TEXT.CLOSE_BUTTON_TEXT}>

        </ModalButton>
        </Modal>
  );
};

export default RestaurantDetailModal;