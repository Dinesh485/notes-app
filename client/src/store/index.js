import { configureStore } from "@reduxjs/toolkit";
import addReducer from './addSlice'
import themeToggleReduer from './themeToggleSlice'
import toggleViewReducer from "./toggleViewSlicer";

export default  configureStore({
    reducer: {
        add: addReducer,
        darkMode: themeToggleReduer,
        gridView : toggleViewReducer
    }
})