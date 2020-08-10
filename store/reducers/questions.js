import { State } from "react-native-gesture-handler";
import { QUESTION_TYPES } from "../types";

const INITIAL_STATE = {
  questions: [],
  loading: false,
  scores: [],
  skip: [],
  quizes: [],
  teacherQuizes: [],
  scores: [],
  error: "",
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
        return state;
      }
      return {
        ...state,
        skip: [...state.skip, action.payload],
      };
    }
    case QUESTION_TYPES.RESET_SKIP: {
      return {
        ...state,
        skip: [],
      };
    }
    case QUESTION_TYPES.SET_QUIZES: {
      return {
        ...state,
        quizes: action.payload,
      };
    }
    case QUESTION_TYPES.SET_TEACHER_QUIZES: {
      return {
        ...state,
        teacherQuizes: action.payload,
      };
    }
    case QUESTION_TYPES.SET_SCORES: {
      return {
        ...state,
        scores: action.payload,
      };
    }
    case QUESTION_TYPES.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

export default questionsReducer;
