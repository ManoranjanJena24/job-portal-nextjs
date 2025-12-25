import axios from "axios"
import { btnLoadingStart, getUserFail, getUserSuccess, loadingStart, loginFail, loginSuccess, registerFail, registerSuccess } from "../reducer/userReducer"
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


export const loginUser = (email , password) => async (dispatch) => {
  try {
    dispatch(btnLoadingStart());

    const { data } = await axios.post("/api/user/login", {email , password});
    Cookies.set("token", data.token, { expires: 5, secure: true, path: "/" });

    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFail(error.response.data.message));
  }
};


export const getUser = ()=>async(dispatch)=>{
    try {
        dispatch(loadingStart())
        const {data} = await axios.get("/api/user/myprofile?token=" + Cookies.get("token"))
        dispatch(getUserSuccess(data))
        
    } catch (error) {
           dispatch(getUserFail(error.response.data.message));
  
    }
}