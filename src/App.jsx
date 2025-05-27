import RestaurantListPage from "./pages/RestaurantListPage";
import "./App.css";
import { RestaurantListPageProvider } from "./context/RestaurantListPageContext";

function App() {
  return (
    <RestaurantListPageProvider>
      <RestaurantListPage />
    </RestaurantListPageProvider>
  );
}

export default App;
