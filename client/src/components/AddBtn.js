import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { openEmpty, close } from "../store/addSlice";
import { updateList } from "../store/listSlicer";
import { loading, notLoading } from "../store/loadingSlice";
import { openPopUp } from "../store/popupSlice";




const AddBtn = () => {
     const { isOpen, item } = useSelector((state) => state.add)
     const addItem = useSelector(state => state.addItem)
     const list = useSelector(state => state.list)
     const dispatch = useDispatch()
     const [viewport,] = useState(window.innerWidth)
     const newitem = useSelector(state => state.addItem)
     const history = useHistory()
     const [edited, setEdited] = useState(false)
     


     const hanldeClick = () => {






          if (item) {
               dispatch(loading())
               const updateItem = {
                    id: item,
                    title: addItem.title,
                    content: addItem.content
               }

               // route to update existing  item
               return axios.post('http://localhost:5000/list/update', updateItem, {
                    headers: {
                         Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
               }).then((res) => {
                    if (res.data.success) {
                         dispatch(updateList(res.data.items))
                         dispatch(close())
                         dispatch(notLoading())

                    }
               })

          } else {

               if (addItem.title) {
                    dispatch(loading())
                    // route for adding a new item
                    axios.post('http://localhost:5000/list/add', newitem, {
                         headers: {
                              'Authorization': `Bearer ${localStorage.getItem('token')}`
                         }
                    }).then((res) => {

                         if (res.data.success) {
                              dispatch(updateList(res.data.items))
                              dispatch(close())

                              dispatch(notLoading())
                         }

                    }).catch((err) => {
                         if (err) {
                              history.push('/login')
                         }
                    })
               }else{
                    dispatch(openPopUp('Title should not be empty'))
               }



          }






     }

     useEffect(() =>{
       
          if(isOpen && item) {
               const previousItem = list.filter(obj=>{
                    return obj.id === item
               })[0]

               if(previousItem.title === addItem.title && previousItem.content === addItem.content){
                    setEdited(false)
               }else{
                    setEdited(true)
               }
               
              
          }

          if(isOpen && !item){
               if(addItem.title ==='' &&  addItem.content===''){
                    setEdited(false)
               }else{
                    setEdited(true)
               }
          }

     },[addItem, item, isOpen,list])


     const handleDispatch = () => {
          if (isOpen) {
               
               if(edited){
                    dispatch(openPopUp('Discard changes?'))
               }else{
                    dispatch(close())
               }
               
          } else {
               dispatch(openEmpty())
          }
     }

     const btnVariation = {
          open: viewport >= 1024 ? { y: '-140% ', fill: '#cc2a1f' } : { x: -50, fill: '#cc2a1f' },
          close: viewport >= 1024 ? { y: 0, fill: '#0000' } : { x: 0, fill: '#0000' }
     }
     const btnVariation2 = {
          open: viewport >= 1024 ? { y: 0 } : { x: 50 },
          close: viewport >= 1024 ? { y: 0, transition: { delay: 0.5 } } : { x: 0 }
     }
     const pathVarient = {
          open: {
               rotate: 45,
          },
          close: {
               rotate: 0,
          }
     }


     return (
          <motion.div className='h-full w-full justify-center  relative flex lg:flex-col  '>




               <AnimatePresence>

                    {isOpen && <motion.svg onClick={hanldeClick} variants={btnVariation2} initial={'close'} animate={isOpen ? 'open' : 'close'} exit={'close'} className='block lg:ml-0  absolute h-full lg:w-full lg:h-auto' viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <circle cx="50" cy="50.0015" r="50" fill="url(#paint0_linear_21:478)" />
                         <path d="M68.5628 37.1291C67.381 35.9473 65.4613 35.9591 64.2942 37.1554L45.4401 56.4807C44.2948 57.6546 42.419 57.6912 41.2288 56.5629L34.6958 50.3698C33.5187 49.2539 31.6678 49.2757 30.5173 50.419L29.2119 51.7162C28.0202 52.9004 28.0332 54.8323 29.2407 56.0004L41.9145 68.2605C43.0993 69.4067 44.9869 69.3821 46.1415 68.2056L70.5571 43.3262C71.7099 42.1515 71.7011 40.2674 70.5373 39.1036L68.5628 37.1291Z" fill="white" />
                         <defs>
                              <linearGradient id="paint0_linear_21:478" x1="50" y1="0.00146484" x2="50" y2="100.001" gradientUnits="userSpaceOnUse">
                                   <stop stopColor="#0196FA" />
                                   <stop offset="1" stopColor="#E03659" />
                              </linearGradient>
                         </defs>
                    </motion.svg>}
               </AnimatePresence>

               <motion.svg variants={btnVariation} initial={'close'} animate={isOpen ? 'open' : 'close'} onClick={handleDispatch} className='block  relative ' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <motion.circle className='fill-current dark:text-black text-white transition-colors duration-300' cx="50" cy="50" r="50" />
                    <motion.path className="fill-current dark:text-white text-black transition-colors duration-300" variants={pathVarient} animate={isOpen ? "open" : "close"} d="M74 49C74 47.3431 72.6569 46 71 46H57C55.3431 46 54 44.6569 54 43V29C54 27.3431 52.6569 26 51 26H49C47.3431 26 46 27.3431 46 29V43C46 44.6569 44.6569 46 43 46H29C27.3431 46 26 47.3431 26 49V51C26 52.6569 27.3431 54 29 54H43C44.6569 54 46 55.3431 46 57V71C46 72.6569 47.3431 74 49 74H51C52.6569 74 54 72.6569 54 71V57C54 55.3431 55.3431 54 57 54H71C72.6569 54 74 52.6569 74 51V49Z" />
               </motion.svg>

          </motion.div>

     );
}

export default AddBtn;