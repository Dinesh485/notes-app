import { createSlice } from "@reduxjs/toolkit";

const toBoolean = (x) =>{

        switch(x){
            case 'true':
                return true;
                
            case  'false':
                return false;
                
             default:
                 return false;
                 
        }
    
}

const themeToggleSlicer = createSlice({
    name: 'darkMode',
    initialState: toBoolean(localStorage.getItem('darkMode')) ,
    reducers: {
        light: (state) =>{
            localStorage.setItem('darkMode',false)
          return false
        },
        dark : (state) =>{
            localStorage.setItem('darkMode',true)
            return true
        }

    }
})

export const {light, dark } = themeToggleSlicer.actions;
export default themeToggleSlicer.reducer