/* eslint-disable no-unused-vars */
import axios from "axios";
import { useNavigate } from "react-router-dom";

export async function apiSignup(signUpData) {
  const signupUrl = `http://127.0.0.1:3000/api/v1/user/signup`;
  try {
    const response = await axios.post(signupUrl, signUpData, {
      withCredentials: true,
    });
    localStorage.setItem("jwt", response.data.token);

    // const expirationTime = 60 * 60 * 1000 * 24 * 7; // 7 days
    const expirationTime = 1000 * 60 * 60; // 1 hour
    setTimeout(() => {
      localStorage.removeItem("jwt");
    }, expirationTime);
    return response.data;
  } catch (err) {
    // throw new Error(err);
    console.log(err);
  }
}

export async function apiLogin(loginData) {
  const loginUrl = `http://127.0.0.1:3000/api/v1/user/login`;
  try {
    const response = await axios.post(loginUrl, loginData, {
      withCredentials: true,
    });

    return response.data.token;
  } catch (err) {
    console.log(err);
  }
}

export async function apiGetCurrUserDataFromJWT() {
  const requestUrl = `http://127.0.0.1:3000/api/v1/user/get-user-data`;

  try {
    const response = await axios.get(requestUrl, {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
    });
    return await response.data.data;
  } catch (err) {
    console.log("Error getting user from token", err);
  }
}

export async function apiOAuth() {
  const apiUrl = `http://127.0.0.1:3000/api/v1/auth/google`;
  try {
    const response = await axios.post(apiUrl);
    // const data = await response.json();
    console.log(response);
    // window.location = data.url;
  } catch (err) {
    console.log(err);
  }
}
// export async function apiGetCurrentUser(token) {
//   if (!token) return null;
//   const getUrl = `http://127.0.0.1:3000/api/v1/user/get-user-data/${token}`;
//   try {
//     const response = await axios.get(getUrl);
//     return response.data.data;
//   } catch (err) {
//     console.log(err);
//   }
// }
