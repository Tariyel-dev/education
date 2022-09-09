import { LOGIN } from "../constants/AuthConstanrts";

export const AuthReducer = (state = {user:[]},action) => {

    switch (action.type) {
        case LOGIN:
            
           return {
            ...state,
            user: action.payload
           }

        default:
            return state;
    }

}