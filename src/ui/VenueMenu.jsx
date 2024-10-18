/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ItemsMenu from "./ItemsMenu";
import MenuItem from "./MenuItem";
import VenueMenuItem from "./VenueMenuItem";

function VenueMenu({
  venueMenu,
  searchParams,
  cuisineAddress,
  cuisineImage,
  cuisineName,
}) {
  const skipValue = 4;
  const currentPageNumber = searchParams.get("page");

  const venueItems = venueMenu?.venueItems || [];
  const cuisineId = venueMenu?.cuisineId;
  const isBookingMenuAvailable = venueItems.length === 0;

  console.log("bookings item", venueMenu);
  const numberOfPages = Math.ceil(venueItems.length / skipValue);
  return (
    <ItemsMenu
      showPagination={!isBookingMenuAvailable}
      currentPageNumber={currentPageNumber}
      numberOfPages={numberOfPages}
      menuName="Venues"
    >
      {isBookingMenuAvailable ? (
        <span>Nothing to show</span>
      ) : (
        venueItems
          .slice(
            (currentPageNumber - 1) * skipValue,
            currentPageNumber * skipValue
          )
          .map((item, i) => (
            <VenueMenuItem
              key={`${item.name}-${i}`}
              data={item}
              searchParams={searchParams}
              cuisineAddress={cuisineAddress}
              cuisineImage={cuisineImage}
              cuisineName={cuisineName}
              cuisineId={cuisineId}
            />
          ))
      )}
    </ItemsMenu>
  );
}

export default VenueMenu;
