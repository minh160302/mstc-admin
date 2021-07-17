import { ARTICLE } from "store/root/type";

export const getArticles = (request: any) => {
  return {
    type: ARTICLE.getArticles,
    payload: request
  };
}

export const createArticle = (request: any) => {
  return {
    type: ARTICLE.createArticle,
    payload: request,
  };
};

