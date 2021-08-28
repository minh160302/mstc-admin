import fetchAxios from "store/utils/fetchAxios";

export const createEmailServices = async (payload) => {
  const res = await fetchAxios.onPost("/api/emails", payload);
  return res;
}

export const updateEmailService = async (payload) => {
  const res = await fetchAxios.onPut("/api/emails", payload);
  return res;
}

export const getEmailsService = async (payload) => {
  const pageDefault = payload.page;
  const sizeDefault = payload.size;
  const res = await fetchAxios.onGet(`/api/emails?page=${pageDefault}&size=${sizeDefault}`);
  return res;
}

export const getEmailByIdService = async (payload) => {
  const res = await fetchAxios.onGet(`/api/emails/${payload}`);
  return res;
}

export const deleteEmailService = async (payload) => {
  const res = await fetchAxios.onDelete(`/api/emails/${payload}`)
  return "res";
}

export const sendEmailService = async (payload) => {
  await fetchAxios.onPost("/api/emails/send", payload)
}