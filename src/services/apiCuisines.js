/* eslint-disable no-unused-vars */
import axios from "axios";
import { PAGE_LIMIT } from "../utils/constants";

export async function getCusines(page, currentFilter) {
  let requestUrl;
  if (!currentFilter) return;
  // console.log(currentFilter);
  if (currentFilter === "all") {
    requestUrl = `http://127.0.0.1:3000/api/v1/cuisines/?page=${page}&limit=${PAGE_LIMIT}`;
  } else {
    requestUrl = `http://127.0.0.1:3000/api/v1/cuisines/service/${currentFilter}?page=${page}&limit=${PAGE_LIMIT}`;
  }
  console.log(requestUrl);
  try {
    const response = await axios.get(requestUrl, {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
    });
    return response.data;
  } catch (err) {
    console.log("ERROR FROM FETCH ", err);
  }
}

export async function getACuisinePrivate(id) {
  const requestUrl = `http://127.0.0.1:3000/api/v1/cuisines/businessProfile/${id}`;
  try {
    const response = await axios.get(requestUrl);
    console.log(response.data);
    // return response.data;
  } catch (err) {
    console.log("error fetchin cusine", err);
  }
}

// CALLING API TO GET DATA OF A CUISINE FOR USERS
export async function getCuisineSingle(id) {
  const requestUrl = `http://127.0.0.1:3000/api/v1/cuisines/${id}`;

  try {
    const response = await axios.get(requestUrl);
    // console.log(response.data);
    return response.data;
  } catch (err) {
    console.log("error fetching cuisine data. Try again", err);
  }
}
