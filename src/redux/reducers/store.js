import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./Authreducer";
import { CourseReducers } from "./CourseReducers";
const{default:thunk} = require("redux-thunk")

const reducer = combineReducers({
course: CourseReducers,
user: AuthReducer

})


const initialState = {

}

const middleware = [thunk ]

const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store