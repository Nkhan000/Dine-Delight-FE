/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AllowOrderContext } from "../utils/contexts";

export function AllowOrderProvider({ children }) {
  const [tempRemainingOrders, setTempRemainingOrders] = useState();
  return (
    <AllowOrderContext.Provider
      value={{ tempRemainingOrders, setTempRemainingOrders }}
    >
      {children}
    </AllowOrderContext.Provider>
  );
}
