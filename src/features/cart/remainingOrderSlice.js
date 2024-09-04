/* eslint-disable no-unused-vars */

const initialState = {
  remainingOrders: 0,
};

export default function remainingOrderReducer(state = initialState, action) {
  // const {allowedNumberOfOrders } = useGetUser()
  switch (action.type) {
    case "remainingOrder/addItem": {
      return {
        ...state,
        remainingOrders:
          action.payload.remainingOrders !== null
            ? action.payload.remainingOrders
            : state.remainingOrders,
      };
    }
    case "remainingOrder/deleteItem": {
      return {
        ...state,
        remainingOrders: action.payload.remainingOrders,
      };
    }
    case "remainingOrder/initialValue": {
      return {
        ...state,
        remainingOrders:
          action.payload.remainingOrders !== null
            ? action.payload.remainingOrders
            : state.remainingOrders,
      };
    }
    default: {
      return state;
    }
  }
}

export function decreaseRemOrderOnAddNewOrder(itemObj) {
  return { type: "remainingOrder/addItem", payload: itemObj };
}
export function setInitialRemOrders(itemObj) {
  return { type: "remainingOrder/addItem", payload: itemObj };
}
