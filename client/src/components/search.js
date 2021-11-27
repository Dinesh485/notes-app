
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateSearchStr } from "../store/searchSlice";
import FilterMenu from "./filterMenu";

const Search = () => {
    const searchStr = useSelector(state => state.searchString)
    const dispatch = useDispatch()
    return ( 
        <div className='flex items-center flex-row'>
        <input onChange = {(e) => dispatch(updateSearchStr(e.target.value))} value = {searchStr} type="text" className='transition-colors duration-300 dark:bg-black bg-[#F8F8F8] rounded-[20px] px-[20px] box-border block outline-none border-2 border-solid border-transparent dark:focus:border-white dark:text-white text-black mr-3 w-[200px]  h-[35px] md:w-[280px]  md:h-[40px] xl:h-[50px] xl:mr-5 xl:w-[350px] xl:text-lg ' placeholder='Search' />
      
        </div>
     );
}
 
export default Search;

