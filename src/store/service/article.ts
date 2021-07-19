import fetchAxios from "store/utils/fetchAxios";

export const createArticleService = async (payload) => {
  const res = await fetchAxios.onPost("/api/article", payload);
  return res;
}

export const updateArticleService = async (payload) => {
  const res = await fetchAxios.onPut("/api/article", payload);
  return res;
}

export const getArticlesService = async (payload) => {
  const pageDefault = payload.page;
  const sizeDefault = payload.size;
  const res = await fetchAxios.onGet(`/api/article?page=${pageDefault}&size=${sizeDefault}`);
  return res;
}

export const getArticleByIdService = async (payload) => {
  const res = await fetchAxios.onGet(`/api/article/${payload}`);
  return res;
}

export const deleteArticleService = async (payload) => {
  const res = await fetchAxios.onDelete(`/api/article/${payload}`)
}