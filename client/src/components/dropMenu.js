
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import MenuFunc from "./MenuFunc";
import { useLocation } from "react-router";

const Links = () => {
 

    return (
        <>
            <NavLink activeStyle  = {{display: "none"}} className='py-2 flex items-center 2xl:text-lg' to="/profile" alt=''><svg xmlns="http://www.w3.org/2000/svg" className='w-5 mr-2 xl:w-6 xl:mr-3' viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" /></svg><span>Profile</span></NavLink>
            <NavLink activeStyle  = {{display: "none"}} className='py-2 flex items-center 2xl:text-lg' to="/login" alt=''><svg xmlns="http://www.w3.org/2000/svg" className='w-5 mr-2 xl:w-6 xl:mr-3' viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.707 13.946l-1.035 1.054h-.672v1h-1v1h-3v-2.292l3.146-3.185c.496 1.111 1.419 1.988 2.561 2.423zm5.293-4.279c0 2.025-1.642 3.667-3.667 3.667-2.024 0-3.666-1.642-3.666-3.667s1.642-3.667 3.666-3.667c2.025 0 3.667 1.642 3.667 3.667zm-1.375-1.375c0-.506-.41-.917-.917-.917s-.916.411-.916.917.409.917.916.917.917-.411.917-.917z" /></svg><span>Login</span></NavLink>
            <NavLink activeStyle  = {{display: "none"}} className='py-2 flex items-center 2xl:text-lg' to="/signup" alt=''><svg xmlns="http://www.w3.org/2000/svg" className='w-5 mr-2 xl:w-6 xl:mr-3' viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.019 10.13c-.282-.293-.268-.751.024-1.035l2.974-2.884c.145-.14.332-.211.517-.211.188 0 .375.073.518.22l-4.033 3.91zm-4.888 7.348c-.062.059-.093.139-.093.218 0 .167.136.304.304.304.076 0 .152-.029.212-.086l.499-.486-.422-.436-.5.486zm4.219-5.617l-1.71 1.657c-.918.891-1.387 1.753-1.819 2.958l.754.779c1.217-.395 2.094-.836 3.013-1.728l1.709-1.658-1.947-2.008zm4.985-5.106l-4.402 4.27 2.218 2.29 4.402-4.269c.323-.314.485-.73.485-1.146 0-1.392-1.687-2.13-2.703-1.145z" /></svg><span>Register</span></NavLink>
            <NavLink activeStyle  = {{display: "none"}} className='py-2 flex items-center 2xl:text-lg' to="/logout" alt=''><svg xmlns="http://www.w3.org/2000/svg" className='w-5 mr-2 xl:w-6 xl:mr-3' viewBox="0 0 24 24"><path d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-2 10v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.577-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.423 0 2.774-.302 4-.838v-2.162z" /></svg><span className = 'whitespace-nowrap'>Log out</span></NavLink>
        </>
    )

}

const Btn = () => {
    return (
        <svg className='h-7 dark:text-white text-black fill-current xl:h-9 md:rotate-90 transition-colors duration-300'  viewBox="0 0 16 59" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 7.75C15.5 12.0306 12.0306 15.5 7.75 15.5C3.46942 15.5 0 12.0306 0 7.75C0 3.46942 3.46942 0 7.75 0C12.0306 0 15.5 3.46942 15.5 7.75Z" />
            <path d="M15.5 29.5C15.5 33.7806 12.0306 37.25 7.75 37.25C3.46942 37.25 0 33.7806 0 29.5C0 25.2194 3.46942 21.75 7.75 21.75C12.0306 21.75 15.5 25.2194 15.5 29.5Z" />
            <path d="M15.5 51.25C15.5 55.5306 12.0306 59 7.75 59C3.46942 59 0 55.5306 0 51.25C0 46.9694 3.46942 43.5 7.75 43.5C12.0306 43.5 15.5 46.9694 15.5 51.25Z" />
        </svg>
    )
}

const DropMenu = () => {

    return (<div className='ml-5 md:ml-7' >


        <MenuFunc btn={<Btn />} drop={<Links />} />


    </div>);
}

export default DropMenu;