import Header from "../components/Header/header";
import MainContainer from "../components/Main/MainContainer";
import AsideContainer from "../components/Asides/AsideContainer";
import { RestaurantListPageProvider } from '../context/RestaurantListPageContext';

function RestaurantListPage() {
  return (
    <RestaurantListPageProvider>
      <Header />
      <MainContainer />
      <AsideContainer />
    </RestaurantListPageProvider>
  );
}

export default RestaurantListPage;
