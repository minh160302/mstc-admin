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
};

export type ArticleState = Readonly<typeof initialState>;

export default (state: ArticleState = initialState, action): ArticleState => {
  switch (action.type) {
    case REQUEST(ARTICLE.createArticle):
    case REQUEST(ARTICLE.getArticles):
      return {
        ...state,
        loading: true,
      };
    case FAILURE(ARTICLE.createArticle):
    case FAILURE(ARTICLE.getArticles):
      return {
        ...state,
        loading: true,
        errorMessage: action.payload,
      };
    case SUCCESS(ARTICLE.createArticle):
      console.log(action.payload)
      return {
        ...state,
        article: action.payload.data,
      };
    case SUCCESS(ARTICLE.getArticles):
      console.log(action.payload)
      return {
        ...state,
        articles: action.payload.data,
        page: action.payload.page,
        size: action.payload.size,
        total: action.payload.total,
      };

    default:
      return state;
  }
};
