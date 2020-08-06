import { QUESTION_TYPES } from "../types";

const INITIAL_STATE = {
  questions: [],
  loading: false,
  scores: [],
  bookmarks: [],
};

function questionsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case QUESTION_TYPES.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case QUESTION_TYPES.SET_QUESTIONS: {
      return {
        ...state,
        questions: action.payload,
      };
    }
    case QUESTION_TYPES.SET_SUBJECT_SCORE: {
      return {
        ...state,
        scores: [action.payload, ...state.scores],
      };
    }
    case QUESTION_TYPES.BOOKMARK: {
      const exist = state.bookmarks.find(
        (item) => item.question === action.payload.question
      );
      if (exist) {
        return state
      }
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };
    }
    default:
      return state;
  }
}

export default questionsReducer;
