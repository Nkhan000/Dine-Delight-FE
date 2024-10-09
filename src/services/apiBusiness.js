import axios from "axios";

const token = localStorage.getItem("jwt");

/* ------------- FOOD MENU -----------------*/
export async function apiGetAllFoodItems() {
  const requestUrl = `http://127.0.0.1:3000/api/v1/user/get-food-menu`;

  try {
    const response = await axios.get(requestUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.foodMenu;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function apiAddANewFoodItem(data) {
  const requestUrl = `http://127.0.0.1:3000/api/v1/cuisines/update-menu-items`;

  try {
    const response = await axios.post(requestUrl, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

export async function apiDeleteAFoodItem(data) {
  const requestUrl = `http://127.0.0.1:3000/api/v1/cuisines/update-menu-items`;

  try {
    const response = await axios.patch(requestUrl, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

export async function apiUpdateAFoodItem(data) {
  const requestUrl = `http://127.0.0.1:3000/api/v1/cuisines/update-menu-items`;
  try {
    const response = await axios.put(requestUrl, data, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log(response.data);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

/* -------------------------------------------*/

/* ------------- VENUES MENU -----------------*/
export async function apiGetAllVenues() {
  const requestUrl = `http://127.0.0.1:3000/api/v1/venue/get-all-venues`;

  try {
    const response = await axios.get(requestUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}
