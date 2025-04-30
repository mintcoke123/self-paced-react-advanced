import HeaderContainer from "../containers/HeaderContainer";
import MainContainer from "../containers/MainContainer";
import AsideContainer from "../containers/AsideContainer";
import { RESTAURANTS_DATA } from "../components/Constants/restaurantData";
import { useState } from "react";


function RestaurantListPage() {
  
  const [isDetailModalOpen,setIsDetailModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState();

  function closeDetailModal(){
    setIsDetailModalOpen(false);
  }
  function openDetailModal(name) {
    const clickedRestaurant = RESTAURANTS_DATA.find((restaurant) => restaurant.name === name);
    setSelectedRestaurant(clickedRestaurant);
    setIsDetailModalOpen(true);
  }



  return (
    <>
      <HeaderContainer/>
      <MainContainer 
        openDetailModal = {openDetailModal} 
      />
      <AsideContainer 
        isDetailModalOpen = {isDetailModalOpen} 
        closeDetailModal = {closeDetailModal}
        selectedRestaurant={selectedRestaurant}
      />
      
    </>
  );
}

export default RestaurantListPage;