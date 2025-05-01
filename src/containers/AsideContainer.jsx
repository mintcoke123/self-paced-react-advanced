import RestaurantDetailModal from '../components/Asides/RestaurantDetailModal';
import AddRestaurantModal from '../components/Asides/AddRestaurantModal';

function AsideContainer({
  isDetailModalOpen, closeDetailModal, selectedRestaurant, isAddModalOpen, closeAddModal, addRestaurantData,
}) {
  return (
    <aside>
      {isDetailModalOpen && <RestaurantDetailModal closeDetailModal={closeDetailModal} selectedRestaurant={selectedRestaurant} />}
      {isAddModalOpen && <AddRestaurantModal closeAddModal={closeAddModal} addRestaurantData={addRestaurantData} />}
    </aside>
  );
}

export default AsideContainer;
