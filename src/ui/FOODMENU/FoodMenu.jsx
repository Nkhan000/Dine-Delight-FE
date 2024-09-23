/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ItemsMenu from "../ItemsMenu";
import { useGetUser } from "../../features/authentication/useGetUser";
import FoodMenuItem from "./FoodMenuItem";

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

  const { user, isLoading, error } = useGetUser();
  let onGoingDeliveries;
  if (!isLoading) {
    onGoingDeliveries = user?.onGoingDeliveriesId.length;
  }
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
