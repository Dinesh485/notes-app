import { createSlice } from "@reduxjs/toolkit";


export const addSlicer = createSlice({
    initialState: {isOpen : false, item : ''},
    name: 'add',
    reducers:{
        openEmpty: (state) =>{
           return {isOpen: true, item: ''}
        },
        close: (state) =>{
            return {isOpen: false, item: ''}
        },
        openItem: (state,{ payload})  =>{
            
            return {isOpen: true, item : payload}
        }
       
    }
})

export const {openEmpty, close, openItem } = addSlicer.actions;

export default addSlicer.reducer