import Header from "../components/Header/Header";
import MainContainer from "../components/Main/MainContainer";
import AsideContainer from "../components/Asides/AsideContainer";
import { DetailModalProvider } from "../context/DetailModalContext";
import { AddModalProvider } from "../context/AddModalContext";
import { RestaurantDataProvider } from "../context/RestaurantDataContext";
import { MainContextProvider } from "../context/MainContext";

function RestaurantListPage() {
  return (
    <RestaurantDataProvider>
      <AddModalProvider>
        <DetailModalProvider>
          <MainContextProvider>
            <Header />
            <MainContainer />
            <AsideContainer />
          </MainContextProvider>
        </DetailModalProvider>
      </AddModalProvider>
    </RestaurantDataProvider>
  );
}

export default RestaurantListPage;
