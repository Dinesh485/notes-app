import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
    const darkMode = useSelector(state => state.darkMode)
    return (
        <motion.div initial = {{x: -100, opacity: 0}} animate = {{x: 0 , opacity : 1}}  className=' pt-5 pb-2 flex-grow overflow-hidden mx-auto w-11/12 max-w-[1300px]  md:pb-4 lg:pb-6 xl:pb-16 xl:py-10 2xl:py-16 2xl:pb-24 flex flex-col items-center justify-center'>
            <div className="w-11/12 mx-auto  max-w-[500px] bg-[#E8E8E8] dark:bg-black rounded-3xl p-4  box-border   text-white md:rounded-[38px] md:p-8 2xl:p-10 2xl:px-14 2xl:max-w-[600px] 2xl:text-lg transition-colors duration-300 " >
                <h1 className='font-bold text-center mb-4 text-2xl md:text-3xl 2xl:text-5xl xl:text-4xl text-black dark:text-white transition-colors duration-300'>Login</h1>
                <input type="text" placeholder='Email' className='bg-white dark:text-white text-black placeholder-black dark:bg-[#3F3F3FA3] dark:placeholder-[#DDDDDD] box-border px-4  rounded-2xl w-full mb-5 h-[45px] outline-none border-2 border-solid border-transparent focus:border-[#DDDDDD] max-w-[500px] mx-auto block xl:h-[50px] 2xl:h-[60px] 2xl:rounded-3xl 2xl:text-xl  transition-colors duration-300' />
                <input type="text" placeholder='Password' className='bg-white dark:text-white text-black placeholder-black dark:bg-[#3F3F3FA3] dark:placeholder-[#DDDDDD] box-border px-4  rounded-2xl w-full  h-[45px] outline-none border-2 border-solid border-transparent focus:border-[#DDDDDD] max-w-[500px] mx-auto block xl:h-[50px] 2xl:h-[60px] 2xl:rounded-3xl 2xl:text-xl  transition-colors duration-300' />
                 {/* <p className = 'text-red-500 text-xs ml-2 md:text-xs xl:text-base'>This is error message</p> */}
                <button className='rounded-full  px-4 py-2 mx-auto block w-min mb-8 mt-4 2xl:px-6  2xl:py-2 2xl:text-xl  2xl:my-6 2xl:mb-12   ' style ={{background: 'linear-gradient(90.04deg, rgba(255, 0, 88, 0.64) 7.27%, rgba(0, 152, 249, 0.64) 100.13%)'}}>submit</button>
                <button className='rounded-full bg-[#4FBC5A] px-4 py-2 mx-auto block relative  mb-5 w-11/12 max-w-[300px] xl:h-[45px] 2xl:h-[55px] md:px-6  text-sm md:text-base xl:text-lg'>
                    <div className="relative">
                        <svg className='h-full absolute ' viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.427 17.9487V25.1115H33.5792C33.0894 28.1826 29.906 34.1248 21.427 34.1248C14.1112 34.1248 8.14226 28.2184 8.14226 20.9332C8.14226 13.6509 14.1112 7.74158 21.427 7.74158C25.59 7.74158 28.3755 9.47261 29.9672 10.9649L35.7831 5.50319C32.0487 2.10083 27.2123 0.0415039 21.427 0.0415039C9.58093 0.0415039 0 9.38307 0 20.9332C0 32.4833 9.58093 41.8249 21.427 41.8249C33.7935 41.8249 42 33.3488 42 21.4107C42 20.0378 41.8439 18.9932 41.6602 17.9487H21.427Z" fill="white" />
                        </svg>

                        <span>Login with google</span>
                    </div>
                </button>
                <button className='rounded-full bg-[#4F81BC] px-4 py-2 mx-auto block relative  mb-5 w-11/12 max-w-[300px] xl:h-[45px] 2xl:h-[55px] md:px-6  text-sm md:text-base xl:text-lg'>
                    <div className="relative"> 
                        <svg className='h-full absolute' viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 14.0836H0V21.0475H5V41.9391H13.3333V21.0475H19.4033L20 14.0836H13.3333V11.1814C13.3333 9.51872 13.6533 8.86063 15.1917 8.86063H20V0.155762H13.6533C7.66 0.155762 5 2.91172 5 8.19036V14.0836Z" fill="white" />
                        </svg>


                        <span>Login with facebook</span>
                    </div>
                </button>

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