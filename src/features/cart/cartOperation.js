/* eslint-disable no-unused-vars */

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import cartReducer from "./cartSlice";
import venueBookingReducer from "./venueBookingSlice";
import storage from "redux-persist/lib/storage"; // defaults to local storage for web

// Combining two redux slices together
const rootReducer = combineReducers({
  cart: cartReducer,
  venue: venueBookingReducer,
});

// this is to hold the data in the local Storage even if the browser sessison ends
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuring the Redux store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disables the serializable check if you're getting non-serializable warnings
    }),
});

// Creating the persistor
const persistor = persistStore(store);
export { store, persistor };
