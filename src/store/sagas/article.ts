import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import { ARTICLE } from "../root/type";
import { SUCCESS, FAILURE } from "store/utils/async_types";
import { createArticleService, getArticlesService } from "store/service/article";


// saga function
function* createArticle(action) {
  try {
    const article = yield call(createArticleService, action.payload)
    yield put({
      type: SUCCESS(ARTICLE.createArticle),
      payload: article
    })
  } catch (error) {
    yield put({
      type: FAILURE(ARTICLE.createArticle),
      payload: "post error"
    })
  }
}

function* getArticles(action) {
  try {
    const articles = yield call(getArticlesService, action.payload)
    yield put({
      type: SUCCESS(ARTICLE.getArticles),
      payload: articles
    })
  } catch (error) {
    yield put({
      type: FAILURE(ARTICLE.getArticles),
      payload: "fetch error"
    })
  }
}

function* watchArticle() {
  yield takeLatest(ARTICLE.createArticle, createArticle);
  yield takeLatest(ARTICLE.getArticles, getArticles)
}

function* ArticleWatcher() {
  yield all([watchArticle()]);
}

export default ArticleWatcher;