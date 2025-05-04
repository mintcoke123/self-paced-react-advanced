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
      modalTitle={selectedRestaurant?.name}
    >
      <div className={styles.restaurantInfo}>
        <p className={`${styles.restaurantInfoDescription} text-body`}>
          {selectedRestaurant?.description || "식당 설명 없음"}
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
