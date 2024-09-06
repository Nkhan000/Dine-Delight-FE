/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ItemsMenu from "./ItemsMenu";
import MenuItem from "./MenuItem";
import VenueMenuItem from "./VenueMenuItem";

// const fakeData = [
//   {
//     id: 1,
//     type: "venue",
//     image: "Table-001",
//     name: "Banquet Hall 1",
//     goodForOccassions: ["Birthdays", "engagements", "Ceremony"],
//     price: 5.99,
//     partySize: "150-200 people",
//   },
//   {
//     id: 2,
//     type: "venue",
//     name: "Birthday celebration hall",
//     image: "Table-002",
//     vegan: false,
//     goodForOccassions: ["Birthdays", "engagements", "Ceremony"],
//     price: 5.99,
//     partySize: "150-200 people",
//   },
//   {
//     id: 3,
//     type: "venue",
//     name: "Ball room",
//     image: "Table-003",
//     goodForOccassions: ["Birthdays", "engagements", "Ceremony"],
//     price: 5.99,
//     partySize: "150-200 people",
//   },
//   {
//     id: 4,
//     type: "venue",
//     image: "Table-004",
//     name: "Big gathering table",
//     goodForOccassions: ["Birthdays", "engagements", "Ceremony"],
//     price: 5.99,
//     partySize: "150-200 people",
//   },
// ];

function VenueMenu({
  venueMenu,
  searchParams,
  cuisineAddress,
  cuisineImage,
  cuisineName,
}) {
  const skipValue = 4;
  const currentPageNumber = searchParams.get("page");

  const bookingItems = venueMenu?.bookingItems || [];
  const cuisineId = venueMenu?.cuisineId;
  const isBookingMenuAvailable = bookingItems.length === 0;

  console.log("bookings item", venueMenu);
  const numberOfPages = Math.ceil(bookingItems.length / skipValue);
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
        bookingItems
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
