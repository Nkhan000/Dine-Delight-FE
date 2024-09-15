import axios from "axios";

/* eslint-disable no-unused-vars */
export async function apiSendVerificationCode() {
  const requestURL = `http://127.0.0.1:3000/api/v1/reservations/verify-user`;
  const token = localStorage.getItem("jwt");
  try {
    const response = await axios.get(requestURL, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response;
  } catch (err) {
    console.log("Error sending code for verification", err);
    throw err;
  }
}

export async function apiVerifyReservationCode(code) {
  const requestURL = `http://127.0.0.1:3000/api/v1/reservations/verify-user`;
  const token = localStorage.getItem("jwt");
  const otpCode = +code.OTPCode;
  // console.log(otpCode);

  try {
    const response = await axios.post(
      requestURL,
      {
        OTPCode: otpCode,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (response.status !== 200) {
      throw new Error("Verification failed");
    }
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
