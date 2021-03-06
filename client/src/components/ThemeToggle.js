import { motion } from "framer-motion"

import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { dark, light } from "../store/themeToggleSlice"

const ThemeToggleBtn = () => {
    const darkMode = useSelector(state => state.darkMode)
    const dispatch = useDispatch()
    const handleToggle = () =>{
         
         if(darkMode){
            dispatch(light())
         }else{
             dispatch(dark())
         }
    }
    return ( 
        <div onClick = {handleToggle} className='w-full  p-1 h-auto rounded-full bg-black  relative grid grid-cols-2 cursor-pointer'>

                        <div className='text-white rounded-full  p-1 xl:p-[6px]'>
                            <svg className='block fill-current' viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 16.5C5.5 17.2323 4.94803 17.875 4.21571 17.875H1.375C0.615607 17.875 0 17.2594 0 16.5V16.5C0 15.7406 0.615608 15.125 1.375 15.125H4.21571C4.94803 15.125 5.5 15.7677 5.5 16.5V16.5V16.5ZM8.73366 8.73228C9.2511 8.21484 9.30941 7.36378 8.79197 6.84634L6.77738 4.83175C6.24048 4.29486 5.37001 4.29486 4.83312 4.83175V4.83175C4.29624 5.36864 4.29624 6.23911 4.83313 6.776L6.84772 8.79059C7.36516 9.30804 8.21621 9.24972 8.73366 8.73228V8.73228ZM24.2673 8.73338C24.7846 9.25102 25.6355 9.30871 26.153 8.79123L28.1683 6.776C28.7051 6.23911 28.7051 5.36864 28.1683 4.83175V4.83175C27.6314 4.29486 26.7609 4.29486 26.224 4.83175L24.2099 6.84583C23.692 7.36371 23.7496 8.21532 24.2673 8.73338V8.73338ZM16.5 5.5V5.5C17.2323 5.5 17.875 4.94803 17.875 4.21571V1.375C17.875 0.615607 17.2594 0 16.5 0V0C15.7406 0 15.125 0.615608 15.125 1.375V4.21571C15.125 4.94803 15.7677 5.5 16.5 5.5V5.5ZM16.5 27.5V27.5C15.7677 27.5 15.125 28.052 15.125 28.7843V31.625C15.125 32.3844 15.7406 33 16.5 33V33C17.2594 33 17.875 32.3844 17.875 31.625V28.7843C17.875 28.052 17.2323 27.5 16.5 27.5V27.5ZM28.7843 15.125C28.052 15.125 27.5 15.7677 27.5 16.5V16.5V16.5C27.5 17.2323 28.052 17.875 28.7843 17.875H31.625C32.3844 17.875 33 17.2594 33 16.5V16.5C33 15.7406 32.3844 15.125 31.625 15.125H28.7843ZM24.2683 24.2662C23.7502 24.7842 23.6921 25.6364 24.2101 26.1544L26.2226 28.1669C26.7596 28.7038 27.6301 28.704 28.1672 28.1672V28.1672C28.7046 27.6302 28.7048 26.7592 28.1676 26.2219L26.1549 24.2092C25.6371 23.6915 24.7862 23.7486 24.2683 24.2662V24.2662ZM8.73325 24.2668C8.21541 23.7493 7.36358 23.6908 6.84591 24.2085L4.83313 26.2212C4.29624 26.7581 4.29624 27.6286 4.83313 28.1655V28.1655C5.37002 28.7024 6.24049 28.7024 6.77738 28.1655L8.79106 26.1518C9.30842 25.6345 9.25077 24.784 8.73325 24.2668V24.2668ZM11 16.5C11 19.5333 13.4667 22 16.5 22C19.5333 22 22 19.5333 22 16.5C22 13.4667 19.5333 11 16.5 11C13.4667 11 11 13.4667 11 16.5ZM24.75 16.5C24.75 21.0567 21.0567 24.75 16.5 24.75C11.9433 24.75 8.25 21.0567 8.25 16.5C8.25 11.9433 11.9433 8.25 16.5 8.25C21.0567 8.25 24.75 11.9433 24.75 16.5Z"  />
                            </svg>

                        </div>
                        <div className='text-white rounded-full p-1 xl:p-[6px]'>
                            <svg className= 'block  fill-current' viewBox="0 0 33 33"  xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5251 2.86275C12.56 5.65125 9.25 10.0292 9.25 16.5C9.25 22.7824 12.2378 27.2223 16.2615 30.1056C8.81679 29.1363 3.08333 23.4039 3.08333 16.5C3.08333 9.515 8.954 3.729 16.5251 2.86275ZM18.5 0C8.29879 0 0 7.40162 0 16.5C0 25.5984 8.29879 33 18.5 33C21.4199 33 24.4663 32.5421 26.7788 31.3789C21.4554 30.536 12.3333 26.7493 12.3333 16.5C12.3333 6.11187 22.2339 2.31413 26.7788 1.62113C24.0963 0.683375 21.4199 0 18.5 0Z"  />
                            </svg>


                        </div>
                        
                        <div  className ={`w-full absolute top-0 left-0 p-1  h-full flex ${darkMode? 'justify-end' : 'justify-start'}`}>
                             <motion.div layout transition = {{type: 'spring', stiffness  : 600, damping: 25}} className ='self-start  w-1/2 h-full rounded-full  mix-blend-difference bg-white'></motion.div>
                        </div>
                       
                    </div>
     );
}
 
export default ThemeToggleBtn;