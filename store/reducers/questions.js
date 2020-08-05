import {QUESTION_TYPES} from '../types'

const INITIAL_STATE = {
    questions: [],
    loading: false
}

function questionsReducer (state = INITIAL_STATE, action) {
    switch(action.type){
        case QUESTION_TYPES.SET_LOADING: {
            console.log('payload',action.payload)
            return {
                ...state,
                loading: action.payload
            }
        }
        case QUESTION_TYPES.SET_QUESTIONS: {
            console.log('questions payload', action.payload)
            return {
                ...state,
                questions: action.payload
            }
        }
        default:
            return state
    }
}

export default questionsReducer