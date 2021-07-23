import { EMAIL } from "../root/type";
import { REQUEST, FAILURE, SUCCESS } from "../utils/async_types";

const initialState = {
  loading: false,
  errorMessage: null,
  emails: [],
  email: {},
  page: 0,
  size: 0,
  total: 0,
  isDeleted: false,
  sending: false,
};

export type EmailsState = Readonly<typeof initialState>;

export default (state: EmailsState = initialState, action): EmailsState => {
  switch (action.type) {
    case REQUEST(EMAIL.createEmail):
    case REQUEST(EMAIL.deleteEmail):
    case REQUEST(EMAIL.getEmailById):
    case REQUEST(EMAIL.getEmails):
    case REQUEST(EMAIL.updateEmail):
      return {
        ...state,
        loading: true,
      };
    case REQUEST(EMAIL.sendEmail):
      return {
        ...state,
        sending: true,
      }
    case FAILURE(EMAIL.createEmail):
    case FAILURE(EMAIL.deleteEmail):
    case FAILURE(EMAIL.getEmailById):
    case FAILURE(EMAIL.getEmails):
    case FAILURE(EMAIL.updateEmail):
      return {
        ...state,
        loading: true,
        errorMessage: action.payload,
      };
    case FAILURE(EMAIL.sendEmail):
      return {
        ...state,
        sending: false
      }

    case SUCCESS(EMAIL.createEmail):
      return {
        ...state,
        email: action.payload,
      };
    case SUCCESS(EMAIL.updateEmail):
      return {
        ...state,
        email: action.payload,
      };
    case SUCCESS(EMAIL.getEmails):
      return {
        ...state,
        emails: action.payload.data,
        page: action.payload.page,
        size: action.payload.size,
        total: action.payload.total,
      };
    case SUCCESS(EMAIL.getEmailById):
      return {
        ...state,
        email: action.payload.data
      }
    case SUCCESS(EMAIL.deleteEmail):
      return {
        ...state,
        isDeleted: !state.isDeleted,
      }
    case SUCCESS(EMAIL.sendEmail):
      return {
        ...state,
        sending: false,
      }

    default:
      return state;
  }
};
