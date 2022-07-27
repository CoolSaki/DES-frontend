import axios from "axios";
import { REQUEST_API_URL } from "../../config/constant";

export const registerAPI = async (params: any) =>
  axios.post(`${REQUEST_API_URL}/register`, params);

export const loginAPI = async (params: any) =>
  axios.post(`${REQUEST_API_URL}/login`, params);
