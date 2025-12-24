import axios from "axios"
import { btnLoadingStart, registerFail, registerSuccess } from "../reducer/userReducer"
import Cookies from "js-cookie"


export const registerUser = (formData) =>async(dispatch)=>{
    try {

        dispatch(btnLoadingStart())

        const {data} = await axios.post("/api/user/register", formData)
        Cookies.set("token" ,data.token , {expires: 5 , secure:true , path:"/"})

        dispatch(registerSuccess(data))

    } catch (error) {
        dispatch(registerFail(error.response.data.message))
    }
}