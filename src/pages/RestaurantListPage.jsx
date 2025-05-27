import Header from "../components/Header/Header";
import MainContainer from "../components/Main/MainContainer";
import AsideContainer from "../components/Asides/AsideContainer";
import { RestaurantListPageContext } from "../context/RestaurantListPageContext";
import { getRestaurants } from "../api/api";
import { useContext, useEffect } from "react";

function RestaurantListPage() {
  const {
    actions: { setRestaurantsData },
  } = useContext(RestaurantListPageContext);

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
