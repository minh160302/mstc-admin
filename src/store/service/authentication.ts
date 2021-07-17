import fetchAxios from "../utils/fetchAxios";
import { SERVICE_CONFIG } from "../../utils/service-config";


export const verifyJwtToken = async () => {
  const token = localStorage.getItem("AUTH_TOKEN_KEY")
  if (token) {
    const res = await fetchAxios.onGet(`/api/auth/verify/${token}`, {
      baseURL: SERVICE_CONFIG.HEROKU_AUTH
    })
    return res
  }
}

export const registerService = async (payload) => {
  const res = await fetchAxios.onPost(`/api/auth/register`, payload, {
    baseURL: SERVICE_CONFIG.HEROKU_AUTH
  });
  return res;
};

export const loginService = async (payload) => {
  const res = await fetchAxios.onPost(`/api/auth/login`, payload, {
    baseURL: SERVICE_CONFIG.HEROKU_AUTH
  });
  return res;
};

export const storeAuthToken = async (token) => {
  if (token) {
    const jwt = token;
    localStorage.setItem("AUTH_TOKEN_KEY", jwt);
    return {
      success: true,
      accessToken: jwt
    }
  }
};

export const getCurrentUserInfoService = async (token) => {
  if (token) {
    const res = await fetchAxios.onGet(`/api/auth/user/${token}`, {
      baseURL: SERVICE_CONFIG.HEROKU_AUTH
    })
    return res
  }
}