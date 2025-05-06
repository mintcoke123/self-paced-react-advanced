import RestaurantDetailModal from '../components/Asides/RestaurantDetailModal';
import AddRestaurantModal from '../components/Asides/AddRestaurantModal';

const AsideContainer = ({isModalOpen,closeModal,selectedRestaurant}) => {
  return (
    <aside>
      {isModalOpen && <RestaurantDetailModal closeModal = {closeModal} selectedRestaurant = {selectedRestaurant}/>}
      <AddRestaurantModal />
    </aside>
  );
};

export default AsideContainer;
