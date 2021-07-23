import { combineReducers } from "redux";
import overview, { OverviewState } from "./overview";
import authentication, { AuthenticationState } from "./authentication";
import article, { ArticleState } from "./article";
import emails, { EmailsState } from "./emails";

export interface IRootState {
  readonly overview: OverviewState;
  readonly authentication: AuthenticationState;
  readonly article: ArticleState;
  readonly emails: EmailsState;
}

const rootReducers = combineReducers<IRootState>({
  overview,
  authentication,
  article,
  emails,
});

export default rootReducers;
