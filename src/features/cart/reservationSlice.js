/* eslint-disable no-unused-vars */
const initialState = {
  reservation: {},
};

export default function reservationSlice(state = initialState, action) {
  switch (action.type) {
    case "reservation/add": {
      console.log("acton", action);
      return {
        ...state,
        reservation: action.payload,
      };
    }
    case "reservation/remove": {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
}

export function addNewReservation(reservationObj) {
  console.log(reservationObj);
  return { type: "reservation/add", payload: reservationObj };
}

export function removeReservation() {
  return { type: "reservation/remove" };
}
