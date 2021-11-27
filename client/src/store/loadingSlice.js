import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        loading: () =>{
            return true
        },
        notLoading: () =>{
            return false
        }
    }
})

export const {loading, notLoading} = loadingSlice.actions
export default loadingSlice.reducer