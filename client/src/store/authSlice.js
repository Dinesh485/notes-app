import { createSlice } from "@reduxjs/toolkit";

const isAuthSlice = createSlice({
    name: 'isAuth',
    initialState: localStorage.getItem('token') && true,
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