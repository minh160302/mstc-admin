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

export const updateArticle = (request: any) => {
  return {
    type: ARTICLE.updateArticle,
    payload: request,
  };
}

export const getArticleById = (id: string) => {
  return {
    type: ARTICLE.getArticleById,
    payload: id,
  }
}

export const deleteArticle = (id: string) => {
  return {
    type: ARTICLE.deleteArticle,
    payload: id,
  }
}

export const cleanUpArticle = () => {
  return {
    type: ARTICLE.cleanUpArticle,
  }
}
