import RestaurantDetailModal from "./RestaurantDetailModal";
import AddRestaurantModal from "./AddRestaurantModal";


function AsideContainer({
  isDetailModalOpen,
  setIsDetailModalOpen,
  selectedRestaurant,
  isAddModalOpen,
  setIsAddModalOpen,
  addRestaurantData,
}) {
  return (
    <aside>
      {isDetailModalOpen && (
        <RestaurantDetailModal
          setIsDetailModalOpen={setIsDetailModalOpen}
          selectedRestaurant={selectedRestaurant}
        />
      )}
      {isAddModalOpen && (
        <AddRestaurantModal
          setIsAddModalOpen={setIsAddModalOpen}
          addRestaurantData={addRestaurantData}
        />
      )}

    </aside>
  );
}

export default AsideContainer;
