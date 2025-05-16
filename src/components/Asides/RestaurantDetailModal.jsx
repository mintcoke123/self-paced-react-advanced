import styled from "styled-components";
import { TEXT } from "../Constants/messages";
import Modal from "../Common/Modal";
import ModalButton from "../Common/ModalButton";

const RestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

const RestaurantInfoDescription = styled.p``;

function RestaurantDetailModal({ setIsDetailModalOpen, selectedRestaurant }) {
  function handleCloseModal() {
    setIsDetailModalOpen(false);
  }

  return (
    <Modal
      handleCloseModal={handleCloseModal}
      modalTitle={selectedRestaurant?.name || TEXT.RESTAURANT_NAME_NULL}
    >
      <RestaurantInfo>
        <RestaurantInfoDescription className="text-body">
          {selectedRestaurant?.description || TEXT.RESTAURANT_DESCRIPTION_NULL}
        </RestaurantInfoDescription>
      </RestaurantInfo>
      <ModalButton
        handleButtonOnClick={handleCloseModal}
        buttonType="button"
        buttonText={TEXT.CLOSE_BUTTON_TEXT}
      />
    </Modal>
  );
}

export default RestaurantDetailModal;
