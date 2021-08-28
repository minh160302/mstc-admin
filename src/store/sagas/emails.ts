import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import { EMAIL } from "../root/type";
import { SUCCESS, FAILURE, REQUEST } from "store/utils/async_types";
import {
  createEmailServices,
  getEmailsService,
  getEmailByIdService,
  deleteEmailService,
  updateEmailService,
  sendEmailService
} from "store/service/emails";
import { toast } from "react-toastify";

// saga function
function* createEmail(action) {
  try {
    const email = yield call(createEmailServices, action.payload);
    if (email.status === 400) {
      toast.error(email.message)
    } else {
      yield put({
        type: SUCCESS(EMAIL.createEmail),
        payload: email
      });

      toast.success("Email added to the list!")
    }
  } catch (error) {
    yield put({
      type: FAILURE(EMAIL.createEmail),
      payload: error,
    });
    toast.error("Email added failed!")
  }
}

function* getEmails(action) {
  try {
    const res = yield call(getEmailsService, action.payload);
    yield put({
      type: SUCCESS(EMAIL.getEmails),
      payload: res
    });
  } catch (error) {
    yield put({
      type: FAILURE(EMAIL.getEmails),
      payload: error,
    });
  }
}

function* getEmailById(action) {
  try {
    const email = yield call(getEmailByIdService, action.payload)
    yield put({
      type: SUCCESS(EMAIL.getEmailById),
      payload: email
    });
  } catch (error) {
    yield put({
      type: FAILURE(EMAIL.getEmailById),
      payload: error,
    });
    toast.error("Email not exists")
  }
}

function* updateEmail(action) {
  try {
    const email = yield call(updateEmailService, action.payload);
    yield put({
      type: SUCCESS(EMAIL.updateEmail),
      payload: email
    });

    toast.success("Email updated successfully!")
  } catch (error) {
    yield put({
      type: FAILURE(EMAIL.updateEmail),
      payload: error,
    });
    toast.error("Email updated failed!")
  }
}

function* deleteEmail(action) {
  try {
    const result = yield call(deleteEmailService, action.payload);
    if (result) {
      yield put({
        type: SUCCESS(EMAIL.deleteEmail),
        payload: result
      });
      toast.success("Email deleted successfully!")
    }
  } catch (error) {
    yield put({
      type: FAILURE(EMAIL.deleteEmail),
      payload: error,
    });
    toast.error("Email deleted failed!")
  }
}

function* sendEmail(action) {
  try {
    yield call(sendEmailService, action.payload);
    yield put({
      type: SUCCESS(EMAIL.sendEmail),
    });
    toast.success("Email send to users successfully!")
  } catch (error) {
    yield put({
      type: FAILURE(EMAIL.sendEmail),
      payload: error,
    });
    toast.error("Sending email failed!")
  }
}

export function* watchEmails() {
  yield takeLatest(EMAIL.createEmail, createEmail);
  yield takeLatest(EMAIL.getEmails, getEmails);
  yield takeLatest(EMAIL.getEmailById, getEmailById);
  yield takeLatest(EMAIL.updateEmail, updateEmail);
  yield takeEvery(EMAIL.deleteEmail, deleteEmail);
  yield takeLatest(REQUEST(EMAIL.sendEmail), sendEmail)
}

function* EmailWatcher() {
  yield all([watchEmails()]);
}

export default EmailWatcher;
