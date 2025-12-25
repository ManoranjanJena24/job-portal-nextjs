import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user: null,
    userProfile: null,
    isAuth: true,
    savedJobs:null,
    loading:false,
    btnLoading:false,
    error:null,
    message:null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadingStart: (state) => {
      state.loading = true;
    },
    btnLoadingStart: (state) => {
      state.btnLoading = true;
    },
    registerSuccess: (state, action) => {
      state.btnLoading = false;
      state.user = action.payload.user;
      state.isAuth = true;
      state.message = action.payload.message;
    },
    registerFail: (state, action) => {
      state.btnLoading = false;
      state.user = null;
      state.isAuth = false;
      state.error = action.payload;
    },
    loginSuccess: (state , action)=>{
      state.btnLoading = false;
      state.user = action.payload.user;
      state.isAuth = true;
      state.message = action.payload.message;
    },
    getUserSuccess:(state , action)=>{
      state.loading = false;
      state.user = action.payload;
      state.isAuth = true
    },
    getUserFail:(state)=>{
      state.isAuth = false
      state.loading = false
    }
    
    ,
     loginFail: (state, action) => {
      state.btnLoading = false;
      state.user = null;
      state.isAuth = false;
      state.error = action.payload;
    },

    logoutSuccess:(state )=>{
      state.user = null;
      state.isAuth = false;
      state.message ="Logged Out"
    },
    clearMessage:(state)=>{
        state.message = null;
    },
    clearError:(state)=>{
        state.error = null 
    }
  },
});


export const {loadingStart , btnLoadingStart ,registerFail ,registerSuccess,loginFail, loginSuccess,getUserFail,getUserSuccess,logoutSuccess,clearError ,clearMessage} = userSlice.actions

export default userSlice.reducer

