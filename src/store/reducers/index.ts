import { combineReducers } from "redux";
import overview, { OverviewState } from "./overview";
import authentication, { AuthenticationState } from "./authentication";
import article, { ArticleState } from "./article";

export interface IRootState {
  readonly overview: OverviewState;
  readonly authentication: AuthenticationState;
  readonly article: ArticleState;
}

const rootReducers = combineReducers<IRootState>({
  overview,
  authentication,
  article
});

export default rootReducers;
