import { QUESTION_TYPES } from "../types";

const INITIAL_STATE = {
  questions: [],
  loading: false,
  scores: [],
  skip: [],
  quizes: []
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
    case QUESTION_TYPES.SKIP: {
      const exist = state.skip.find(
        (item) => item.question === action.payload.question
      );
      if (exist) {
        return state
      }
      return {
        ...state,
        skip: [...state.skip, action.payload],
      };
    }
    case QUESTION_TYPES.RESET_SKIP: {
      return {
        ...state,
        skip: []
      }
    }
    case QUESTION_TYPES.SET_QUIZES: {
      return {
        ...state,
        quizes: action.payload
      }
    }
    default:
      return state;
  }
}

export default questionsReducer;
