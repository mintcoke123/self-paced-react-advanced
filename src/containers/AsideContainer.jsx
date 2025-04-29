import RestaurantDetailModal from '../components/Asides/RestaurantDetailModal';
import AddRestaurantModal from '../components/Asides/AddRestaurantModal';


const AsideContainer = () => {
  return (
    <aside>
      <RestaurantDetailModal />
      <AddRestaurantModal />
    </aside>
  );
};

export default AsideContainer;
