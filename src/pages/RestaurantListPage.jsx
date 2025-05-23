import Header from "../components/Header/header";
import MainContainer from "../components/Main/MainContainer";
import AsideContainer from "../components/Asides/AsideContainer";
import { DetailModalProvider } from '../context/DetailModalContext';
import { AddModalProvider } from '../context/AddModalContext';
import { RestaurantDataProvider } from '../context/RestaurantDataContext';

function RestaurantListPage() {
  return (
    <RestaurantDataProvider>
      <AddModalProvider>
        <DetailModalProvider>
          <Header />
          <MainContainer />
          <AsideContainer />
        </DetailModalProvider>
      </AddModalProvider>
    </RestaurantDataProvider>
  );
}

export default RestaurantListPage;
