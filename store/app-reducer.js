import {TYPES} from './types'

function Reducer (state, action) {
    switch(action.type){
        case TYPES.SET_USER: {
            return {
                ...state,
                user: action.payload
            }
        }
        default:
            return state
    }
}

export default Reducer