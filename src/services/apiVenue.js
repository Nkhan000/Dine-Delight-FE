import axios from "axios";

export async function apiCreateANewVenueBooking(data) {
  const requestUrl = `http://127.0.0.1:3000/api/v1/venue/`;

  try {
    const response = await axios.post(requestUrl, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
    });
    console.log(await response.data);
  } catch (err) {
    console.log(err);
  }
}

export async function apiGetABookedVenueData() {
  const requestUrl = `http://127.0.0.1:3000/api/v1/venue/`;

  try {
    const response = await axios.get(requestUrl, {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
    });
    console.log(await response.bookedVenue);
    return await response.data.bookedVenue;
  } catch (err) {
    console.log(err);
  }
}
