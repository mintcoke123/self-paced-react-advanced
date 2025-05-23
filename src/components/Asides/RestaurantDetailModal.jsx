import { useContext } from "react";
import styled from "styled-components";
import { TEXT } from "../../constants/messages";
import Modal from "../Common/Modal";
import Button from "../Common/Button";
import { Body } from "../Common/Typography";
import { Caption } from "../Common/Typography";
import { RestaurantListPageContext } from "../../context/RestaurantListPageContext";

const RestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

function RestaurantDetailModal() {
  const { setIsDetailModalOpen, selectedRestaurant } = useContext(RestaurantListPageContext);

  return (
    <Modal
      handleCloseModal={() => setIsDetailModalOpen(false)}
      modalTitle={selectedRestaurant?.name || TEXT.RESTAURANT_NAME_NULL}
    >
      <RestaurantInfo>
        <Body>
          {selectedRestaurant?.description || TEXT.RESTAURANT_DESCRIPTION_NULL}
        </Body>
      </RestaurantInfo>
      <Button variant="modal" onClick={() => setIsDetailModalOpen(false)} type="button">
        <Caption>{TEXT.CLOSE_BUTTON_TEXT}</Caption>
      </Button>
    </Modal>
  );
}

export default RestaurantDetailModal;
