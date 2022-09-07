import { BASE_URL } from "../../config/api"

export const RegisterAction = (firstname, lastname, email, password, confirmpassword) => async (dispatch, getState) => {

   let data = await fetch(`${BASE_URL}/account/register`, {
        method:"POST",
        body:JSON.stringify({
            Firstname: firstname,
            Lastname: lastname,
            Email: email,
            Password: password,
            Confirmpassword: confirmpassword
        })
    })
}