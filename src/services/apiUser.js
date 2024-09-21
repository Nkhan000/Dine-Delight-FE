import axios from "axios";

export async function apiGetAllOrders() {
  const token = localStorage.getItem("jwt");
  const requestUrl = `http://127.0.0.1:3000/api/v1/user/get-all-orders`;

  try {
    const response = await axios.get(requestUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
