import { GET_PRODUCT, GET_SLIDER } from "../constants/CourseConstants";

export const CourseReducers =  (state = {course:[]}, action) => {
    switch (action.type) {
        case GET_SLIDER:
            return {
                ...state,
                course: action.payload
            }
            case GET_PRODUCT:
            return {
                ...state,
                course: action.payload
            }
            default:
                return state
    }

}

