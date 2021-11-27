import { createSlice } from "@reduxjs/toolkit";


const addItemSlice = createSlice({
    name: 'addItem',
    initialState: {title : '', content: ''},
    reducers: {
        updateItem : (state, action) =>{
             
            return action.payload
        }
    }
    
})

export const {updateItem} = addItemSlice.actions
export default addItemSlice.reducer