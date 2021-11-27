import { configureStore } from "@reduxjs/toolkit";
import addReducer from './addSlice'
import loadingReducer from "./loadingSlice";
import themeToggleReduer from './themeToggleSlice'
import toggleViewReducer from "./toggleViewSlicer";
import isAuthReducer from './authSlice'
import addItemReducer from "./addItemSlicer";
import listReducer from "./listSlicer";
import searchReducer from "./searchSlice";


export default  configureStore({
    reducer: {
        add: addReducer,
        darkMode: themeToggleReduer,
        gridView : toggleViewReducer,
        loading: loadingReducer,
        isAuth: isAuthReducer,
        addItem: addItemReducer,
        list: listReducer,
        searchString: searchReducer
    }
})