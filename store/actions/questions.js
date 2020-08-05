import {QUESTION_TYPES} from "../types"

export const setLoading = isLoading => ({
    type: QUESTION_TYPES.SET_LOADING,
    payload: isLoading
})

export const setQuestions = questionsArray => ({
    type: QUESTION_TYPES.SET_QUESTIONS,
    payload: questionsArray
})