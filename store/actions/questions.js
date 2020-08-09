import { QUESTION_TYPES } from "../types";
import {getQuizes} from "../../utils/api"

export const setLoading = (isLoading) => ({
  type: QUESTION_TYPES.SET_LOADING,
  payload: isLoading,
});

export const setQuestions = (questionsArray) => ({
  type: QUESTION_TYPES.SET_QUESTIONS,
  payload: questionsArray,
});

export const setSubjectScore = (subject, score, total, duration) => ({
  type: QUESTION_TYPES.SET_SUBJECT_SCORE,
  payload: {
    subject,
    score,
    total,
    duration,
    date: new Date(),
  },
});

export const skipQuestion = (question) => ({
  type: QUESTION_TYPES.SKIP,
  payload: question,
});

export const resetSkip = () => ({
  type: QUESTION_TYPES.RESET_SKIP,
});

export const setQuizes = (quizesArray) => ({
    type: QUESTION_TYPES.SET_QUIZES,
    payload: quizesArray
})

export const fetchQuizes = () => {
  return async (dispatch) => {
    dispatch(setLoading(true))
    const response = await getQuizes();
    const data = response.data
    dispatch(setQuizes(data))
    dispatch(setLoading(false))
    console.log('data', data)
  };
};
