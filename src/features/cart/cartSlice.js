/* eslint-disable no-unused-vars */
const initialState = {
  cart: [],
  cartTotal: 0,
  // remainingOrders: 3,
};

function getTotalAndCartTotal(cart) {
  const updatedCart = cart.map((order) => {
    const orderTotal = order.orderItems.reduce(
      (acc, item) => acc + item.price,
      0
    );
    return {
      ...order,
      total: orderTotal,
    };
  });
  console.log(updatedCart);

  const cartTotal = updatedCart.reduce((acc, order) => acc + order.total, 0);

  return { cart: updatedCart, cartTotal };
}
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    // case "cart/updateRemainingOrders": {
    //   const remainingOrders = action.payload.remainingOrders;
    //   return {
    //     ...state,
    //     remainingOrders: 3 - remainingOrders,
    //   };
    // }

    case "cart/addItem": {
      let updatedCart = [];
      if (state.cart.length > 0) {
        updatedCart = state.cart.map((item) => {
          if (item.cuisineId === action.payload.cuisineId) {
            // if the item is already in the cart then filter it our from the existing cart and then append the updatedone
            const updatedOrderItem = item.orderItems.filter(
              (order) => order.name !== action.payload.orderItems[0].name
            );
            return {
              ...item,
              orderItems: [...updatedOrderItem, ...action.payload.orderItems],
            };
          } else {
            return item;
          }
        });

        // If the item was not found, add it to the cart
        const itemExists = updatedCart.some(
          (item) => item.cuisineId === action.payload.cuisineId
        );
        if (!itemExists) {
          updatedCart = [...updatedCart, action.payload];
        }
      } else {
        updatedCart = [...state.cart, action.payload];
      }

      //For calucalating total and cart total
      const data = getTotalAndCartTotal(updatedCart);

      return {
        ...state,
        cart: data.cart,
        cartTotal: data.cartTotal,
      };
    }
    case "cart/removeItem": {
      const cuisineId = action.payload.cuisineId;
      const itemToRemove = action.payload.itemId;
      const updatedCart = state.cart
        .map((order) => {
          if (order.cuisineId === cuisineId) {
            const updatedOrderItems = order.orderItems.filter(
              (item) => item._id !== itemToRemove
            );
            if (updatedOrderItems.length > 0) {
              return {
                ...order,
                orderItems: updatedOrderItems,
              };
            }
            return null; // Mark the order for removal
          }
          return order;
        })
        .filter((order) => order !== null);

      const data = getTotalAndCartTotal(updatedCart);

      return {
        ...state,
        cart: data.cart,
        cartTotal: data.cartTotal,
      };

      // const updatedCart = state.cart.map((order) => {
      //   if (order.cuisineId === cuisineId) {
      //     const updatedOrderItem = order.orderItems.filter(
      //       (item) => item._id !== itemToRemove // filtering out orderItems from orderItems list
      //     );

      //     if (order.orderItems.length > 0) {
      //       return {
      //         ...order,
      //         orderItems: updatedOrderItem,
      //       };
      //     }
      //   } else {
      //     return null;
      //   }
      //   return order;
      // });

      // return {
      //   ...state,
      //   cart: updatedCart,
      // };
    }
    case "cart/removeCuisine":
      return { ...state };
    case "cart/removeSingleCuisine": {
      console.log(action.payload.cuisineId);
      const updatedCart = state.cart.filter(
        (order) => order.cuisineId !== action.payload.cuisineId
      );
      const data = getTotalAndCartTotal(updatedCart);
      return {
        ...state,
        cart: data.cart,
        cartTotal: data.cartTotal,
      };
    }
    case "cart/clearAll":
      return { ...state, ...initialState };
    case "cart/updateItemQuantity": {
      const { cuisineId, itemId, newQuantity } = action.payload;
      const updatedCart = state.cart.map((order) => {
        if (order.cuisineId === cuisineId) {
          return {
            ...order,
            orderItems: order.orderItems.map((item) =>
              item._id === itemId
                ? {
                    ...item,
                    quantity: newQuantity,
                    price: item.prices[item.size] * newQuantity,
                  }
                : item
            ),
          };
        }
        return order;
      });

      const data = getTotalAndCartTotal(updatedCart);

      return {
        ...state,
        cart: data.cart,
        cartTotal: data.cartTotal,
      };
    }
    case "cart/updateItemSize": {
      const { cuisineId, itemId, newSize } = action.payload;
      const updatedCart = state.cart.map((order) => {
        if (order.cuisineId === cuisineId) {
          return {
            ...order,
            orderItems: order.orderItems.map((item) =>
              item._id === itemId
                ? {
                    ...item,
                    size: newSize,
                    price: item.prices[newSize] * item.quantity,
                  }
                : item
            ),
          };
        }
        return order;
      });

      const data = getTotalAndCartTotal(updatedCart);

      return {
        ...state,
        cart: data.cart,
        cartTotal: data.cartTotal,
      };
    }

    default:
      return state;
  }
}

export function addItem(itemObj) {
  return { type: "cart/addItem", payload: itemObj };
}

export function removeItem(itemObj) {
  return { type: "cart/removeItem", payload: itemObj };
}

export function updateNewQuantity(itemObj) {
  return { type: "cart/updateItemQuantity", payload: itemObj };
}

export function removeSingleCuisine(itemObj) {
  return { type: "cart/removeSingleCuisine", payload: itemObj };
}

export function updateItemSize(itemObj) {
  return { type: "cart/updateItemSize", payload: itemObj };
}
export function clearCartFromReduxState() {
  return { type: "cart/clearAll" };
}

// export function updateRemainingOrders(itemObj) {
//   return { type: "cart/updateRemainingOrders", payload: itemObj };
// }
