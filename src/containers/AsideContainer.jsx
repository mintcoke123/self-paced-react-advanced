import RestaurantDetailModal from '../components/Asides/RestaurantDetailModal';
import AddRestaurantModal from '../components/Asides/AddRestaurantModal';

const AsideContainer = ({isDetailModalOpen,closeDetailModal,selectedRestaurant}) => {
  return (
    <aside>
      {isDetailModalOpen && <RestaurantDetailModal closeDetailModal = {closeDetailModal} selectedRestaurant = {selectedRestaurant}/>}
      <AddRestaurantModal />
    </aside>
  );
};

export default AsideContainer;
