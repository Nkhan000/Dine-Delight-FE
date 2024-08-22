/* eslint-disable no-unused-vars */
import axios from "axios";

export async function apiCreateDelivery(orderObj) {
  const requestUrl = `http://127.0.0.1:3000/api/v1/cuisines/delivery/new`;
  try {
    const request = await axios.post(requestUrl, orderObj);
  } catch (err) {
    console.log(err);
  }
}

export async function apiGetADeliveryData(userId) {
  const requestUrl = `http://127.0.0.1:3000/api/v1/cuisines/delivery/get-one/${userId}`;
  try {
    const response = await axios(requestUrl);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
