import HeaderContainer from "../containers/HeaderContainer";
import MainContainer from "../containers/MainContainer";
import AsideContainer from "../containers/AsideContainer";
import { useState } from "react";


function RestaurantListPage() {
  
  const [isModalOpen,setIsModalOpen] = useState(true);
  function closeModal(){
    setIsModalOpen(false);
  }
  function openModal(){
    setIsModalOpen(true);
  }


  return (
    <>
      <HeaderContainer/>
      <MainContainer/>
      <AsideContainer isModalOpen = {isModalOpen} openModal = {openModal} closeModal = {closeModal}/>
      
    </>
  );
}

export default RestaurantListPage;