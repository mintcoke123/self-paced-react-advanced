import RestaurantDetailModal from '../components/Asides/RestaurantDetailModal';
import AddRestaurantModal from '../components/Asides/AddRestaurantModal';

const AsideContainer = ({isModalOpen,closeModal}) => {
  return (
    <aside>
      {isModalOpen && <RestaurantDetailModal closeModal = {closeModal}/>}
      <AddRestaurantModal />
    </aside>
  );
};

export default AsideContainer;
