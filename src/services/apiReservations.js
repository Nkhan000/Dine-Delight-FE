import axios from "axios";

/* eslint-disable no-unused-vars */
export async function apiSendVerificationCode() {
  const requestURL = `http://127.0.0.1:3000/api/v1/reservations/verify-user`;
  const token = localStorage.getItem("jwt");
  try {
    const response = await axios.get(requestURL, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log(response);
  } catch (err) {
    console.log("Error sending code for verification", err);
  }
}

export async function apiVerifyReservationCode(code) {
  const requestURL = `http://127.0.0.1:3000/api/v1/reservations/verify-user`;
  const token = localStorage.getItem("jwt");

  try {
    const response = await axios.post(
      requestURL,
      {
        OPTCode: code,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    return err.data;
  }
}
