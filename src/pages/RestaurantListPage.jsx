import Header from "../components/Header/Header";
import MainContainer from "../components/Main/MainContainer";
import AsideContainer from "../components/Asides/AsideContainer";
import { getRestaurants } from "../api/api";
import {  useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { restaurantsDataState } from "../recoil/atoms";


function RestaurantListPage() {
  const setRestaurantsData = useSetRecoilState(restaurantsDataState); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRestaurants();
        setRestaurantsData(data);
      } catch (error) {
        alert("레스토랑 데이터를 불러오는 데 실패했습니다.");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <MainContainer />
      <AsideContainer />
    </>
  );
}

export default RestaurantListPage;
