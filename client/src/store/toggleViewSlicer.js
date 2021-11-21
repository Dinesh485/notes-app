import { createSlice } from "@reduxjs/toolkit";

const toggleViewSlicer = createSlice({
    name: 'gridView',
    initialState:
        window.matchMedia('(min-width: 1024px)').matches ?
            true
            :
            false
    ,
    reducers: {
        gridView: (state) => {
            return true
        },
        listView: (state) => {
            return false
        }
    }

})

export const { gridView, listView } = toggleViewSlicer.actions;
export default toggleViewSlicer.reducer