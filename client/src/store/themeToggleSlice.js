import { createSlice } from "@reduxjs/toolkit";


const themeToggleSlicer = createSlice({
    name: 'darkMode',
    initialState: window.matchMedia('(prefers-color-scheme : dark)').matches,
    reducers: {
        light: (state) =>{
          return false
        },
        dark : (state) =>{
            
            return true
        }

    }
})

export const {light, dark } = themeToggleSlicer.actions;
export default themeToggleSlicer.reducer