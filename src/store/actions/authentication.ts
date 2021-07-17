import { AUTH } from "store/root/type";

export const sendRegisterInfo = (request: object) => {
  return {
    type: AUTH.sendRegisterInfo,
    payload: request,
  };
};

export const verifyJwtToken = () => {
  return {
    type: AUTH.verifyAuthToken,
  };
};

export const reloadWithToken = () => {
  return {
    type: AUTH.reloadWithToken,
  };
};

export const getCurrentUserInfo = () => {
  return {
    type: AUTH.getCurrentUserInfo,
  }
}

export const logOut = () => {
  return {
    type: AUTH.logOut,
  }
}