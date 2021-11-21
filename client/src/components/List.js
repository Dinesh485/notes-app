import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { useSelector } from "react-redux";


const List = () => {
    const parent = useRef(null)
   const [height, setHeight] = useState(0);
    const [style , setStyle] = useState({})
    const gridView = useSelector(state => state.gridView)
    
    const list = [
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        
       
    ]
     



    const windowMedia = (height , gridView) =>{
      if( window.matchMedia('(min-width: 1280px)').matches && !gridView){
        return `${(height / 4)-20}px`
    }
      if( window.matchMedia('(min-width: 1024px)').matches && !gridView){
        return `${(height / 4)-12}px`
    }
     
      if( window.matchMedia('(min-width: 1280px)').matches){
        return `${(height / 3)-20}px`
      }
      if( window.matchMedia('(min-width: 768px)').matches){
        return `${(height / 3)-12}px`
      }
      
      

      return `${(height/4)-12}px`
    }

    useEffect(() =>{
        const h = parseInt(parent.current.offsetHeight)
        setHeight(h)
        setStyle( {
          gridAutoRows:  windowMedia(h, gridView),
           
        })
         


    },[height, gridView])
     
   useEffect(() =>{
        const children = parent.current.childNodes
        
        children.forEach(child =>{
           child.classList.remove('shadow-md')
        })

   },[gridView])
 
 
    

    return ( 
        <div className = {` w-full h-full dark:bg-black bg-[#E8E8E8] transition-colors duration-300 dark:text-white text-black p-4 pr-2 rounded-2xl overflow-hidden  md:p-6 md:pr-3 md:rounded-3xl xl:p-8 xl:pr-4 `}   > 
             <motion.ul  ref = {parent} className = {`h-full overflow-y-scroll pr-2 md:pr-3 grid gap-3 md:grid-cols-3 ${gridView ? 'lg:grid-cols-4 ' : 'lg:grid-cols-1 '}  xl:gap-5 xl:pr-4`} style = {style}>
             {list.map(item =>{
                 return (
                  
                    <motion.li  layout  transition = {{duration: 0.3}} className = ' dark:bg-[#363636] dark:text-white text-black bg-white shadow-md  transition-colors duration-300 dark:shadow-none relative p-3 px-4  rounded-xl  overflow-hidden h-full flex  flex-col md:rounded-2xl xl:p-5 ' >
                      
                     <h2 className= 'text-xl font-medium mb-1 xs:mb-2 xl:text-2xl '>{item.title}</h2>
                     <p className = 'text-sm   truncate xl:text-md  ' >{item.content}</p>
                    
                   </motion.li>
                   
                 )
             })}
             </motion.ul>
        </div>
     );
}
 
export default List;