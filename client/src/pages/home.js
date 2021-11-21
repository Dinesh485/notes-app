import AddBtn from "../components/AddBtn";
import FilterMenu from "../components/filterMenu";
import List from "../components/List";

import { useState } from 'react'

import ToggleView from "../components/toggleView";
import Search from "../components/search";
import Add from "../components/Add";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";


const Home = () => {

    const {isOpen} = useSelector((state) => state.add)
    const gridView = useSelector (state => state.gridView)

    return (
  
        <motion.div initial = {{x: -100, opacity: 0}} animate = {{x: 0 , opacity : 1}} className=' pt-5 pb-2 flex-grow overflow-hidden mx-auto w-11/12 max-w-[1300px] md:flex md:pb-4 lg:pb-6 xl:pb-16 xl:py-10 2xl:py-16 2xl:pb-24'>
              

              <motion.div transition = {{type: "tween", duration: 0.4}} animate = {!gridView ? {width: 800} : {width: '100%'}} className ={`  max-w-full h-full flex flex-col lg:flex-row transition-colors duration-300 mx-auto `}>

                   <div className = 'hidden lg:block lg:min-w-[40px] lg:mr-4 lg:mt-[52px] xl:min-w-[50px] xl:mt-[70px] '>
                        <ToggleView />
                   </div>

                   <div className  = {`flex-grow  overflow-hidden flex flex-col p-1 `}>
                       <div className ='mb-3 xl:mb-5'>
                           <Search />
                       </div>
                       <div className = ' flex-grow overflow-hidden'>
                           <List />
                       </div>
                   </div>


                   <div className = 'h-[60px] mt-2 lg:h-auto lg:min-w-[60px] lg:self-end lg:ml-4 xl:min-w-[70px]'>
                       <AnimatePresence>
                       {isOpen && <Add />}
                       </AnimatePresence>
                       <AddBtn />
                   </div>

              </motion.div>


        </motion.div>
       
    );
}

export default Home;