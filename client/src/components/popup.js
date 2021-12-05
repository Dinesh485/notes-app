import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { close } from "../store/addSlice";
import { closePopUp } from "../store/popupSlice";

const PopUp = ({msg}) => {
    const dispatch = useDispatch()

    
     
    
    return ( 

        <motion.div  className = 'w-full h-full absolute top-0 left-0 flex items-center justify-center  '>
            <motion.div initial = {{scale : 0.3, opacity: 0}}  animate = {{scale: 1, opacity : 1}} exit ={{scale : 0, opacity: 0}} className = 'bg-white dark:bg-black w-10/12 max-w-[400px] p-6 rounded-lg shadow-xl border-black dark:border-white border-4 border-solid flex flex-col justify-between 2xl:max-w-[600px] 2xl:min-h-[300px] '>
                 <p className = 'font-medium mb-10 lg:text-lg 2xl:text-xl 2xl:m-5 dark:text-white'>{msg}</p>
                 <div className = 'flex justify-end items-center'>
                     <button onClick = {() =>{ dispatch(closePopUp())}} class = 'p-1 rounded font-medium shadow mr-4 bg-black text-white dark:text-black dark:bg-white min-w-[60px] text-sm lg:text-base lg:p-2 2xl:text-lg 2xl:px-4'>ok</button>
                     <button onClick = {() =>{ dispatch(closePopUp()); dispatch(close())}} class = 'p-1 rounded font-medium shadow bg-gray-500/50 text-black dark:text-white min-w-[60px] text-sm lg:text-base lg:p-2 2xl:text-lg 2xl:px-4' >discard</button>
                 </div>
            </motion.div>
        </motion.div>
     );
}
 
export default PopUp;