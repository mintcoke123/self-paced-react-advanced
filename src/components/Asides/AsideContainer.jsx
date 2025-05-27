import { useContext } from "react";
import RestaurantDetailModal from "./RestaurantDetailModal";
import AddRestaurantModal from "./AddRestaurantModal";
import { RestaurantListPageContext } from "../../context/RestaurantListPageContext";

function AsideContainer() {
  const {
    state: { isDetailModalOpen, isAddModalOpen },
  } = useContext(RestaurantListPageContext);

  return (
    <aside>
      {isDetailModalOpen && <RestaurantDetailModal />}
      {isAddModalOpen && <AddRestaurantModal />}
    </aside>
  );
}

export default AsideContainer;
