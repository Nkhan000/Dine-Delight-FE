import axios from "axios";

const token = localStorage.getItem("jwt");
export async function apiGetAllFoodItems() {
  const requestUrl = `http://127.0.0.1:3000/api/v1/user/get-food-menu`;

  try {
    const response = await axios.get(requestUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.foodMenu.foodItems;
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
