import { BASE_URL } from "../../config/api"
import { LOGIN } from "../constants/AuthConstanrts"

export const RegisterAction = (firstname, lastname, email, password, confirmpassword) => async (dispatch, getState) => {

   let data = await fetch(`${BASE_URL}/account/register`, {
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            Firstname: firstname,
            Lastname: lastname,
            Email: email,
            Password: password,
            Confirmpassword: confirmpassword
        })
    })
}

export const  LoginAction  = (email,password) => async (dispatch, getState) => {
let data  = await fetch(`${BASE_URL}account/login`, {
    method:"POST",
    headers: {
        'Content-Type': 'application/json',
    },
    body:JSON.stringify({
       Email: email,
       Password: password

    })
}).then(x=> x.json())

dispatch({
    type: LOGIN,
    payload: data

})
}