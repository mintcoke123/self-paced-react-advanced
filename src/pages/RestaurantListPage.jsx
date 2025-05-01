import { useState } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import MainContainer from '../containers/MainContainer';
import AsideContainer from '../containers/AsideContainer';
import { RESTAURANTS_DATA } from '../components/Constants/restaurantData';

function RestaurantListPage() {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [restaurantsData, setRestaurantsData] = useState(RESTAURANTS_DATA);

  function closeDetailModal() {
    setIsDetailModalOpen(false);
  }

  function openDetailModal(name) {
    const clickedRestaurant = restaurantsData.find((restaurant) => restaurant.name === name);
    setSelectedRestaurant(clickedRestaurant);
    setIsDetailModalOpen(true);
  }

  function closeAddModal() {
    setIsAddModalOpen(false);
  }

  function openAddModal() {
    setIsAddModalOpen(true);
  }

  function addRestaurantData(newRestaurant) {
    setRestaurantsData([...restaurantsData, newRestaurant]);
  }

  return (
    <>
      <HeaderContainer
        openAddModal={openAddModal}
      />
      <MainContainer
        openDetailModal={openDetailModal}
        restaurantsData={restaurantsData}
      />
      <AsideContainer
        isDetailModalOpen={isDetailModalOpen}
        closeDetailModal={closeDetailModal}
        selectedRestaurant={selectedRestaurant}
        isAddModalOpen={isAddModalOpen}
        closeAddModal={closeAddModal}
        addRestaurantData={addRestaurantData}
      />

    </>
  );
}

export default RestaurantListPage;
