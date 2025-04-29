import HeaderContainer from "../containers/HeaderContainer";
import MainContainer from "../containers/MainContainer";
import AsideContainer from "../containers/AsideContainer";
import { RESTAURANTS_DATA } from "../components/Constants/restaurantData";
import { useState } from "react";


function RestaurantListPage() {
  
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState();

  function closeModal(){
    setIsModalOpen(false);
  }
  function openModal(name) {
    const clickedRestaurant = RESTAURANTS_DATA.find((restaurant) => restaurant.name === name);
    setSelectedRestaurant(clickedRestaurant);
    setIsModalOpen(true);
  }



  return (
    <>
      <HeaderContainer/>
      <MainContainer 
        openModal = {openModal} 
      />
      <AsideContainer 
        isModalOpen = {isModalOpen} 
        closeModal = {closeModal}
        selectedRestaurant={selectedRestaurant}
      />
      
    </>
  );
}

export default RestaurantListPage;