import { ARTICLE } from "../root/type";
import { REQUEST, FAILURE, SUCCESS } from "../utils/async_types";

const initialState = {
  loading: false,
  errorMessage: null,
  article: {},
  articles: [],
  page: 0,
  size: 0,
  total: 0,
  isDeleted: false
};

export type ArticleState = Readonly<typeof initialState>;

export default (state: ArticleState = initialState, action): ArticleState => {
  switch (action.type) {
    case REQUEST(ARTICLE.createArticle):
    case REQUEST(ARTICLE.getArticles):
    case REQUEST(ARTICLE.getArticleById):
    case REQUEST(ARTICLE.updateArticle):
    case REQUEST(ARTICLE.deleteArticle):
      return {
        ...state,
        loading: true,
      };
    case FAILURE(ARTICLE.createArticle):
    case FAILURE(ARTICLE.getArticles):
    case FAILURE(ARTICLE.getArticleById):
    case FAILURE(ARTICLE.updateArticle):
    case FAILURE(ARTICLE.deleteArticle):
      return {
        ...state,
        loading: true,
        errorMessage: action.payload,
      };
    case SUCCESS(ARTICLE.createArticle):
      return {
        ...state,
        article: action.payload.data,
      };
    case SUCCESS(ARTICLE.updateArticle):
      return {
        ...state,
        article: action.payload.data,
      };
    case SUCCESS(ARTICLE.getArticles):
      return {
        ...state,
        articles: action.payload.data,
        page: action.payload.page,
        size: action.payload.size,
        total: action.payload.total,
      };
    case SUCCESS(ARTICLE.getArticleById):
      return {
        ...state,
        article: action.payload
      };
    case SUCCESS(ARTICLE.deleteArticle):
      return {
        ...state,
        isDeleted: !state.isDeleted
      }
    case (ARTICLE.cleanUpArticle):
      return {
        ...state,
        article: {}
      }

    default:
      return state;
  }
};
