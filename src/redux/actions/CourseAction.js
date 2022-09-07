import { GET_PRODUCT, GET_SLIDER } from "../constants/CourseConstants"
import {BASE_URL} from "../../config/api";

export const  GetSliderAction = () =>async  (dispatch,getState) =>{
    let slider  = await ( await fetch(`${BASE_URL}course/getall`)).json()

    dispatch ({
        type: GET_SLIDER,
        payload: slider
    })

}

export const GetProductAction = () => async (dispatch, getState) => {
    let product = await (await fetch (`${BASE_URL}course/getall`)).json()
    
dispatch({
    type:GET_PRODUCT,
    payload: product
})
}

