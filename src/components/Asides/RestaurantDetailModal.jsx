import styled from "styled-components";
import { TEXT } from "../../constants/messages";
import Modal from "../Common/Modal";
import Button from "../Common/Button";
import { Typography } from "../Common/Typography";
import { Body } from "../Common/Typography";
import { Caption } from "../Common/Typography";

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
        <Body>
          {selectedRestaurant?.description || TEXT.RESTAURANT_DESCRIPTION_NULL}
        </Body>
      </RestaurantInfo>
      <Button variant="modal" onClick={handleCloseModal} type="button">
        <Caption>{TEXT.CLOSE_BUTTON_TEXT}</Caption>
      </Button>
    </Modal>
  );
}

export default RestaurantDetailModal;
