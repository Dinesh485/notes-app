import {  motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {useEffect, useState} from 'react'
import { updateItem } from "../store/addItemSlicer";

const Add = () => {
   
    const GridView = useSelector(state => state.gridView)
     const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const add = useSelector(state => state.add)
    const list = useSelector(state => state.list)
   
    useEffect(() =>{
        const item = {
            title: title,
            content: content
        }
         dispatch(updateItem(item))
    },[title, content, dispatch])
    
    useEffect(() =>{
       if(add.item){
          const item = list.filter((item) =>{
              return item.id === add.item
          })[0]
        
          setTitle(item.title)
          setContent(item.content)
       }
    },[add,list])

 

    return (
        <motion.div transition = {{type: 'tween', duration: 0.2}} animate  = {{backdropFilter: `blur(30px)`}} exit = {{backdropFilter: 'blur(0px)', opacity: 0}}  className='absolute top-0 left-0 w-full h-full bg-[#77777778] bg-opacity-50 dark:bg-[#CACCCC6B] '>
           
            <div  className ='relative w-11/12 max-w-[1300px] h-full mx-auto'>
            <div className={`absolute w-full h-[450px] max-h-[calc(100%-100px)] max-w-[600px]   lg:max-w-[700px] lg:h-[500px] bottom-[80px] mx-auto right-1/2 translate-x-1/2 lg:bottom-0 ${GridView ? ' lg:right-[80px] xl:right-[100px]': 'lg:right-[200px] xl:right-[350px]'}   xl:h-[600px] xl:max-w-[800px] 2xl:h-[800px] 2xl:max-w-[1000px] xl:text-lg 2xl:text-xl lg:translate-x-0  md:pb-4 lg:pb-6 xl:pb-16  2xl:pb-24`}>
                
                <motion.div onClick = {(e) => e.stopPropagation()}  initial = {{scale: 0 , originX: 1 , originY: 1}} animate = {{scale: 1, transition : {type: 'spring', stiffness : 500, damping: 30} }} exit ={{scale: 0}} className='dark:bg-black bg-[#E8E8E8] text-white rounded-2xl p-4 py-7 h-full    w-full flex flex-col  md:rounded-3xl lg:p-6 lg:py-8 xl:p-8 2xl:p-10'>
                    <input onChange = {(e) =>{ setTitle(e.target.value)}} value ={title} type="text" className='dark:bg-[#3F3F3FA3] bg-white dark:placeholder-[#DDDDDD] dark:text-white text-black placeholder-black  w-full block m-0 h-[45px] mb-5 lg:mb-8 rounded-xl p-2 px-3 outline-none border-2 border-solid border-transparent focus:border-[#DDDDDD] lg:h-[50px] 2xl:h-[60px] font-bold xl:rounded-2xl xl:px-4 xl:p-3' placeholder='Title' />
                    <textarea onChange = {(e) =>{ setContent(e.target.value)}} value = {content} className='dark:bg-[#3F3F3FA3] bg-white dark:placeholder-[#DDDDDD] dark:text-white text-black placeholder-black  w-full block rounded-xl flex-grow outline-none border-2 border-transparent border-solid focus:border-[#DDDDDD] resize-none p-2 px-3 xl:rounded-2xl xl:px-4 xl:p-3' placeholder='Content'></textarea>
                </motion.div>
               
            </div>
            </div>
           
        </motion.div>
    );
}

export default Add;