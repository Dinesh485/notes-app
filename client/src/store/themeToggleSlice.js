import { createSlice } from "@reduxjs/toolkit";

const toBoolean = (x) =>{
     if(x ==='true'){
         return true
     }
     if(x ==='false'){
         return false
     }
}

const themeToggleSlicer = createSlice({
    name: 'darkMode',
    initialState:toBoolean(localStorage.getItem('darkMode')),
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