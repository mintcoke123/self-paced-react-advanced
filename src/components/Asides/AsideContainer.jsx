import RestaurantDetailModal from "../components/Asides/RestaurantDetailModal";
import AddRestaurantModal from "../components/Asides/AddRestaurantModal";


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
