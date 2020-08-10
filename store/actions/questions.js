import { QUESTION_TYPES } from "../types";
import {getUserScores, getCategoryQuizes, createQuiz, getTeacherQuizes, setScore} from "../../utils/api"

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

export const setTeacherQuizes = (quizArray) => ({
  type: QUESTION_TYPES.SET_TEACHER_QUIZES,
  payload: quizArray
})

export const setScores = (scoresArray) => ({
  type: QUESTION_TYPES.SET_SCORES,
  payload: scoresArray
})

export const fetchQuizes = (subjectId) => {
  return async (dispatch) => {
    dispatch(setLoading(true))
    const response = await getCategoryQuizes(subjectId);
    const data = response.data
    dispatch(setQuizes(data))
    dispatch(setLoading(false))
    console.log('data', data)
  };
};

export const setQuiz = (data) => {
  console.log('question data', data)
  return async (dispatch) => {
    dispatch(setLoading(true))
    console.log('quizy', data)
    const response = await createQuiz(data);
    console.log('quiz response', response)
    dispatch(setLoading(false))
  };
};


export const fetchTeacherQuizes = (teacherCode) => {
  return async (dispatch) => {
    dispatch(setLoading(true))
    const response = await getTeacherQuizes(teacherCode)
    dispatch(setTeacherQuizes(response.data))

    dispatch(setLoading(false))
  };
}

export const setUserScore = (studentCode, testId, subject, score, total, duration) => {
  return async (dispatch) => {
    dispatch(setLoading(true))
    const response = await setScore(studentCode, testId, subject, score, total, duration)
    console.log('score', response)
    
    dispatch(setLoading(false))
  }
}

export const fecthUserScores =(studentCode) => {
  return async (dispatch) => {
    dispatch(setLoading(true))
    const response = await getUserScores(studentCode)
    console.log('scores data', response.data)
    dispatch(setScores(response.data))
    dispatch(setLoading(false))
  }
}
