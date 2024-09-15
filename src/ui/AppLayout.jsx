/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Header from "./Header";

import Footer from "./Footer";
import { Provider } from "react-redux";
import { store, persistor } from "../features/cart/cartOperation";
import { PersistGate } from "redux-persist/integration/react";

function PersistGateComponent() {
  return (
    <PersistGate loading={<div>LOADING...</div>} persistor={persistor}>
      <Header />
      <Outlet />
      <Footer />
    </PersistGate>
  );
}

function AppLayout() {
  console.log("App layout rendered");
  return (
    <Provider store={store}>
      <PersistGateComponent></PersistGateComponent>
    </Provider>
  );
}

export default AppLayout;
