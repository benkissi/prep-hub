import {USER_TYPES} from "../types"

export const setUser = user => ({
    type: USER_TYPES.SET_USER,
    payload: user
})