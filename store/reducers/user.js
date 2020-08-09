import {USER_TYPES} from '../types'

const INITIAL_STATE = {
    user: null,
    token: null,
    loggedIn: false,
    type: 'student'
}

function userReducer (state = INITIAL_STATE, action) {
    switch(action.type){
        case USER_TYPES.SET_USER: {
            console.log('payload',action.payload)
            return {
                ...state,
                user: action.payload
            }
        }
        default:
            return state
    }
}

export default userReducer