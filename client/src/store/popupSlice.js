import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
    name: 'popup' ,
    initialState : {open: false, msg: ''},
     reducers: {
         openPopUp: (state, {payload})=>{
            return {open: true, msg:payload}
         },
         closePopUp: (state) =>{
             return {open: false, msg: ''}
         }
     }
})

export const {openPopUp, closePopUp} = popupSlice.actions
 const popupReducer  = popupSlice.reducer
 export default popupReducer