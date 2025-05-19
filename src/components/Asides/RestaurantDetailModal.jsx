import styled from "styled-components";
import { TEXT } from "../../constants/messages";
import Modal from "../Common/Modal";
import ModalButton from "../Common/ModalButton";
import { Typography } from "../Common/Typography";

const RestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

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
        <Typography.Body>
          {selectedRestaurant?.description || TEXT.RESTAURANT_DESCRIPTION_NULL}
        </Typography.Body>
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
