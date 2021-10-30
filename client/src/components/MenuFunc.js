import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const MenuFunc = ({btn, drop}) => {
    const [isOpen, setIsOpen] = useState(false)
    
 
    return ( 
         < >
               <button  className = 'w-[fit-content] block' onBlur  = { () => setIsOpen(false)} onClick = {() => setIsOpen(val =>{ return !val})}  >
                 {btn}
             </button>
             <AnimatePresence>
                 {isOpen && <motion.div initial = {{x: '-100%', scale: 0,originX: 1, originY: 0}} animate = {{scale: 1 }} exit = {{scale: 0}} className = 'z-20 bg-white rounded-xl p-3 px-5 absolute mt-4'>
                        {drop}
                     </motion.div>}
             </AnimatePresence>
         </>
     );
}
 
export default MenuFunc;