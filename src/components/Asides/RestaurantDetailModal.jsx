import styles from "../../css/Modal.module.css";
import { TEXT } from "../Constants/messages";
import Modal from "../Common/Modal";
import ModalButton from "../Common/ModalButton";

function RestaurantDetailModal({ setIsDetailModalOpen, selectedRestaurant }) {
  function handleCloseModal() {
    setIsDetailModalOpen(false);
  }

  return (
    <Modal
      handleCloseModal={handleCloseModal}
      modalTitle={selectedRestaurant?.name || TEXT.RESTAURANT_NAME_NULL}
    >
      <div className={styles.restaurantInfo}>
        <p className={`${styles.restaurantInfoDescription} text-body`}>
          {selectedRestaurant?.description || TEXT.RESTAURANT_DESCRIPTION_NULL}
        </p>
      </div>
      <ModalButton
        handleButtonOnClick={handleCloseModal}
        buttonType="button"
        buttonText={TEXT.CLOSE_BUTTON_TEXT}
      />
    </Modal>
  );
}

export default RestaurantDetailModal;
