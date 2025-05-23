import { useContext } from "react";
import RestaurantDetailModal from "./RestaurantDetailModal";
import AddRestaurantModal from "./AddRestaurantModal";
import { DetailModalContext } from "../../context/DetailModalContext";
import { AddModalContext } from "../../context/AddModalContext";

function AsideContainer() {
  const {
    isDetailModalOpen    
  } = useContext(DetailModalContext);

  const {
    isAddModalOpen
  } = useContext(AddModalContext);

  return (
    <aside>
      {isDetailModalOpen && <RestaurantDetailModal />}
      {isAddModalOpen && <AddRestaurantModal />}
    </aside>
  );
}

export default AsideContainer;
