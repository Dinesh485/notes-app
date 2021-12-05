import { createSlice } from "@reduxjs/toolkit";

const setAuth =() =>{
    if(localStorage.getItem('token')){
        return true
    }else{
       return false
    }
}

const isAuthSlice = createSlice({
    name: 'isAuth',
    initialState: setAuth(),
    reducers:  {
        login: (state, action) =>{
            localStorage.setItem('token', action.payload)
            return  true
        },
        logout: (state) =>{
            localStorage.removeItem('token')
            return false
        }
        
    }
})


export const {login, logout} = isAuthSlice.actions;
export default isAuthSlice.reducer