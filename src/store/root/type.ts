export const AUTH = {
  sendRegisterInfo: "auth/SEND_REGISTER_INFO",
  verifyAuthToken: "auth/VERIFY_AUTH_TOKEN",
  reloadWithToken: "auth/RELOAD_WITH_TOKEN",
  getCurrentUserInfo: "auth/GET_CURRENT_USER_INFO",
  logOut: "auth/LOG_OUT",
}


export const OVERVIEW = {
  getOverview: "overview/GET_OVERVIEW"
}


export const ARTICLE = {
  createArticle: "article/CREATE_ARTICLE",
  updateArticle: "article/UPDATE_ARTICLE",
  getArticles: "article/GET_ARTICLES",
  getArticleById: "article/GET_ARTICLE_BY_ID",
  deleteArticle: "article/DELETE_ARTICLE",
  cleanUpArticle: "article/CLEAN_UP_ARTICLE"
}


export const EMAIL = {
  createEmail: "email/CREATE_EMAIL",
  getEmails: "email/GET_EMAILS",
  updateEmail: "email/UPDATE_EMAIL",
  getEmailById: "email/GET_EMAIL_BY_ID",
  deleteEmail: "email/DELETE_EMAIL",
  sendEmail: "email/SEND_EMAIL"
}