import { createSlice } from "@reduxjs/toolkit";


const listSlice = createSlice({
    name: 'list',
    initialState: [],
    reducers: {
        updateList: (state, {payload}) =>{

          return payload
        }
    }
})


export const {updateList} = listSlice.actions

export default listSlice.reducer