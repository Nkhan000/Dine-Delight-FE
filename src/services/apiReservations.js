import axios from "axios";

const token = localStorage.getItem("jwt");

/* eslint-disable no-unused-vars */
export async function apiSendVerificationCode() {
  const requestURL = `http://127.0.0.1:3000/api/v1/reservations/verify-user`;
  // const token = localStorage.getItem("jwt");
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
  // const token = localStorage.getItem("jwt");
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

export async function apiCreateReservation(reservationObj) {
  const requestUrl = `http://127.0.0.1:3000/api/v1/reservations/create-new-reservation`;
  // const token = localStorage.getItem("jwt");
  try {
    const response = await axios.post(requestUrl, reservationObj, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getAllReservationOfUser() {
  const requestURL = `http://127.0.0.1:3000/api/v1/reservations/all-reservations`;

  try {
    const response = await axios.get(requestURL, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data.allReservations;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

// ------------------ BUSINESS-END API ----------------------- //

export async function apiAddNewPartySize(data) {
  const requestURL = `http://127.0.0.1:3000/api/v1/reservations/add-party-size`;
  try {
    const response = await axios.post(requestURL, data, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log(response.data);
    // return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function apiAddTableType(data) {
  const requestURL = `http://127.0.0.1:3000/api/v1/reservations/add-table-type`;
  try {
    const response = await axios.post(requestURL, data, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log(response.data);
    // return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
export async function apiAddTimeSlot(data) {
  const requestURL = `http://127.0.0.1:3000/api/v1/reservations/add-time-slot`;
  try {
    const response = await axios.post(requestURL, data, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log(response.data);
    // return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
