import fetchAxios from "store/utils/fetchAxios";

export const createArticleService = async (payload) => {
  const res = await fetchAxios.onPost("/api/article", payload);
  return res;
}

export const getArticlesService = async (payload) => {
  const pageDefault = payload.page;
  const sizeDefault = payload.size;
  const res = await fetchAxios.onGet(`/api/article?page=${pageDefault}&size=${sizeDefault}`);
  return res;
}