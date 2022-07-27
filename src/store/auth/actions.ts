import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerAPI, loginAPI } from "../api/auth";

export const loginUser = createAsyncThunk("auth/login", async (data: any) => {
  try {
    const response = await loginAPI(data);
    return response.data;
  } catch (error: any) {
    return console.log(error);
  }
});

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: any) => {
    try {
      const response = await registerAPI(data);
      return response.data;
    } catch (error: any) {
      return console.log("response error", error);
    }
  }
);

export const logoutUser = async () => {
  localStorage.removeItem("userInfo");
  document.location.href = '/';
  return true;
};
