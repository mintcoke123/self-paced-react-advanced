import styled from "styled-components";
import { CATEGORY_ICONS } from "../../../constants/icons";
import { RestaurantListPageContext } from "../../../context/RestaurantListPageContext";
import { useContext } from "react";
import RestaurantComponent from "./RestaurantComponent";
const RestaurantListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin: 16px 0;
`;

function RestaurantList() {
  const {
    state: { selectedCategory, restaurantsData },
  } = useContext(RestaurantListPageContext);

  const filteredRestaurants =
    selectedCategory === "" || selectedCategory === "전체"
      ? restaurantsData
      : restaurantsData.filter(
          (restaurant) => restaurant.category === selectedCategory
        );

  return (
    <RestaurantListContainer>
      {filteredRestaurants?.map(({ id, category, name, description }) => (
        <RestaurantComponent
          id={id}
          key={name}
          category={category}
          categoryIcon={CATEGORY_ICONS[category]}
          name={name}
          description={description}
        />
      ))}
    </RestaurantListContainer>
  );
}

export default RestaurantList;
