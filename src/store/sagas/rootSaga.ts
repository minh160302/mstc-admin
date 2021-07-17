import {
  all,
  fork,
} from "redux-saga/effects";

import OverviewWatcher from "./overview";
import AuthenticationWatcher from './authentication';
import ArticleWatcher from "./article";

export default function* rootSaga() {
  yield all([
    fork(OverviewWatcher),
    fork(AuthenticationWatcher),
    fork(ArticleWatcher)
  ]);
}
