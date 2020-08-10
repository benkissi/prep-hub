import { QUESTION_TYPES } from "../types";
import {
  getUserScores,
  getCategoryQuizes,
  createQuiz,
  getTeacherQuizes,
  setScore,
} from "../../utils/api";

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
  payload: quizesArray,
});

export const setTeacherQuizes = (quizArray) => ({
  type: QUESTION_TYPES.SET_TEACHER_QUIZES,
  payload: quizArray,
});

export const setScores = (scoresArray) => ({
  type: QUESTION_TYPES.SET_SCORES,
  payload: scoresArray,
});

export const setError = (message) => ({
  type: QUESTION_TYPES.SET_ERROR,
  payload: message,
});

export const fetchQuizes = (subjectId) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await getCategoryQuizes(subjectId);
      const data = response.data;
      dispatch(setQuizes(data));
      dispatch(setLoading(false));
      console.log("data", data);
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(error.message));
    }
  };
};

export const setQuiz = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      console.log("quizy", data);
      const response = await createQuiz(data);
      console.log("quiz response", response);
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(error.message));
    }
  };
};

export const fetchTeacherQuizes = (teacherCode) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await getTeacherQuizes(teacherCode);
      dispatch(setTeacherQuizes(response.data));

      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(error.message));
    }
  };
};

export const setUserScore = (
  studentCode,
  testId,
  subject,
  score,
  total,
  duration
) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await setScore(studentCode, testId, subject, score, total, duration);
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(error.message));
    }
  };
};

export const fecthUserScores = (testId, role) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await getUserScores(testId, role);
      console.log("scores data", response.data);
      dispatch(setScores(response.data));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(error.message));
    }
  };
};
