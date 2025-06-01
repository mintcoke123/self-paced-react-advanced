import styled from 'styled-components';
import { TEXT } from '../../constants/messages';
import Modal from '../Common/Modal';
import Button from '../Common/Button';
import { Body } from '../Common/Typography';
import { Caption } from '../Common/Typography';
import {
  selectedRestaurantState,
  isDetailModalOpenState,
} from '../../recoil/atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const RestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

function RestaurantDetailModal() {
  const selectedRestaurant = useRecoilValue(selectedRestaurantState);
  const setIsDetailModalOpen = useSetRecoilState(isDetailModalOpenState);

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
      <Button
        $variant="modal"
        onClick={() => setIsDetailModalOpen(false)}
        type="button"
      >
        <Caption>{TEXT.CLOSE_BUTTON_TEXT}</Caption>
      </Button>
    </Modal>
  );
}

export default RestaurantDetailModal;
