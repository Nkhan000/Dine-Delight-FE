/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import styled from "styled-components";
// import Heading from "./Heading";
import MenuItem from "./MenuItem";
// import StyledOptions from "./StyledOptions";
// import Pagination from "./Pagination";
import ItemsMenu from "./ItemsMenu";
import { useGetUser } from "../features/authentication/useGetUser";
import FoodMenuItem from "./foodMenuItem";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 1;
`;

const FilterDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MenuItems = styled.div`
  padding: 1rem 2.6rem;

  display: grid;
  grid-template-columns: 1fr;
  gap: 1.4rem;
`;

const HeadingDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0rem;
  z-index: 6;
  background-color: var(--color-medium-black);
  padding: 1.2rem 1.8rem;

  border-bottom: 0.5px solid #444141;
`;
const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;
`;

function FoodMenu({
  searchParams,
  foodMenu,
  cuisineImage,
  cuisineName,
  cuisineAddress,
  deliveryPrice,
}) {
  // console.log(foodMenu.foodItems);

  const skipValue = 4;
  let { cuisineId, foodItems } = foodMenu;
  // filtering out items based on thier category
  const searchCategory = searchParams.get("category");
  foodItems = foodItems.filter((item) =>
    searchCategory === "all" ? item : item.category === searchCategory
  );
  const searchFor = searchParams.get("for");
  foodItems = foodItems.filter((item) =>
    searchFor == "all" ? item : item.type === searchFor
  );

  const foodMenuNotAvailable = !foodMenu || foodItems.length === 0;
  const numberOfPages = Math.ceil(foodItems.length / skipValue);
  const currentPageNumber = searchParams.get("page");

  const { data, isLoading, error } = useGetUser();
  const onGoingDeliveries = data && data.user.onGoingDeliveriesId.length;
  // console.log(data);
  return (
    <>
      <ItemsMenu
        currentPageNumber={currentPageNumber}
        numberOfPages={numberOfPages}
        menuName="menu"
        showPagination={!foodMenuNotAvailable}
      >
        {foodMenuNotAvailable ? (
          <span>Nothing to show</span>
        ) : (
          foodItems
            .slice(
              (currentPageNumber - 1) * skipValue,
              currentPageNumber * skipValue
            )
            .map((item, i) => (
              <FoodMenuItem
                allowOrdering={onGoingDeliveries < 3}
                key={`${item.name}-${i}`}
                data={item}
                searchParams={searchParams}
                cuisineAddress={cuisineAddress}
                cuisineImage={cuisineImage}
                cuisineName={cuisineName}
                cuisineId={cuisineId}
                deliveryPrice={deliveryPrice}
              />
            ))
        )}
      </ItemsMenu>
    </>
  );
}

export default FoodMenu;
