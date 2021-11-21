
import Logo from '../lib/images/logo.svg'

import ThemeToggleBtn from "./ThemeToggle";

import { useState } from "react";
import DropMenu from "./dropMenu";
import { Link } from 'react-router-dom';
const Nav = () => {

    


    return (
        <nav className='py-4'>
            <div className='flex justify-between items-center w-11/12 max-w-[1300px] mx-auto'>
                <div>
                    <Link to = '/' >
                    <img className='w-[60px] md:w-[70px] xl:w-[80px] 2xl:w-[110px]' src={Logo} alt="" />
                    </Link>
                </div>
                <div className='flex items-center'>
                    <div className="w-[60px] lg:w-[65px] xl:w-[75px] xl:mr-2">

                    <ThemeToggleBtn />
                    </div>
                    <DropMenu />
                </div>
            </div>
        </nav>
    );
}

export default Nav;