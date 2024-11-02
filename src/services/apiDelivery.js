/* eslint-disable no-unused-vars */
import axios from "axios";
const token = localStorage.getItem("jwt");

export async function apiCreateDelivery(orderObj) {
  const requestUrl = `http://127.0.0.1:3000/api/v1/cuisines/delivery/new`;
  try {
    const request = await axios.post(requestUrl, orderObj, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(await request.response);
  } catch (err) {
    console.log(err.message);
  }
}

export async function apiGetADeliveryData() {
  const requestUrl = `http://127.0.0.1:3000/api/v1/cuisines/delivery/get-one`;
  try {
    const response = await axios.get(requestUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return await response.data.data.delivery;
    // return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}
