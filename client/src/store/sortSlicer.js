import { createSlice } from "@reduxjs/toolkit"


const sortSlicer = createSlice({
    name: 'sortBy',
    initialState: 'date',
    reducers: {
      sortByDate : (state) =>{
         return 'date'
      },
      sortByLength: (state) =>{
          return 'length'
      }
    }

})

export const {sortByDate , sortByLength} = sortSlicer.actions
export default sortSlicer.reducer