import { useState } from "react";
import HeaderContainer from "../containers/HeaderContainer";
import MainContainer from "../containers/MainContainer";
import AsideContainer from "../containers/AsideContainer";
import { RESTAURANTS_DATA } from "../components/Constants/restaurantData";

function RestaurantListPage() {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [restaurantsData, setRestaurantsData] = useState(RESTAURANTS_DATA);

  function selectClickedRestaurant(id) {
    const clickedRestaurant = restaurantsData.find(
      (restaurant) => restaurant.id === id
    );
    setSelectedRestaurant(clickedRestaurant);
  }

  function addRestaurantData(newRestaurant) {
    setRestaurantsData([...restaurantsData, newRestaurant]);
  }

  return (
    <>
      <HeaderContainer setIsAddModalOpen={setIsAddModalOpen} />
      <MainContainer
        setIsDetailModalOpen={setIsDetailModalOpen}
        selectClickedRestaurant={selectClickedRestaurant}
        restaurantsData={restaurantsData}
      />
      <AsideContainer
        isDetailModalOpen={isDetailModalOpen}
        setIsDetailModalOpen={setIsDetailModalOpen}
        selectedRestaurant={selectedRestaurant}
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        addRestaurantData={addRestaurantData}
      />
    </>
  );
}

export default RestaurantListPage;
