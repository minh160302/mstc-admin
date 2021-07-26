import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import { ARTICLE } from "../root/type";
import { SUCCESS, FAILURE } from "store/utils/async_types";
import { createArticleService, getArticleByIdService, getArticlesService, updateArticleService, deleteArticleService } from "store/service/article";
import { toast } from "react-toastify"

// saga function
function* createArticle(action) {
  try {
    const article = yield call(createArticleService, action.payload)

    if (article.status === 400) {
      toast.error(article.message)
    } else {
      yield put({
        type: SUCCESS(ARTICLE.createArticle),
        payload: article
      })
      toast.success("Created article successfully!")
    }
  } catch (error) {
    yield put({
      type: FAILURE(ARTICLE.createArticle),
      payload: "post error"
    })
    toast.error("created article failed!")
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
    // toast.error("fetch error")
    yield put({
      type: FAILURE(ARTICLE.getArticles),
      payload: "fetch error"
    })
  }
}

function* getArticleById(action) {
  try {
    const article = yield call(getArticleByIdService, action.payload)

    if (article.error === 400) {
      toast.error(article.message)
    }

    article.content = yield JSON.parse(article.content)
    console.log(article)
    yield put({
      type: SUCCESS(ARTICLE.getArticleById),
      payload: article
    })

  } catch (error) {
    yield put({
      type: FAILURE(ARTICLE.getArticleById),
      payload: "get by id error"
    })
    toast.error("Article error")
  }
}

function* updateArticle(action) {
  try {
    const article = yield call(updateArticleService, action.payload)

    if (article.status === 400) {
      toast.error(article.message)
    } else {

      yield put({
        type: SUCCESS(ARTICLE.updateArticle),
        payload: article
      })
      toast.success("Updated article successfully!")
    }
  } catch (error) {
    yield put({
      type: FAILURE(ARTICLE.updateArticle),
      payload: "put error"
    })
    toast.error("Updated article failed!")
  }
}

function* deleteArticle(action) {
  try {
    yield call(deleteArticleService, action.payload)
    toast.success("Delete article succesfully!")
    yield put({
      type: SUCCESS(ARTICLE.deleteArticle),
    })
  } catch (error) {
    yield put({
      type: FAILURE(ARTICLE.deleteArticle),
      payload: "delete by id error"
    })
    toast.error("Delete article error")
  }
}




function* watchArticle() {
  yield takeLatest(ARTICLE.createArticle, createArticle);
  yield takeLatest(ARTICLE.getArticles, getArticles)
  yield takeLatest(ARTICLE.getArticleById, getArticleById)
  yield takeLatest(ARTICLE.updateArticle, updateArticle)
  yield takeLatest(ARTICLE.deleteArticle, deleteArticle)
}

function* ArticleWatcher() {
  yield all([watchArticle()]);
}

export default ArticleWatcher;