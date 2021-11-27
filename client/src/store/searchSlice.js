import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'searchString',
    initialState : '',
    reducers: {
        updateSearchStr: (state, {payload}) =>{
          return payload
        }
    }
})

export const {updateSearchStr} = searchSlice.actions
export default searchSlice.reducer 