/* eslint-disable no-unused-vars */
import axios from "axios";
import { PAGE_LIMIT } from "../utils/constants";

const token = localStorage.getItem("jwt");

export async function getCusines(page, currentFilter) {
  let requestUrl;
  if (!currentFilter) return;
  // console.log(currentFilter);
  if (currentFilter === "all") {
    requestUrl = `http://127.0.0.1:3000/api/v1/cuisines/?page=${page}&limit=${PAGE_LIMIT}`;
  } else {
    requestUrl = `http://127.0.0.1:3000/api/v1/cuisines/service/${currentFilter}?page=${page}&limit=${PAGE_LIMIT}`;
  }
  try {
    const response = await axios.get(requestUrl);
    return response.data;
  } catch (err) {
    console.log("ERROR FROM FETCH ", err);
  }
}

// CALLING API TO GET DATA OF A CUISINE FOR USERS
export async function getCuisineSingle(id) {
  const requestUrl = `http://127.0.0.1:3000/api/v1/cuisines/${id}`;

  try {
    const response = await axios.get(requestUrl);
    return response.data.cuisineData.cuisine;
  } catch (err) {
    console.log("error fetching cuisine data. Try again", err);
  }
}

// GET CUISINES DETAILS FOR CUISINE OWNER
export async function getACuisineBS() {
  const requestUrl = `http://127.0.0.1:3000/api/v1/cuisines/businessProfile`;
  try {
    const response = await axios.get(requestUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data.data;
  } catch (err) {
    console.log("error fetchin cusine", err);
  }
}

// --------------------- HIGHLIGHTS --------------------- //
export async function apiAddHighlights(data) {
  const requestUrl = `http://127.0.0.1:3000/api/v1/highlights`;

  try {
    const response = await axios.post(requestUrl, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    console.log("added higlights successfully");
  } catch (err) {
    console.log(err);
  }
}
export async function apiRemoveHighlights(data) {
  const requestUrl = `http://127.0.0.1:3000/api/v1/cuisines/highlights`;

  try {
    const response = await axios.patch(requestUrl, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
}
