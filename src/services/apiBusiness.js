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
