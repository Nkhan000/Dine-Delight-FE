/* eslint-disable no-unused-vars */
const initialState = {
  venue: {},
};

export default function venueBookingReducer(state = initialState, action) {
  switch (action.type) {
    case "venue/addVenue": {
      const newVenue = action.payload;
      return {
        ...state,
        venue: newVenue,
      };
    }
    case "venue/removeVenue": {
      // const venueId = action.payload;
      return {
        ...state,
        ...initialState,
      };
    }
    default:
      return state;
  }
}

export function addAVenueBooking(itemObj) {
  return { type: "venue/addVenue", payload: itemObj };
}

export function removeVenueBooking() {
  return { type: "venue/removeVenue" };
}
