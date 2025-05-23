import { useContext } from "react";
import styled from "styled-components";
import { CATEGORY_ICONS } from "../../../constants/icons";
import RestaurantComponent from "./RestaurantComponent";
import { RestaurantListPageContext } from "../../../context/RestaurantListPageContext";

const RestaurantListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin: 16px 0;
`;

function RestaurantList({ filteredRestaurants }) {
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
