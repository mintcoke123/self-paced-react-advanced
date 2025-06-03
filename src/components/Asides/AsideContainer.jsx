import { useRecoilValue } from 'recoil';
import RestaurantDetailModal from './RestaurantDetailModal';
import AddRestaurantModal from './AddRestaurantModal';
import {
  isDetailModalOpenState,
  isAddModalOpenState,
} from '../../recoil/atoms';

function AsideContainer() {
  const isDetailModalOpen = useRecoilValue(isDetailModalOpenState);
  const isAddModalOpen = useRecoilValue(isAddModalOpenState);

  return (
    <aside>
      {isDetailModalOpen && <RestaurantDetailModal />}
      {isAddModalOpen && <AddRestaurantModal />}
    </aside>
  );
}

export default AsideContainer;
