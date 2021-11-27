import {  motion } from "framer-motion";
import { useState } from "react";

const MenuFunc = ({btn, drop}) => {
    const [isOpen, setIsOpen] = useState(false)
    
    const isOpenVarient = {
        open: {scale: 1 , transition: {type: 'spring', stiffness : 600, damping: 25}},
        close: {x: '-100%', scale: 0,originX: 1, originY: 0}
    }
    const focusInCurrentTarget = ({ relatedTarget, currentTarget }) => {
        if (relatedTarget === null) return false;
        
       let node = relatedTarget.parentNode;
              
        while (node !== null) {
          if (node === currentTarget) return true;
          node = node.parentNode;
        }
      
        return false;
      }
      
      const onBlur = (e) => {
        if (!focusInCurrentTarget(e)) {
           setIsOpen(false)
        }
      }
 
    return ( 
         <div  onBlur  = {onBlur}>
               <button  className = 'w-[fit-content] block'  onClick = {() => setIsOpen(val => !val)} >
                 {btn}
               </button>
             
                 <motion.div onClick = {(e) => {}}  variants = {isOpenVarient} initial = {'close'} animate = {isOpen ? 'open' : 'close'} exit = {{scale: 0}} className = 'z-20 bg-white  shadow-lg dark:shadow-none rounded-xl p-3  absolute mt-4'>
                        {drop}
                     </motion.div>
           
         </div>
     );
}
 
export default MenuFunc;