/** @format */

import axios from "axios";
import { REQUEST_API_URL } from "../../config/constant";
import qs from "qs";

export const registerAPI = async (params: any) =>
  axios.post(`${REQUEST_API_URL}/register`, qs.stringify(params), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

export const loginAPI = async (params: any) =>
  axios.post(`${REQUEST_API_URL}/login`, qs.stringify(params), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
