import RestaurantDetailModal from '../components/Asides/RestaurantDetailModal';
import AddRestaurantModal from '../components/Asides/AddRestaurantModal';

const AsideContainer = ({isDetailModalOpen,closeDetailModal,selectedRestaurant,isAddModalOpen,closeAddModal}) => {
  return (
    <aside>
      {isDetailModalOpen && <RestaurantDetailModal closeDetailModal = {closeDetailModal} selectedRestaurant = {selectedRestaurant}/>}
      {isAddModalOpen && <AddRestaurantModal closeAddModal={closeAddModal}/>}
    </aside>
  );
};

export default AsideContainer;
