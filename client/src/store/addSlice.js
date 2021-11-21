import { createSlice } from "@reduxjs/toolkit";


export const addSlicer = createSlice({
    initialState: {isOpen : false},
    name: 'add',
    reducers:{
        openEmpty: (state) =>{
           state.isOpen = true
        },
        close: (state) =>{
            state.isOpen = false
        }
       
    }
})

export const {openEmpty, close } = addSlicer.actions;

export default addSlicer.reducer