import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { openItem } from "../store/addSlice";
import { logout } from "../store/authSlice";
import { updateList } from "../store/listSlicer";
import { loading, notLoading } from "../store/loadingSlice";



const List = () => {
  const parent = useRef(null)
  const [height, setHeight] = useState(0);
  const [style, setStyle] = useState({})
  const gridView = useSelector(state => state.gridView)
  const list = useSelector(state => state.list)
  const searchStr = useSelector(state => state.searchString)
  const [searchResult, setSearchResult] = useState([])
  const dispatch = useDispatch()
  


  useEffect(() => {
    dispatch(loading())
    axios.get('https://notes-app-portfolio-project.herokuapp.com/list', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((listRes) => {
      dispatch(updateList(listRes.data))
      dispatch(notLoading())
    }).catch(() =>{
        dispatch(notLoading())
        dispatch(logout())
    })
  }, [dispatch])






  const windowMedia = (height, gridView) => {
    if (window.matchMedia('(min-width: 1280px)').matches && !gridView) {
      return `${(height / 4) - 20}px`
    }
    if (window.matchMedia('(min-width: 1024px)').matches && !gridView) {
      return `${(height / 4) - 12}px`
    }

    if (window.matchMedia('(min-width: 1280px)').matches) {
      return `${(height / 3) - 20}px`
    }
    if (window.matchMedia('(min-width: 768px)').matches) {
      return `${(height / 3) - 12}px`
    }



    return `${(height / 4) - 12}px`
  }

  useEffect(() => {
    const h = parseInt(parent.current.offsetHeight)
    setHeight(h)
    setStyle({
      gridAutoRows: windowMedia(h, gridView),

    })



  }, [height, gridView])



 const handleDelete = (id) =>{
     
       
     axios.post('https://notes-app-portfolio-project.herokuapp.com/list/delete', {id}, {
       headers: {
         Authorization: `Bearer ${localStorage.getItem('token')}`
       }
     }).then((res) =>{
       if(res.data.success ){
         dispatch(updateList(res.data.items))
         
       }
     })

     
 }

 const getTimeAndDate = (timeStamp) =>{
    const date = new Date(timeStamp )
    return {
      time : date.toLocaleTimeString(),
      date: date.toLocaleDateString('en-IN')
    }
 }

  useEffect(() =>{
      const newSearchResult = list.filter(item =>{
            if(item.title.indexOf(searchStr) < 0 || searchStr === ""){
              return false
            }else{
              return true
            }
      })
      setSearchResult(newSearchResult)
  },[searchStr, list ])


  

  return (
    <div className={` w-full h-full dark:bg-black bg-[#E8E8E8] transition-colors duration-300 dark:text-white text-black p-4 pr-2 rounded-2xl overflow-hidden  md:p-6 md:pr-3 md:rounded-3xl xl:p-8 xl:pr-4 relative `}   >
      <motion.ul ref={parent} className={`h-full overflow-y-scroll pr-2 md:pr-3 grid gap-3 md:grid-cols-3 ${gridView ? 'lg:grid-cols-4 ' : 'lg:grid-cols-1 '}  xl:gap-5 xl:pr-4`} style={style}>
      <AnimatePresence >
        {searchResult.length <= 0 && searchStr.length ===0 ? list.map(item => {
          return (
          
            <motion.li  initial = {{opacity: 0, scale: 0}} animate ={{opacity: 1, scale:1, }} exit = {{opacity: 0, scale: 0}} onClick={() => { dispatch(openItem(item.id)) }} layout key={item.id} transition={{ duration: 0.3, type: 'tween' }} className='group cursor-pointer dark:bg-[#363636] dark:text-white text-black bg-white shadow-md  transition-colors duration-300 dark:shadow-none relative p-3 px-4  rounded-xl  overflow-hidden h-full flex  flex-col md:rounded-2xl xl:p-5 ' >

              <h2 className='text-xl my-auto xs:my-0 xs:mb-1 w-10/12 md:w-full font-medium  sm:mb-2 xl:text-2xl overflow-hidden relative before:w-1/6  before:block before:right-0 before:h-full before:absolute before:bg-gradient-to-r before:from-transparent  before:to-white dark:before:to-[#363636] before:transition-colors before:duration-100'>{item.title}</h2>
              <p className='hidden xs:block text-sm  w-10/12 md:w-3/4 md:h-[60%] overflow-hidden md:break-words  xl:text-md  font-light  relative  before:w-1/6 md:before:w-full md:before:h-10 before:block before:right-0 md:before:bottom-0 before:h-full before:absolute before:bg-gradient-to-r md:before:bg-gradient-to-b before:from-transparent  before:to-white dark:before:to-[#363636] before:transition-colors before:duration-100' >{item.content}</p>
              <div className = 'absolute w-full h-full bg-gradient-to-bl from-transparent via-transparent to-gray-500/70  dark:to-black dark:via-gray-200/20 left-0 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-50  ' ></div>
              <svg onClick ={(e) =>{e.stopPropagation(); handleDelete(item.id)}} className='w-4 md:w-5 xl:w-6 absolute bottom-5 right-5 fill-current text-black dark:text-white cursor-pointer transition-colors duration-300' viewBox="0 0 24 24"><path d="M17.573 1.848c.083.699-.476 1.152-1.182 1.152h-8.774c-.704 0-1.266-.452-1.182-1.156-1.329.281-4.435 1.159-4.435 2.516 0 .303.103.7.235 1.361 3.175 2.953 15.758 3.088 19.476.244.159-.824.289-1.278.289-1.611 0-1.333-3.091-2.223-4.427-2.506zm3.113 6.897c-.868 4.587-2.184 10.54-2.709 13.287-1.079 1.312-3.545 1.968-6.013 1.968s-4.935-.656-6.013-1.968c-.529-2.884-1.834-8.868-2.684-13.414 3.154 1.274 7.398 1.401 8.895 1.401 1.771 0 5.561-.151 8.524-1.274zm-13.069-6.763c.922 0 1.669-1.08 1.669-1.982h5.437c0 .902.747 1.982 1.668 1.982h-8.774z" /></svg>  
              <div className = {`sm:block hidden  p-3 xl:p-4 box-content text-xs text-gray-600 dark:text-gray-100  absolute  bottom-0 left-0   opacity-0 pointer-events-none transition-opacity duration-300  group-hover:opacity-100 `}>
               
                <p className = 'font-medium '>{getTimeAndDate(item.createdAt).date}</p>
                <p>{getTimeAndDate(item.createdAt).time}</p>
                 
              </div>              
          </motion.li>
        

          )
        }) :
           searchResult.map(item => {
             return (
              <motion.li  initial = {{opacity: 0, scale: 0}} animate ={{opacity: 1, scale:1, }} exit = {{opacity: 0, scale: 0}} onClick={() => { dispatch(openItem(item.id)) }} layout key={item.id} transition={{ duration: 0.3, type: 'tween' }} className='group cursor-pointer dark:bg-[#363636] dark:text-white text-black bg-white shadow-md  transition-colors duration-300 dark:shadow-none relative p-3 px-4  rounded-xl  overflow-hidden h-full flex  flex-col md:rounded-2xl xl:p-5 ' >

              <h2 className='text-xl my-auto xs:my-0 xs:mb-1 w-10/12 md:w-full font-medium  sm:mb-2 xl:text-2xl overflow-hidden relative before:w-1/6  before:block before:right-0 before:h-full before:absolute before:bg-gradient-to-r before:from-transparent  before:to-white dark:before:to-[#363636] before:transition-colors before:duration-100'>{item.title}</h2>
              <p className='hidden xs:block text-sm  w-10/12 md:w-3/4 md:h-[60%] overflow-hidden md:break-words  xl:text-md  font-light  relative  before:w-1/6 md:before:w-full md:before:h-10 before:block before:right-0 md:before:bottom-0 before:h-full before:absolute before:bg-gradient-to-r md:before:bg-gradient-to-b before:from-transparent  before:to-white dark:before:to-[#363636] before:transition-colors before:duration-100' >{item.content}</p>
              <div className = 'absolute w-full h-full bg-gradient-to-bl from-transparent via-transparent to-gray-500/70  dark:to-black dark:via-gray-200/20 left-0 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-50  ' ></div>
              <svg onClick ={(e) =>{e.stopPropagation(); handleDelete(item.id)}} className='w-4 md:w-5 xl:w-6 absolute bottom-5 right-5 fill-current text-black dark:text-white cursor-pointer transition-colors duration-300' viewBox="0 0 24 24"><path d="M17.573 1.848c.083.699-.476 1.152-1.182 1.152h-8.774c-.704 0-1.266-.452-1.182-1.156-1.329.281-4.435 1.159-4.435 2.516 0 .303.103.7.235 1.361 3.175 2.953 15.758 3.088 19.476.244.159-.824.289-1.278.289-1.611 0-1.333-3.091-2.223-4.427-2.506zm3.113 6.897c-.868 4.587-2.184 10.54-2.709 13.287-1.079 1.312-3.545 1.968-6.013 1.968s-4.935-.656-6.013-1.968c-.529-2.884-1.834-8.868-2.684-13.414 3.154 1.274 7.398 1.401 8.895 1.401 1.771 0 5.561-.151 8.524-1.274zm-13.069-6.763c.922 0 1.669-1.08 1.669-1.982h5.437c0 .902.747 1.982 1.668 1.982h-8.774z" /></svg>  
              <div className = {` sm:block hidden  p-3 xl:p-4 box-content text-xs text-gray-600 dark:text-gray-100  absolute  bottom-0 left-0   opacity-0 pointer-events-none transition-opacity duration-300  group-hover:opacity-100 `}>
               
                <p className = 'font-medium '>{getTimeAndDate(item.createdAt).date}</p>
                <p>{getTimeAndDate(item.createdAt).time}</p>
                 
              </div>              
          </motion.li>
             )
           })
        }
          </AnimatePresence>
      </motion.ul>
      {list.length === 0 && <div className=' text-gray-500/50 dark:text-white/50 text-2xl font-bold  mx-auto  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center xl:text-4xl'>Nothing to show</div>}
      {(searchResult.length <=0 && searchStr.length > 0 && list.length > 0) && <div className=' text-gray-500/50 dark:text-white/50 text-2xl font-bold  mx-auto  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center xl:text-4xl'>No match</div>}
    </div>
  );
}

export default List;