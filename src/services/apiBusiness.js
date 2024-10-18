import axios from "axios";

const token = localStorage.getItem("jwt");

/* ------------- FOOD MENU -----------------*/
export async function apiGetAllFoodItems() {
  const requestUrl = `http://127.0.0.1:3000/api/v1/user/get-food-menu`;

  try {
    const response = await axios.get(requestUrl, {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true,
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

export async function apiDeleteSelectedImagesForVenue(data) {
  const requestUrl = `http://127.0.0.1:3000/api/v1/venue/delete-images`;
  try {
    const response = await axios.delete(requestUrl, {
      headers: { Authorization: `Bearer ${token}` },
      data: data, // Pass the data in the config object
    });
    console.log("sending");
    console.log(response.data);
  } catch (err) {
    console.log("Error deleting images. Try Again");
    console.log(err);
    throw new Error(err);
  }
}

export async function apiAddANewVenue(data) {
  const requestUrl = `http://127.0.0.1:3000/api/v1/venue/update-venue`;

  try {
    const response = await axios.post(requestUrl, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("sending");
    console.log(response.data);
  } catch (err) {
    console.log("Error adding a new venue. Try Again");
    console.log(err);
    throw new Error(err);
  }
}
export async function apiDeleteAVenue(data) {
  const requestUrl = `http://127.0.0.1:3000/api/v1/venue/update-venue`;
  try {
    const response = await axios.delete(requestUrl, {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true,
      data: data, // The data to send with the DELETE request
    });

    return response;
  } catch (err) {
    console.log("Error deleting a new venue. Try Again", err);
    throw new Error(err);
  }
}
export async function apiUpdataAVenue(data) {
  const requestUrl = `http://127.0.0.1:3000/api/v1/venue/update-venue`;

  try {
    const response = await axios.patch(requestUrl, data, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log(response.data);
  } catch (err) {
    console.log("Error updating a new venue. Try Again");
    console.log(err);
    throw new Error(err);
  }
}

export async function apiGetAllVenues() {
  const requestUrl = `http://127.0.0.1:3000/api/v1/venue/get-all-venues`;

  try {
    const response = await axios.get(requestUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.venuesMenu;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}
