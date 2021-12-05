import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../store/authSlice";
import { loading, notLoading } from "../store/loadingSlice";
import { useHistory } from "react-router";


const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()
    const history = useHistory()
    
     
    const handleSubmit = () =>{
        dispatch(loading())
        axios.post('https://notes-app-portfolio-project.herokuapp.com/login',{
             email,
             password
        }).then((res) =>{
 
             dispatch(notLoading())
            if(res.data.errors){
              setErrors(res.data.errors)
            }else if(res.data.success === false){
                setErrors([])
               setErrors([{param: 'email', msg: res.data.message}])
            }
             else{
                setErrors([])
                dispatch(login(res.data.token))
                history.push('/')
            }
            
        })
     }
   

   

    return (
        <motion.div  initial = {{x: -100, opacity: 0}} animate = {{x: 0 , opacity : 1}}  className=' pt-5 pb-2 flex-grow overflow-hidden mx-auto w-11/12 max-w-[1300px]  md:pb-4 lg:pb-6 xl:pb-16 xl:py-10 2xl:py-16 2xl:pb-24 flex flex-col items-center justify-center'>
            <div className="w-11/12 mx-auto  max-w-[500px] bg-[#E8E8E8] dark:bg-black rounded-3xl p-4  box-border   text-white md:rounded-[38px] md:p-8 2xl:p-10 2xl:px-14 2xl:max-w-[600px] 2xl:text-lg transition-colors duration-300 " >
                <h1 className='font-bold text-center mb-4 text-2xl md:text-3xl 2xl:text-5xl xl:text-4xl text-black dark:text-white transition-colors duration-300'>Login</h1>
                <input onChange = {(e) => setEmail(e.target.value) } type="text" placeholder='Email' className='bg-white dark:text-white text-black placeholder-black dark:bg-[#3F3F3FA3] dark:placeholder-[#DDDDDD] box-border px-4  rounded-2xl w-full  h-[45px] outline-none border-2 border-solid border-transparent focus:border-[#DDDDDD] max-w-[500px] mx-auto block xl:h-[50px] 2xl:h-[60px] 2xl:rounded-3xl 2xl:text-xl  transition-colors duration-300' />
                {errors.length > 0 && errors.map(err =>
                     err.param === 'email' &&
                         <p className = 'text-red-500 text-xs ml-2 md:text-xs xl:text-base'>{err.msg}</p>
                     
                 )}
                <input onChange = {(e) => setPassword(e.target.value) } type="text" placeholder='Password' className='bg-white dark:text-white text-black placeholder-black dark:bg-[#3F3F3FA3] dark:placeholder-[#DDDDDD] box-border px-4  rounded-2xl w-full mt-5 h-[45px] outline-none border-2 border-solid border-transparent focus:border-[#DDDDDD] max-w-[500px] mx-auto block xl:h-[50px] 2xl:h-[60px] 2xl:rounded-3xl 2xl:text-xl  transition-colors duration-300' />
                {errors.length > 0 && errors.map(err =>
                     err.param === 'password' &&
                         <p className = 'text-red-500 text-xs ml-2 md:text-xs xl:text-base'>{err.msg}</p>
                     
                 )}
                <button onClick = { handleSubmit} className='rounded-full  px-4 py-2 mx-auto block w-min mb-8 mt-4 2xl:px-6  2xl:py-2 2xl:text-xl  2xl:my-6 2xl:mb-12   ' style ={{background: 'linear-gradient(90.04deg, rgba(255, 0, 88, 0.64) 7.27%, rgba(0, 152, 249, 0.64) 100.13%)'}}>submit</button>
               
            </div>
            <div className = 'text-white mt-2 xl:text-lg  2xl:text-xl 2xl:mt-4'>
               <p>
                   New user? <Link  to = '/register' className = 'underline' >Register here</Link>
               </p>
            </div>
        </motion.div>
    );
}

export default Login;