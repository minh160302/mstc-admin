import { EMAIL } from "store/root/type";
import { REQUEST } from "store/utils/async_types";

export const createEmail = (request: any) => {
  return {
    type: EMAIL.createEmail,
    payload: request,
  };
};

export const getEmails = (request: any) => {
  return {
    type: EMAIL.getEmails,
    payload: request,
  }
}

export const getEmailById = (request: string) => {
  return {
    type: EMAIL.getEmailById,
    payload: request,
  }
}

export const updateEmail = (request: any) => {
  return {
    type: EMAIL.updateEmail,
    payload: request,
  }
}

export const deleteEmail = (request: string) => {
  return {
    type: EMAIL.deleteEmail,
    payload: request,
  }
}

export const sendEmail = (request: Array<string>) => {
  return {
    type: REQUEST(EMAIL.sendEmail),
    payload: request,
  }
}